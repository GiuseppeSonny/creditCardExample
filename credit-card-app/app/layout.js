import "./globals.css";

export const metadata = {
  title: "Credit Card Application",
  description: "A credit card Form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
