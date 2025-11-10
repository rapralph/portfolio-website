import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
       {
           title: "C#",
           level: SkillLevel.Expert,
           icon: "/skills/CSharp.svg",
       },
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Angular",
        level: SkillLevel.Expert,
        icon: "/skills/Angular.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Expert,
        icon: "/skills/css.svg",
      }
    ],
  },
  {
    title: "Backend Development",
    items: [
        {
            title: "NetCore",
            level: SkillLevel.Expert,
            icon: "/skills/netcore.svg",
            
        },
      {
        title: "C#",
        level: SkillLevel.Expert,
        icon: "/skills/CSharp.svg",
      },
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      }
      // {
      //   title: "Nest.js",
      //   level: SkillLevel.Beginner,
      //   icon: "/skills/nestjs.svg",
      // },
    ],
  },
  // {
  //   title: "Mobile App Development",
  //   items: [
  //     {
  //       title: "Flutter",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/flutter.svg",
  //     },
  //     {
  //       title: "GetX",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/getx.png",
  //     },
  //   ],
  // },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      }
    ],
  },
  {
    title: "DevOps/Version Control",
    items: [
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Expert,
        icon: "/skills/ubuntu.png",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "OS",
    items: [
        {
            title: "Ubuntu",
            level: SkillLevel.Intermediate,
            icon: "/skills/ubuntu.png",
        },
        {
            title: "Windows 11",
            level: SkillLevel.Intermediate,
            icon: "/skills/Windows11.svg",
        },
    ],
  },
  // {
  //   title: "Nontechnical Skills",
  //   items: [
  //     {
  //       title: "Problem Solving",
  //       level: SkillLevel.Expert,
  //       icon: "/images/logical-thinking.png",
  //     },
  //     {
  //       title: "Collaboration",
  //       level: SkillLevel.Expert,
  //       icon: "/images/collaboration.png",
  //     },
  //     {
  //       title: "Analytical Skills",
  //       level: SkillLevel.Expert,
  //       icon: "/images/analytical-skills.png",
  //     },
  //   ],
  // },
];

export default skills;
