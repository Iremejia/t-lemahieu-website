import "./globals.css";

export const metadata = {
  title: "T. Lemahieu — Belgian Abstract Artist | Original Works & Commissions",
  description: "Original abstract works, painted objects and selected commissions by Belgian artist T. Lemahieu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
