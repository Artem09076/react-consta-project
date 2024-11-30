import './UserPage.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store/user-store/UserStore.tsx";

const UserPage = () => {
    const user = useSelector((state: RootState) => state.user)

    return (
        <div className="container">
        <div className="user-info">
            <div className="info-block">
                <p><strong>Имя:</strong> {user.firstName}</p>
                <p><strong>Фамилия:</strong> {user.lastName}</p>
            </div>
            <div className="info-block">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Пол:</strong> {user.gender}</p>
            </div>
        </div>
        <div className="user-photo">
            <img src={user.image} alt="User Photo"/>
        </div>
     </div>
    )
}
export default UserPage