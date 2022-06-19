import { FC } from "react";
import { socialLinks } from "../shared/contants";

const Contact: FC = () => {
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
        Get in touch
      </h1>
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[1100px] flex justify-center gap-10 flex-row md:flex-row">
          {socialLinks.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center hover:scale-110 p-2 transition duration-300"
            >
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={item.icon}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
