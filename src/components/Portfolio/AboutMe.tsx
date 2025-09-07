import { Container, Section, Chapter } from "./Common/BaseUI";
import myPhoto from '/profile_photo.png';   // プロフィール写真パス

const AboutMe = () => {
    return (
        <Section id="about">
            <Container>
                <div className="flex justify-between items-end mb-10">
                    <Chapter title="About Me" subTitle="Self Introduction" />
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    {/* プロフィール写真エリア (30%) */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <img
                            src={myPhoto}
                            alt="Shinichi Kitawaki"
                            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl border border-gray-200 dark:border-[#1d2330] transition-transform duration-300"
                        />
                    </div>

                    {/* 自己紹介エリア (70%) */}
                    <div className="w-full md:w-2/3">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            こんにちは、Shinichi Kitawaki です 👋
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            フロントエンドエンジニアとして React / Vue / TypeScript を中心に
                            開発を行っています。UI/UX デザインにも関心があり、
                            モダンで使いやすいインターフェースを作ることを大切にしています。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            新しい技術を学びながら、ユーザー体験を高める
                            プロダクトを作ることを目指しています。
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default AboutMe;
