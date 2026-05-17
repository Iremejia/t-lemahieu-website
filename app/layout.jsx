import "./globals.css";

export const metadata = {
  title: "T. Lemahieu | Abstract Fine Art",
  description: "Unique original works, painted objects and commissions by Belgian artist T. Lemahieu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
