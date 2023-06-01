import { SyntheticEvent, useContext } from "react";
import { Context } from "./App";

export function Forms() {
    const formsState = useContext(Context);

    const onLogin1Change = (e: SyntheticEvent<HTMLInputElement>) => {
        formsState?.setLogin1(e.target.value);
    };

    const onLogin2Change = (e: SyntheticEvent<HTMLInputElement>) => {
        formsState?.setLogin1(e.target.value);
        formsState?.setLogin2(e.target.value);
    };

    return (
        <div className="forms__container">
            <div className="form__container">
                <form className="form">
                    <div className="input__container">
                        <label htmlFor="title">Логин:</label>
                        <input
                            id="title"
                            type="text"
                            value={formsState?.login1}
                            onChange={onLogin1Change}
                        />
                    </div>

                    <div className="input__container">
                        <label htmlFor="body">Пароль:</label>
                        <input id="body" type="text" />
                    </div>

                    <select>
                        <option value="">Спорт</option>
                        <option value="">Программирование</option>
                        <option value="">Книги</option>
                    </select>

                    <button type="submit">Подтвердить</button>
                </form>
            </div>
            <div className="form__container">
                <form className="form">
                    <div className="input__container">
                        <label htmlFor="title">Логин:</label>
                        <input
                            id="title"
                            type="text"
                            value={formsState?.login2}
                            onChange={onLogin2Change}
                        />
                    </div>

                    <button type="submit">Поиск</button>
                </form>
            </div>
        </div>
    );
}
