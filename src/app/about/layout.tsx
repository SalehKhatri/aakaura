export const metadata = {
  title: "About Us | Aakaura",
  description: "Learn more about our mission and team.",
  openGraph: {
    title: "About Us - Your Website",
    description: "Learn more about our mission and team.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
