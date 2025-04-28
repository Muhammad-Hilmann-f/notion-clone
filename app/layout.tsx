import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./(marketing)/_components/providers/theme-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlocNote",
  description: "The connected workspace for your team",
  openGraph: {
    title: "BlocNote",
    description: "The connected workspace for your team",
  },
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/blocnote_icon_light.svg",
      href: "/blocnote_icon_light.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/blocnote_icon_dark.svg",
      href: "/blocnote_icon_dark.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="BlocNoteTheme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
