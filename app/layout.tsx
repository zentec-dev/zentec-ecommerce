import "../styles/globals.scss";
import Header from "../components/header";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["200", "300", "400", "500", "600", "800", "900"],
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={montserrat.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={montserrat.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
