import { Metadata } from "next";
import "@/app/globals.css"
import Sidebar from "./sidebar";

export const metadata: Metadata = {
  title: "Inventory Manager",
  description: "Inventory management solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}