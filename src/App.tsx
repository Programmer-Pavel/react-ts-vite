import { createContext, useMemo, useState } from "react";
import "./App.css";
import { Forms } from "./Forms";

type Context = {
    login1: string;
    setLogin1: (value: string) => void;
    login2: string;
    setLogin2: (value: string) => void;
};

export const Context = createContext<Context | null>(null);

function App() {
    const [login1, setLogin1] = useState<string>("");
    const [login2, setLogin2] = useState<string>("");

    const contextValue = useMemo(
        () => ({
            login1,
            setLogin1,
            login2,
            setLogin2,
        }),
        [setLogin1, login1, setLogin2, login2]
    );

    return (
        <Context.Provider value={contextValue}>
            <Forms />
        </Context.Provider>
    );
}

export default App;
