import {Button} from "@consta/uikit/Button";
import {NavLink} from "react-router-dom";
import AppPage from "../../const.ts";
import './Navbar.css'
import {Layout} from "@consta/uikit/Layout";
import {useSelector} from "react-redux";
import {RootState} from "../../store/user-store/UserStore.tsx";


const Navbar = () => {

    const user = useSelector((state: RootState) => {
        return state.user;
    })


    return (
    <Layout>
    <div className="navbar">
        <div className="navbar-container">
            {user.isAuthenticated ? (<div className="navbar-group left">
                <NavLink to={AppPage.main} className={"navbar-button"}>
                    <Button label={"Главная страница"}></Button>
                </NavLink>
                <NavLink to={AppPage.services} className={"navbar-button"}>
                    <Button label={'Услуги компании'}></Button>
                </NavLink>
            </div>) : (
                <h3>Вы не зарегистрированы</h3>
            )}
            <div className="navbar-group right">
                {!user.isAuthenticated ? (
                    <NavLink to={AppPage.login} className={"navbar-button"}>
                        <Button label={'Вход'} ></Button>
                    </NavLink>
                ) : (
                    <NavLink to={AppPage.userinfo + user.id} className={"navbar-button"}>
                        <Button label="Профиль" ></Button>
                    </NavLink>
                )}
            </div>

        </div>
        <hr/>
    </div>
    </Layout>
    )
}

export default Navbar