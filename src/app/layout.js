import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProviderContext } from "../utils/themeContext.jsx";
import AppHeader from "../components/AppHeader/index.jsx";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arya Labs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <ThemeProviderContext>
          <AppHeader />
          {children}
        </ThemeProviderContext>
      </body>
    </html>
  );
}
