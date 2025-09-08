import Header from "../components/Portfolio/Header";
import Title from "../components/Portfolio/Title";
import AboutMe from "../components/Portfolio/AboutMe";
import Projects from "../components/Portfolio/Projects";
import Skills from "../components/Portfolio/Skills";
import Footer from "../components/Portfolio/Footer";

/**
 * Portfolioページコンポーネント
 * @returns Portfolioページコンポーネント
 */
function Portfolio() {
    return (
        <div className="bg-[#f9fafb]">
            <Header />
            <Title />
            <AboutMe /> 
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
};

export default Portfolio;