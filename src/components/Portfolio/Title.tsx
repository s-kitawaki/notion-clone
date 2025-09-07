import { Section } from "./Common/BaseUI";

/**
 * Titleコンポーネント
 * @returns Titleコンポーネント
 */
const Title = () => {
    return (
        <div className="bg-gradient-to-tr from-gray-50 from-0% via-gray-50 via-50% to-purple-100 to-100%">
            <Section id="title">
                <h1 className="text-center text-[clamp(28px,6vw,56px)] leading-[1.1] font-extrabold text-textcolor">
                    <span className="bg-gradient-to-br from-brand1 to-brand2 bg-clip-text text-transparent">Welcome</span> to My Portfolio
                </h1>
            </Section>
        </div>
    );
};

export default Title;