export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("it-IT", {
    dateStyle: "long",
    timeZone: "Europe/Rome",
  }).format(new Date(date));
}
