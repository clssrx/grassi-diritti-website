import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FrontendLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <div className="max-w-6xl sm:max-w-7xl mx-auto px-6 sm:px-4">
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
