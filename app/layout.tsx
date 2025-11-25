import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const hostname = headersList.get("host") || "";
  const isVercelApp = hostname.includes("vercel.app");

  return {
    title: {
      default: "Scripture Meanings - Biblical Interpretations and Spiritual Insights",
      template: "%s | Scripture Meanings"
    },
    description: "Discover the deeper meanings behind biblical scripture, numbers, dreams, and symbols. Explore spiritual insights and biblical interpretations.",
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    robots: isVercelApp ? {
      index: false,
      follow: false,
      noindex: true,
      nofollow: true,
    } : {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
