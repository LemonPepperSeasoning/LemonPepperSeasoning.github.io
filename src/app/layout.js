import "./globals.css";

export const metadata = {
  title: "LemonPepperSeasoning",
  description: "Website created by LemonPepperSeasoning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
