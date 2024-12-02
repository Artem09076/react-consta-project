import './UserPage.css';
import { useSelector } from "react-redux";
import { RootState } from "../../store/user-store/UserStore.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
    firstName?: string;
    lastName?: string;
    age?: number;
    email?: string;
    phone?: string;
    university?: string;
    company?: {
        name?: string;
        title?: string;
    };
    address?: {
        city?: string;
        country?: string;
    };
    image?: string;
}

const UserPage = () => {
    const userAccessToken = useSelector((state: RootState) => state.user.accessToken);
    const [userData, setUserData] = useState<UserData | null>(null);

    const urlApi = 'https://dummyjson.com/auth/me';

    useEffect(() => {
        if (userAccessToken) {
            axios.get(urlApi, {
                    headers: {
                        Authorization: `Bearer ${userAccessToken}`,
                    },
                }).then((response) => {
                    const responseData = response.data;
                    console.log(responseData);
                    setUserData(responseData);
                })

        }
    }, [userAccessToken]);

    if (!userData) {
        return <div>Загрузка данных...</div>;
    }

    return (
        <div className="user-page">
            <div className="user-info">
                <div className="user-details">
                    <div className="info-block">
                        <p>Имя: {userData.firstName}</p>
                        <p>Фамилия: {userData.lastName}</p>
                        <p>Возраст: {userData.age}</p>
                        <p>Email: {userData.email}</p>
                        <p>Телефон: {userData.phone}</p>
                    </div>
                    <div className="info-block">
                        <p>Университет: {userData.university}</p>
                        {userData.company && (
                            <>
                                <p>Компания: {userData.company.name}</p>
                                <p>Должность: {userData.company.title}</p>
                            </>
                        )}
                        {userData.address && (
                            <>
                                <p>Город: {userData.address.city}</p>
                                <p>Страна: {userData.address.country}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className="user-photo">
                    {userData.image && <img src={userData.image} alt="User" />}
                </div>
            </div>
        </div>
    );
};

export default UserPage;
