import { Montserrat } from "next/font/google";
import '@fontsource/mountains-of-christmas'; // Default weight 400
import Head from "next/head";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Jujora",
  description: "Connecting you directly to the heart of Agriculture. Enjoy the convenience of shopping directly from farmers, ensuring quality and authenticity every time.",
  icons: {
    // Replace the icon path with your desired favicon icon
    favicon: '/favicon_io/favicon-32x32.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
