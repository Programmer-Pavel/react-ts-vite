import { createContext, useCallback, useMemo, useState } from "react";
import "./App.css";
import { Forms } from "./Forms";

type Context = {
    login1: string;
    updateLogin1: (value: string) => void;
    login2: string;
    updateLogin2: (value: string) => void;
};

export const Context = createContext<Context | null>(null);

function App() {
    const [login1, setLogin1] = useState<string>("");
    const [login2, setLogin2] = useState<string>("");

    const updateLogin1 = useCallback((login: string) => {
        setLogin1(login);
    }, []);

    const updateLogin2 = useCallback((login: string) => {
        setLogin2(login);
    }, []);

    const contextValue = useMemo(
        () => ({
            login1,
            updateLogin1,
            login2,
            updateLogin2,
        }),
        [updateLogin1, login1, updateLogin2, login2]
    );

    return (
        <Context.Provider value={contextValue}>
            <Forms />
        </Context.Provider>
    );
}

export default App;
