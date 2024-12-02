import {Button} from "@consta/uikit/Button";
import {NavLink, useNavigate} from "react-router-dom";
import AppPage from "../../const.ts";
import './Navbar.css'
import {Layout} from "@consta/uikit/Layout";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/user-store/UserStore.tsx";
import {logout} from "../../store/user-store/UserSlice.tsx";


const Navbar = () => {

    const user = useSelector((state: RootState) => {
        return state.user;
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
    <Layout>
    <div className="navbar">
        <div className="navbar-container">
            <div className="navbar-group left">
                <NavLink to={AppPage.main} className={"navbar-button"}>
                    <Button label={"Главная страница"}></Button>
                </NavLink>
                {user.isAuthenticated ? (

                    <NavLink to={AppPage.services} className={"navbar-button"}>
                        <Button label={'Услуги компании'}></Button>
                    </NavLink>
                ) : (
                    <h3>Вы не зарегистрированы</h3>
                )}
            </div>
                <div className="navbar-group right">
                    {!user.isAuthenticated ? (
                        <NavLink to={AppPage.login} className={"navbar-button"}>
                            <Button label={'Вход'}></Button>
                        </NavLink>
                    ) : (
                        <>
                            <NavLink to={AppPage.userinfo + user.id} className={"navbar-button"}>
                                <Button label="Профиль"></Button>
                            </NavLink>
                            <Button
                                label={'Выход'}
                                className={"navbar-button"}
                                onClick={() => {
                                    navigate('')
                                    dispatch(logout({
                                            id: null,
                                            accessToken: ''
                                        }
                                    ))


                                }}
                            />
                        </>
                    )}
                </div>

            </div>
            <hr/>
        </div>
    </Layout>
)
}

export default Navbar