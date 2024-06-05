import "./globals.css";

export const metadata = {
  title: "Text Paralax Effect",
  description: "Rebuild text paralax effect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
