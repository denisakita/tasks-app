import Logo from "../assets/logo.png";

export const Header = () => {
    return (
        <header>
            <img src={Logo} alt="logo"/>
            <a href="/">Home</a>
        </header>
    )
}

