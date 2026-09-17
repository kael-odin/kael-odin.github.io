// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import HomeNav from "@/components/HomeNav";
import ThemeProvider from "./theme-provider";
import PageTransition from "./page-transition";
import DelayedFooter from "@/delayed-footer";
import { Inter, Young_Serif } from "next/font/google";
import { siteConfig } from "./site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kael-odin.github.io"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ["汤勇", "Kael Odin", "个人作品集", "开发者", "全栈", "AI 工具", "徐州"],
  authors: [{ name: "汤勇 Kael Odin", url: "https://github.com/kael-odin" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://kael-odin.github.io",
    siteName: "汤勇 Kael Odin 的个人作品集",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body suppressHydrationWarning className={`${inter.variable} ${youngSerif.variable} antialiased px-6 hide-scrollbar`}>
        <ThemeProvider>
          <HomeNav />
          <PageTransition>{children}</PageTransition>
          <DelayedFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
