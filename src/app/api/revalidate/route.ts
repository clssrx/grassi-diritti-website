import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type SanityWebhookPayload = {
  _type?: string;
};

const REVALIDATABLE_TYPES = new Set([
  "archivePage",
  "blogAuthor",
  "blogPost",
  "contactPage",
  "homepageSettings",
  "researchPage",
  "resourcePage",
]);

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { message: "Missing SANITY_REVALIDATE_SECRET" },
      { status: 500 },
    );
  }

  const { isValidSignature, body } = await parseBody<SanityWebhookPayload>(
    request,
    secret,
  );

  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  if (!body?._type) {
    return NextResponse.json({ message: "Missing document type" }, { status: 400 });
  }

  if (!REVALIDATABLE_TYPES.has(body._type)) {
    return NextResponse.json({
      message: "No cached page uses this document type",
      type: body._type,
    });
  }

  revalidateTag(body._type, { expire: 0 });

  // The blog index is a statically rendered route; invalidate it explicitly
  // when a post changes so its card image is refreshed on the next request.
  if (body._type === "blogPost") {
    revalidatePath("/blog");
  }

  return NextResponse.json({ revalidated: true, type: body._type });
}
