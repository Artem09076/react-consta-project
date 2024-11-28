import {NavLink} from "react-router-dom";
import {Button} from "@consta/uikit/Button";
import {Layout} from "@consta/uikit/Layout";
import AppPage from "../../const.ts";

const Menu = () => {
    return (
        <Layout>
        <NavLink to={'/'}>
            <Button label='Главная страница'></Button>
        </NavLink>
        <NavLink to={AppPage.services}>
            <Button label='Страница услуг'></Button>
        </NavLink>
        </Layout>
    )
}
export default Menu;