import Link from "next/link";
import { Container } from "../Container/Container";
import Image from "next/image";
import { logoImage } from "@/assets/common";
import { useHomeDictionary } from "../../../../locales/utils/useHomeDictionary";
import { useLayoutDictionary } from "../../../../locales/utils/useLayoutDictionary";
import { LocationIcon } from "@/assets/icons/location-icon";
import { PhoneIcon } from "@/assets/icons/phone-icon";
import { EmailIcon } from "@/assets/icons/email-icon";

export function Footer() {
  const { translate } = useHomeDictionary();
  const { translate: translation } = useLayoutDictionary();
  return (
    <footer className="w-full flex flex-col pt-20 gap-y-32 pb-0 bg-gray-100">
      <Container className="w-full flex flex-col lg:flex-row gap-y-10 justify-between">
        <div className="flex flex-col max-w-sm gap-y-6">
          <Link href="/" className="relative top-1 mx-auto">
            <Image src={logoImage} className="sm:w-full sm:h-full md:w-28 md:h-28 scale-[1.3] md:scale-[1.5]" alt="" />
          </Link>

          <p className=" leading-relaxed text-gray-600">
            {translate("banner.label")}
          </p>
        </div>

        <div className="flex flex-col gap-y-6">
          <h4 className="text-2xl font-bold text-secondary">
            {translation("footer.links.title")}
          </h4>

          <nav className="flex flex-col items-start gap-y-4">
            <Link className="  hover:text-primary transition-all" href="/">
              {translation("navbar.home")}
            </Link>
            <Link className="  hover:text-primary transition-all" href="/">
              {translation("navbar.about-us")}
            </Link>
            <Link className="  hover:text-primary transition-all" href="/">
              {translation("navbar.portfolio")}
            </Link>
            <Link className="  hover:text-primary transition-all" href="/">
              {translation("navbar.services")}
            </Link>
            <Link className="  hover:text-primary transition-all" href="/">
              {translation("navbar.contact-us")}
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-y-6">
          <h4 className="text-2xl font-bold text-secondary">
            {translation("footer.contacts.title")}
          </h4>

          <div className="flex items-center gap-x-2">
            <div className="w-4 flex [&>svg_*]:stroke-secondary">
              {LocationIcon}
            </div>
            <span className="text-secondary">
              Rua Santa Luzia, Samba, Luanda - Angola
            </span>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="w-4 flex [&>svg_*]:stroke-secondary">
              {EmailIcon}
            </div>
            <span className="text-secondary">
              passaroazulseguranca@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="w-4 flex [&>svg_*]:stroke-secondary">
              {PhoneIcon}
            </div>
            <span className="text-secondary">+244 931 907 888</span>
          </div>
        </div>
      </Container>
      <div className="py-3 w-full bg-gray-200">
        <Container className="flex justify-center">
          <p className=" text-sm text-gray-600">
            {translation("footer.base.rights", {
              year: `${new Date().getFullYear()}`,
            })}
          </p>
        </Container>
      </div>
    </footer>
  );
}
