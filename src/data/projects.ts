import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "koopbatangan",
    title: "Loan Management System",
    description:
      "A web applications for managing public website for product advertisement and loan management in Koop Batangan.",
    icon: "/images/koopbatangan.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Freelance,
    url: "https://www.koopbatangan.com/",
    tags: [".NET Core", "C#", "ReactJS", "TypeScript"],
  },
 {
    id: "aicoursecreator",
    title: "AI Course Creator",
    description:
        "A SaaS web applications for creating and generating AI courses.",
    icon: "/images/aicoursecreator.png",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    url: "https://aicoursecreator.eskilled.io/",
    tags: [".NET Core", "C#", "ABP Framework", "Razor Pages", "JQuery"],
  },
 {
    id: "central",
    title: "Central",
    description:
        "An E-Commerce web app for ordering food and drinks.",
    icon: "/images/central.png",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    url: "https://www.central.ph/",
    tags: ["NodeJS", "ReactJS", "AWS", "Bootstrap"],
  },
 {
    id: "Serino",
    title: "Serino",
    description:
        "An ERP for enterprise solutions",
    icon: "/images/serino.png",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    url: "https://serino360.com/",
    tags: ["NodeJS", "ReactJS", "AWS", "Bootstrap"],
  },
];
export default projects;
