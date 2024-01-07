import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import { Web3Modal } from '@/context/Web3Modal';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      
        <Web3Modal> {children} </Web3Modal>
        
        </body>
    </html>
  );
}
