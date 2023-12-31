import './globals.css';
import { Martel_Sans } from 'next/font/google';

export const metadata = {
  title: 'Xiaotian Liu',
  description: 'Generated by create next app',
};

const martel_Sans = Martel_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={martel_Sans.className}>{children}</body>
    </html>
  );
}
