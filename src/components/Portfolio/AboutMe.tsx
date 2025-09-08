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
                    {/* プロフィール写真エリア */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <img
                            src={myPhoto}
                            alt="Shinichi Kitawaki"
                            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl border border-gray-200 dark:border-[#1d2330] transition-transform duration-300"
                        />
                    </div>

                    {/* 自己紹介エリア */}
                    <div className="w-full md:w-2/3">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            こんにちは、北脇 真一 です
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            バックエンドエンジニアとして Java(主にSpring boot) / DB:Postgres を主に使用して
                            開発を行っています。 モダンなフロントエンドの技術にも関心があり、本画面もReactを使用して
                            作成しました。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            趣味は、ドライブ、テニス、野球・バスケ観戦です。<br />
                            最近は市の代表になったことをきっかけにテニスの試合によく出ています。
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default AboutMe;
