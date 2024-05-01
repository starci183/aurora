"use client"
import { Nunito } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Footer, Navbar } from "./_components";
import { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { LayoutContext, LayoutContextProvider } from "./_hooks";

const font = Nunito({ subsets: ["latin"] });

const WrappedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { states } = useContext(LayoutContext)!
  const { darkModeState } = states
  const [darkMode] = darkModeState

  return (
    <html lang="en" className={darkMode ? "dark" : "light"}>
      <body className={font.className}>
        <NextUIProvider>
          <ScrollToTop className="!rounded-full !grid !place-items-center !w-12 !h-12 !right-6 !bg-content1 !z-20" smooth component={<ArrowUpIcon className="text-primary w-8 h-8" />} />
          <Navbar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LayoutContextProvider>
      <WrappedLayout>
        {children}
      </WrappedLayout>
    </LayoutContextProvider>
  )
}

export default Layout