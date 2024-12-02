import "./Footer.css";
import AppPage from "../../const.ts";
import {Button} from "@consta/uikit/Button";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <NavLink to={AppPage.main} className={"navbar-button"}>
                        <Button label={"Главная страница"}></Button>
                    </NavLink>
                </div>
                <div className="footer-right">
                    <ul className="footer-links">
                        <li>
                            <p>Григорян Артём Мехакович</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
