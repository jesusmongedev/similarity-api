import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Similarity Api",
  description: "A project to learn modern full-stack development made by Josh.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
