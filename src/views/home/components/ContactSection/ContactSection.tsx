import { useState } from "react";
import { Container } from "@/components/layout/Container/Container";
import { useHomeDictionary } from "../../../../../locales/utils/useHomeDictionary";
import { Button } from "@/components/shared/button/Button";

export function ContactSection() {
  const { translate } = useHomeDictionary();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Contact Us - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:passaroazulseguranca@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setFormStatus("sending");
  };

  return (
    <Container
      id="contact-us"
      className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12 lg:gap-x-16"
    >
      <div
        data-aos="fade-right"
        className="col-span-1 w-full h-[20rem] lg:h-[32rem] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3942.3151271972088!2d13.207946999999997!3d-8.850225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTEnMDAuOCJTIDEzwrAxMicyOC42IkU!5e0!3m2!1spt-PT!2sao!4v1732289625055!5m2!1spt-PT!2sao"
          loading="lazy"
          className="w-full h-full object-cover"
          title="Map showing the location of Santa Luzia, Luanda"
        />
      </div>

      <div data-aos="fade-left" className="flex flex-col gap-y-6">
        <h4 className="text-3xl lg:text-5xl font-bold text-secondary">
          {translate("contact-us.title")}
        </h4>

        <p className="max-w-2xl text-gray-600">
          {translate("about-us.our-services.label")}
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="grid w-full grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                {translate("contact-us.form.name")}
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-4 border border-primary rounded-lg"
                placeholder={translate("contact-us.form.name")}
                required
                aria-required="true"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                {translate("contact-us.form.email")}
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-4 border border-primary rounded-lg"
                placeholder={translate("contact-us.form.email")}
                required
                aria-required="true"
                aria-invalid="false"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              {translate("contact-us.form.message")}
            </label>
            <textarea
              id="message"
              placeholder={translate("contact-us.form.message")}
              className="w-full h-40 p-4 border border-primary rounded-lg"
              required
              aria-required="true"
              name="message"
              value={message}
              onChange={handleChange}
            ></textarea>
          </div>

          <Button label={translate("contact-us.form.send")} type="submit" />

          {formStatus === "sending" && (
            <p className="text-gray-500">
              {translate(`contact-us.form.messages.sending`)}
            </p>
          )}
          {formStatus === "success" && (
            <p className="text-green-600">
              {translate(`contact-us.form.messages.success`)}
            </p>
          )}
          {formStatus === "error" && (
            <p className="text-red-600">
              {translate(`contact-us.form.messages.error`)}
            </p>
          )}
        </form>
      </div>
    </Container>
  );
}
