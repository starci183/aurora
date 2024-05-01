"use client"
import { Nunito } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Footer, Navbar } from "./_components";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const font = Nunito({ subsets: ["latin"] });

interface LayoutContextValue {
  states: {
    darkModeState: [boolean, Dispatch<SetStateAction<boolean>>]
  }
}

export const LayoutContext = createContext<LayoutContextValue | null>(null)

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const darkModeState = useState(false)
  const [darkMode, setDarkMode] = darkModeState

  return (
    <LayoutContext.Provider value={{
      states: {
        darkModeState
      }
    }}>
      <html lang="en" className={darkMode ? "dark" : "light"}>
        <body className={font.className}>
          <NextUIProvider>
            <ScrollToTop className="!rounded-full !grid !place-items-center !w-12 !h-12 !right-6 !bg-content1 !z-20" smooth component={<ArrowUpIcon className="text-primary w-8 h-8"/>}/>
            <Navbar />
            {children}
            <Footer/>
          </NextUIProvider>
        </body>
      </html>
    </LayoutContext.Provider>
  );
}

export default Layout