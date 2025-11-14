// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Jahnvi Dhameliya | Portfolio',
  description: 'Technical Lead | Software Engineer - Bridging Innovation with Business Value',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
