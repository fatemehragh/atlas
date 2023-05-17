import {useContext, useEffect} from "react";
//components
import HomePage from "./components/HomePage";
import Header from "./components/Header";
//context
import {ThemeContext} from "./contexts/ThemeContext";

function App() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);

    return (
        <div>
                <Header/>
                <HomePage/>
            </div>
    );
}

export default App;
