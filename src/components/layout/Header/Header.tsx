import { Container } from "../Container/Container";
import { PhoneIcon } from "@/assets/icons/phone-icon";
import { LocationIcon } from "@/assets/icons/location-icon";
import { EmailIcon } from "@/assets/icons/email-icon";
import Link from "next/link";
import Image from "next/image";
import { logoImage } from "@/assets/common";
import { useLayoutDictionary } from "../../../../locales/utils/useLayoutDictionary";
import { ClockIcon } from "@/assets/icons/clock-icon";
import { MenuIcon } from "@/assets/icons/menu-icon";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { LanguageTrigger } from "./LanguageTrigger";

export function Header() {
  const { translate } = useLayoutDictionary();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="w-full top-0 z-20 sticky shadow-lg">
      <div className="w-full bg-primary hidden lg:block">
        <Container>
          <div className="flex py-2 items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-x-2">
                <div className="w-4 flex [&>svg_*]:stroke-secondary" aria-hidden="true">
                  {ClockIcon}
                </div>
                <span className="text-secondary text-sm" aria-label="Work schedule">
                  {translate("header.work-schedule")}
                </span>
              </div>

              <div className="flex items-center gap-x-2">
                <div className="w-4 flex [&>svg_*]:stroke-secondary" aria-hidden="true">
                  {LocationIcon}
                </div>
                <span className="text-secondary text-sm" aria-label="Location">
                  Rua Santa Luzia, Samba, Luanda - Angola
                </span>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-x-2">
                <div className="w-4 flex [&>svg_*]:stroke-secondary" aria-hidden="true">
                  {PhoneIcon}
                </div>
                <span className="text-secondary text-sm" aria-label="Phone number">
                  +244 931 907 888
                </span>
              </div>

              <div className="flex items-center gap-x-2">
                <div className="w-4 flex [&>svg_*]:stroke-secondary" aria-hidden="true">
                  {EmailIcon}
                </div>
                <span className="text-secondary text-sm" aria-label="Email address">
                  passaroazulseguranca@gmail.com
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="w-full h-20 bg-white relative">
        <Container className="flex items-center justify-between">
          <Link href="/" className="relative top-1" aria-label="Go to homepage">
            <Image
              src={logoImage}
              className="w-20 h-20 scale-[1.3]"
              alt="Passaro Azul Segurança Logo"
              width={80}
              height={80}
            />
          </Link>

          <div className="flex items-center gap-x-6 lg:hidden">
            <LanguageTrigger />

            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="p-1 border rounded-lg lg:hidden [&>svg_*]:stroke-gray-600"
              aria-label={isOpenMenu ? "Close menu" : "Open menu"}
              aria-expanded={isOpenMenu ? "true" : "false"}
              aria-controls="mobile-menu"
            >
              {MenuIcon}
            </button>
          </div>

          <nav className={`hidden lg:flex items-center gap-x-10`} aria-label="Main navigation">
            <Link
              className="font-medium hover:text-primary transition-all"
              href="#banner"
              aria-label={translate("navbar.home")}
            >
              {translate("navbar.home")}
            </Link>
            <Link
              className="font-medium hover:text-primary transition-all"
              href="#about-us"
              aria-label={translate("navbar.about-us")}
            >
              {translate("navbar.about-us")}
            </Link>
            <Link
              className="font-medium hover:text-primary transition-all"
              href="#portfolio"
              aria-label={translate("navbar.portfolio")}
            >
              {translate("navbar.portfolio")}
            </Link>
            <Link
              className="font-medium hover:text-primary transition-all"
              href="#services"
              aria-label={translate("navbar.services")}
            >
              {translate("navbar.services")}
            </Link>
            <Link
              className="font-medium hover:text-primary transition-all"
              href="#contact-us"
              aria-label={translate("navbar.contact-us")}
            >
              {translate("navbar.contact-us")}
            </Link>

            <LanguageTrigger />
          </nav>
        </Container>

        <MobileMenu isOpenMenu={isOpenMenu}/>
      </div>
    </header>
  );
}
