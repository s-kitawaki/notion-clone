import { Container, Section, Chapter } from "./Common/BaseUI";
import {
    SiHtml5,
    SiCss3,
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiNextdotjs,
} from "react-icons/si";
import { useState } from "react";

// ===== スキル型定義 =====
type Skill = {
    name: string;
    icon: JSX.Element;
    years: number;
    level: string;
};

/**
 * Skillsコンポーネント
 * @returns Skillsコンポーネント
 */
const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skills: Skill[] = [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, years: 5, level: "Advanced" },
        { name: "CSS3 / Sass", icon: <SiCss3 className="text-blue-500" />, years: 5, level: "Advanced" },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, years: 3, level: "Intermediate" },
        { name: "Vue 3", icon: <SiNextdotjs className="text-green-500" />, years: 2, level: "Intermediate" },
        { name: "React", icon: <SiReact className="text-sky-400" />, years: 3, level: "Advanced" },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 dark:text-white" />, years: 2, level: "Intermediate" },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, years: 4, level: "Advanced" },
    ];

    return (
        <Section id="skills">
            <Container>
                <div className="flex justify-between items-end">
                    <Chapter title="Skills" subTitle="Capabilities" />
                </div>
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="relative flex items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-[#11151c] dark:to-[#0f141b] border border-gray-200 dark:border-[#1d2330] shadow-sm hover:shadow-md hover:scale-105 transition cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <span className="text-xl">{skill.icon}</span>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {skill.name}
                            </span>
                            {/* 吹き出しツールチップ */}
                            {hoveredSkill === skill.name && (
                                <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-40 p-3 rounded-lg bg-white dark:bg-[#1a1f29] border border-gray-200 dark:border-[#333] shadow-lg text-xs text-gray-700 dark:text-gray-300">
                                    <p><strong>経験年数：</strong> {skill.years}年</p>
                                    <p><strong>スキル：</strong> {skill.level}</p>
                                    <div className="absolute left-1/2 -bottom-1.5 w-3 h-3 bg-white dark:bg-[#1a1f29] border-b border-r border-gray-200 dark:border-[#333] rotate-45 -translate-x-1/2"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Skills;
