import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About Aakaura",
  url: "https://aakaura.in/about",
});
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
