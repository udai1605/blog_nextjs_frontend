import Link from "next/link";

const Header = () => {

    const navItems = [
        {
            display: "the camp.",
            slug: "/",
        },
        {
            display: "the experience.",
            slug: "/experience",
        },
        {
            display: "the blog.",
            slug: "/blog",
        },
    ];
    return (
        <header className="header">
            <img className="header__logo" src="/assets/logo.svg" alt="logo" />
            <ul className="header__nav">
                {navItems.map((navitem) => (
                    <li key={navitem.slug}>
                        <Link href={navitem.slug}>
                            <h5>{navitem.display}</h5>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/events">
                <button className="btn btn--black btn--small">BOOK NOW</button>
            </Link>
        </header>
    )

}

export default Header;