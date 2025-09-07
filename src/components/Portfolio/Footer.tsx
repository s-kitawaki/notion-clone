import { Container } from "./Common/BaseUI";

/**
 * Footerコンポーネント
 * @returns Footerコンポーネント
 */
const Footer = () => {
    return (
        <footer className=" border-t border- py-8">
            <Container>
                <div className="text-text-color text-center">
                    <span>© {new Date().getFullYear()} Shinichi Kitawaki</span>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;