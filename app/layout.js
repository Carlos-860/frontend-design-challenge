import "./globals.css";
import { neuePlak } from "./fonts";

export const metadata = {
  title: "Under Armour Home",
  description: "Under Armour home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={neuePlak.className}>{children}</body>
    </html>
  );
}