import { useEffect, useState } from 'react';

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Function to check if the user prefers dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Set the initial theme based on user preference
        setIsDarkMode(prefersDarkMode);

        // Listen for changes in theme preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addListener(handleChange);

        // Clean up the listener when the component unmounts
        return () => {
            mediaQuery.removeListener(handleChange);
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <button
                className={`bg-${isDarkMode ? 'dark' : 'white'} text-${isDarkMode ? 'white' : 'black'} p-2 rounded`}
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </div>
    );
}

export default ThemeToggle;
