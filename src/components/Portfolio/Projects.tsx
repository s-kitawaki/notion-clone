import { Link } from "react-router-dom";
import { Container, Section, Chapter } from "./Common/BaseUI";

/**
 * ProjectCardコンポーネント
 * @param title プロジェクトタイトル
 * @param desc プロジェクト説明
 * @param stack 使用技術
 * @param link プロジェクトリンク
 * @returns ProjectCardコンポーネント
 */
const ProjectCard = ({ title, desc, stack, link }: { title: string; desc: string; stack: string[]; link: string }) => {
    return (
        <Link to={link}>
            <article className="bg-white border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
                <div className="aspect-video bg-gradient-to-br from-violet-500/20 to-sky-400/20 grid place-items-center text-gray-500 font-bold">
                    Thumbnail
                </div>
                <div className="p-4 grid gap-2">
                    <h3 className="text-lg font-bold text-textcolor">{title}</h3>
                    <p className="text-gray-400 text-sm">{desc}</p>
                    <div className="flex flex-wrap gap-2">
                        {stack.map((s) => (
                            <span key={s} className="px-2 py-1 text-xs border rounded-full bg-[#f9fafb] text-gray-700">{s}</span>
                        ))}
                    </div>
                </div>
            </article>
        </Link>
    );
};

/**
 * Projectsコンポーネント
 * @returns Projectsコンポーネント
 */
const Projects = () => {
    return (
        <Section id="projects">
            <Container>
                <div className="flex justify-between items-end">
                    <Chapter title="Projects" subTitle="Selected Work" />
                    <a href="#" className="text-sm text-gray-400 hover:text-textcolor">More on GitHub →</a>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <ProjectCard
                        title="SaaS Analytics Dashboard"
                        desc="Next.js + Chartingで作成したSaaSダッシュボード。"
                        stack={["Next.js", "TypeScript", "Vercel"]}
                        link="/signin" />
                    <ProjectCard
                        title="E‑commerce UI Kit"
                        desc="Atomic Designで構築したEC用UIキット。"
                        stack={["Vue 3", "Pinia", "Stripe"]}
                        link="/portfolio" />
                    <ProjectCard
                        title="Marketing Site Revamp"
                        desc="Web Vitalsを指標にリブランディング。"
                        stack={["Astro", "Tailwind", "Cloudflare"]}
                        link="/portfolio" />
                    <ProjectCard
                        title="Marketing Site Revamp"
                        desc="Web Vitalsを指標にリブランディング。"
                        stack={["Astro", "Tailwind", "Cloudflare"]}
                        link="/portfolio" />
                </div>
            </Container>
        </Section>
    );
};

export default Projects;