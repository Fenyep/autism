import type { Metadata } from "next";
import "../styles/globals.css";
import { inter } from "./ui/fonts";
import { Toaster } from "src/components/ui/toaster";
import { cn } from "src/lib/utils";
import { ModalProvider } from "src/provider/ModalProvider";
import ModalContainer from "./ui/modal/ModalContainer";

export const metadata: Metadata = {
  title: "New App",
  description: "Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={"min-h-screen bg-background font-sans antialiased"}>
        <main className={cn(inter.className, "relative h-screen overflow-y-hidden")}>
          {/* <Nav /> */}
          <ModalProvider>
            {children}
            <ModalContainer />
          </ModalProvider>
          <Toaster />
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
