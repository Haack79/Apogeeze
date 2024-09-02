import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Inter as FontSans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WebsocketProvider } from "@/components/WebSocketProvider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Apogeeze",
    default: "Apogeeze"
  },
  description: "Ticket status displayer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )} suppressHydrationWarning>
          <WebsocketProvider>
            {children}
            <Toaster />
          </WebsocketProvider>
      </body>
    </html>
  );
}

