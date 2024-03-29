import { Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { metadata } from "./metadata";

const montserrat = Montserrat({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
