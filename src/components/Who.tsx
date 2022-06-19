import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I ?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          My name is Aman Zishan. I&apos;m a
          {true ? ` ${new Date().getFullYear() - 2000} years old ` : ""}
          developer living in Kerala, India. I&apos;m currently working as a
          frontend and blockchain developer at{" "}
          <a
            className="underline underline-offset-2"
            href="https://cache.gold/"
            target="blank"
          >
            CACHE Pvt. Ltd.
          </a>{" "}
          Besides coding, I also like listening to music and playing video games
        </p>
      </div>
    </div>
  );
};

export default Who;
