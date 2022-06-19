export interface allDataType {
  getSkills: {
    image: string;
    title: string;
    link: string;
  }[];
  getProjects: {
    id: string;
    title: string;
    description: string;
    demo: string;
    github: string;
    technologies: string[];
    image: {
      url: string;
    };
  }[];
  getSmallProjects: {
    id: string;
    title: string;
    description: string;
    link: string;
    icon: {
      url: string;
    };
  }[];
}
