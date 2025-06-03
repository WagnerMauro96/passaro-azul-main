import Link from "next/link";
import { useLayoutDictionary } from "../../../../locales/utils/useLayoutDictionary";
import { Container } from "../Container/Container";

export function MobileMenu({ isOpenMenu }: { isOpenMenu: boolean }) {
  const { translate } = useLayoutDictionary();

  return (
    <div
      id="mobile-menu"
      className={`w-full absolute top-[100%] transition-all duration-200 z-20 bg-white  ${
        isOpenMenu ? "h-64" : "h-0 overflow-hidden"
      }`}
    >
      <Container>
        <nav
          className={`flex ${
            !isOpenMenu && "hidden opacity-0 "
          } flex-col items-start gap-y-4 border-t mt-2 pt-4 transition-all delay-300 `}
        >
          <Link
            className="font-medium hover:text-primary transition-all"
            href="#banner"
          >
            {translate("navbar.home")}
          </Link>
          <Link
            className="font-medium hover:text-primary transition-all"
            href="#about-us"
          >
            {translate("navbar.about-us")}
          </Link>
          <Link
            className="font-medium hover:text-primary transition-all"
            href="#portfolio"
          >
            {translate("navbar.portfolio")}
          </Link>
          <Link
            className="font-medium hover:text-primary transition-all"
            href="#services"
          >
            {translate("navbar.services")}
          </Link>
          <Link
            className="font-medium hover:text-primary transition-all"
            href="#contact-us"
          >
            {translate("navbar.contact-us")}
          </Link>
        </nav>
      </Container>
    </div>
  );
}
