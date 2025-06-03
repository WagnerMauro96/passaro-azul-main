import Link from "next/link";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ArrowUpIcon } from "@/assets/icons/arrow-up-icon";
import { FaWhatsapp } from "react-icons/fa";


export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-gray-50 min-h-screen relative">
      <Header />
      <div className="w-full overflow-hidden">{children}</div>
      <Footer />

      <Link
        href={"#banner"}
        className="fixed z-50 w-10 h-10 rounded-lg bg-primary flex items-center justify-center bottom-10 right-10"
      >
        {ArrowUpIcon}
      </Link>
      <Link
        href="https://wa.me/+244931907888" 
        target="_blank"
        className="fixed animate-bounce z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center bottom-24 right-4 shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp  className="w-8 h-8 text-white" />
      </Link>
    </div>
  );
}
