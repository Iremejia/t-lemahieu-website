export const metadata = {
  title: 'T. Lemahieu — Belgian Abstract Artist',
  description: 'Official portfolio of Belgian abstract artist T. Lemahieu. Original works, collections, archive and special projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
