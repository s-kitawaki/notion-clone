import { Container, Section, Chapter } from "./Common/BaseUI";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTypescript,
} from "react-icons/si";
import { FaStar } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { useState } from "react";
import JavaIcon from '/Java-icon.svg';
import VueIcon from '/Vue-icon.svg';
import PythonIcon from '/Python-icon.svg';
import AwsIcon from '/Aws-icon.svg';

// ===== スキル型定義 =====
type Skill = {
    name: string;
    icon: JSX.Element;
    years: number;
    level: number;
};

/**
 * Skillsコンポーネント
 * @returns Skillsコンポーネント
 */
const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const starLevel = 5; // 最大レベル（星の数）

    const skills: Skill[] = [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, years: 5, level: 5 },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" />, years: 5, level: 4 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, years: 5, level: 4 },
        { name: "Java", icon: <img src={JavaIcon} alt="Java" className="w-6 h-6" />, years: 5, level: 5 },
        { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-700" />, years: 5, level: 5 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, years: 2, level: 2 },
        { name: "Vue 3", icon: <img src={VueIcon} alt="Vue 3" className="w-6 h-6" />, years: 2, level: 2 },
        { name: "React", icon: <SiReact className="text-sky-400" />, years: 1, level: 2 },
        { name: "Python", icon: <img src={PythonIcon} alt="Python" className="w-6 h-6" />, years: 3, level: 4 },
        { name: "AWS", icon: <img src={AwsIcon} alt="AWS" className="w-6 h-6" />, years: 4, level: 2 },
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
                                <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-44 p-3 rounded-lg bg-white dark:bg-[#1a1f29] border border-gray-200 dark:border-[#333] shadow-lg text-xs text-gray-700 dark:text-gray-300">
                                    <p><strong>経験年数：</strong> {skill.years}年</p>
                                    <p className="flex items-center gap-1">
                                        <strong>スキル：</strong>
                                        {Array.from({ length: starLevel }, (_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < skill.level ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                    </p>
                                    {/* 吹き出しの三角部分 */}
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
