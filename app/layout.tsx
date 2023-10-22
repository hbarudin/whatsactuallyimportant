export const metadata = {
  title: "What's actually important",
  description: "Sort your Todoist items into an Eisenhower matrix.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
