import "./globals.css";

export const metadata = {
  title: "T. Lemahieu | Abstract Fine Art",
  description: "Portfolio website for Belgian abstract artist T. Lemahieu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
