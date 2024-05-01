import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

import { Web3Modal } from '@/context/Web3Modal';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Decentracode',
  description: 'A conduit for developers into web3',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Web3Modal> {children} </Web3Modal>
        </body>
      </html>
    </ClerkProvider>
  );
}
