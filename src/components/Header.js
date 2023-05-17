import {useContext,useState} from "react";
const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <header>
            {/* Header content */}
            <button>
            </button>
        </header>
    );
}

export default Header;
