import { Outlet } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar.tsx";
import Footer from "../../components/footer/Footer.tsx";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main style={{ paddingTop: '80px' }}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}


export default MainLayout;