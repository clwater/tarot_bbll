import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import commonBack from "@/app/assets/image/common_back.jpg";

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "包包和蓝蓝",
    description: "教你解Tarot和周易",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                  className={`h-screen bg-opacity-75 text-white/90 bg-scroll hover:bg-fixed bg-cover bg-center w-full  items-center justify-center backdrop-blur-lg ${inter.className }`}
                  style={{
                      backgroundImage: `url(${commonBack.src})`,
                  }}
            >
                <Providers>
                    {children}
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}
