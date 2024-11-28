import { Outlet } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar.tsx";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main style={{ paddingTop: '80px' }}>
                <Outlet />
            </main>
        </div>
    )
}


export default MainLayout;