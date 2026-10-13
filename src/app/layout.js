import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Talin Global Group - Building Sustainable Partnerships",
  description: "A diversified conglomerate with operations spanning real estate, manufacturing, cosmetics, trading, and industrial solutions across Sudan, UAE, Egypt, Saudi Arabia, and beyond.",
  keywords: "Talin Global Group, Sudan business, manufacturing, real estate, cosmetics, trading, industrial solutions",
  authors: [{ name: "Talin Global Group" }],
  openGraph: {
    title: "Talin Global Group - Building Sustainable Partnerships",
    description: "Creating sustainable value through strategic partnerships and global excellence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="light">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
