import {useState} from "react";
import {useNavigate} from "react-router-dom";
import './LoginPage.css'
import {Text} from "@consta/uikit/Text";
import {TextField} from "@consta/uikit/TextField";
import {Button} from "@consta/uikit/Button";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validPassword = (password: string) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return passwordRegex.test(password);
    }

    const handleSubmit = () => {
        if (!email || !password) {
            setError("Все поля должны быть заполнены");
            return;
        }

        if (!validEmail(email)) {
            setError('Введите корректный e-mail');
            return;
        }

        if (!validPassword(password)) {
            setError('Введите корректный пароль');
            return;
        }

        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
    }



    return (
        <div className='login-page'>
            <Text size='l' view='primary' weight='bold' align='center' className='login-title'>
                Вход в сервис
            </Text>

            <div className='login-form'>
                <TextField
                label='Логин (e-mail)'
                value={email}
                onChange={(e) => setEmail(e || '')}
                placeholder='Введите ваш email'
                />
                <TextField
                label='Пароль'
                type='password'
                value={password}
                onChange={(e) => setPassword(e || '')}
                />
                {error && <Text view="alert" size="s" className="error-text">{error}</Text>}
                <Button label="Войти" size="l" onClick={handleSubmit} className="login-button" />
            </div>
        </div>

    )
}
export default LoginPage