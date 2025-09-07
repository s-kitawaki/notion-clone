import { Container } from "./Common/BaseUI";

/**
 * Headerコンポーネント
 * @returns Headerコンポーネント
 */
const Header = () => {

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Work", href: "#projects" },
        { name: "Skills", href: "#skills" },
    ]

    return (
        <header className="sticky top-0 z-40 backdrop-blur-[6px] border-b border- [background:color-mix(in_oklab,var(--bg)_86%,transparent)]">
            <Container>
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2 font-bold ">
                        <span className="w-3 h-3 rounded-sm bg-gradient-to-br from-violet-500 to-sky-400" />
                        Shinichi Kitawaki
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-gray-400">
                        {navItems.map((item) => (
                            <a href={item.href} key={item.name} className="hover:text-textcolor">{item.name}</a>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;