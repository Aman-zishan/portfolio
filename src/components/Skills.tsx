import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["getSkills"];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  console.log(skills);
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        My skills & Knowledge
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        Technologies and languages that I use to make my product everyday
      </p>
      <div className="grid justify-center grid-cols-4 md:grid-cols-7 gap-y-[10px] md:gap-y-[20px]">
        {skills.map((skill) => (
          <img
            key={skill.image}
            className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
            src={skill.image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
