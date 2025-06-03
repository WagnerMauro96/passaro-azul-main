import { LayoutProvider } from "@/components/layout/LayoutProvider";
import { RootLayout } from "@/components/layout/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <LayoutProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </LayoutProvider>
  );
}
