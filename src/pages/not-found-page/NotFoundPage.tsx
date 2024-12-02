import { Responses404 } from "@consta/uikit/Responses404";
import { Button } from "@consta/uikit/Button";
import { NavLink } from "react-router-dom";
import AppPage from "../../const.ts";

const NotFoundPage = () => {
    return (

        <div>
            <Responses404
                actions={
                    <NavLink to={AppPage.main}>
                        <Button
                            size="m"
                            label="Вернуться на главную"

                        />
                    </NavLink>
                }
            />
        </div>

    );
};

export default NotFoundPage;
