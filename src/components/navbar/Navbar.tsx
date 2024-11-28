import {Button} from "@consta/uikit/Button";
import {NavLink} from "react-router-dom";
import AppPage from "../../const.ts";
import './Navbar.css'
import {Layout} from "@consta/uikit/Layout";

const Navbar = () => {
    return (
    <Layout>
    <div className="navbar">
        <div className="navbar-container">
            <div className="navbar-group left">
                <NavLink to={AppPage.main} className={"navbar-button"}>
                    <Button label={"Главная страница"}></Button>
                </NavLink>
                <NavLink to={AppPage.services} className={"navbar-button"}>
                    <Button label={'Услуги компании'}></Button>
                </NavLink>
            </div>
            <div className="navbar-group right">
                <NavLink to={AppPage.login} className={"navbar-button"}>
                    <Button label={'Вход'} ></Button>
                </NavLink>
            </div>

        </div>
        <hr/>
    </div>
    </Layout>
    )
}

export default Navbar