import { Theme, presetGpnDefault } from "@consta/uikit/Theme";


import {BrowserRouter, Route, Routes} from "react-router-dom";
import ServicePage from "./pages/service-page/ServicePage.tsx";
import ServiceDetailPage from "./pages/service-detail-page/ServiceDetailPage.tsx";
import {Responses404} from "@consta/uikit/Responses404";
import MainLayout from "./layouts/main-layout/MainLayout.tsx";
import AppPage from "./const.ts";
import MainPage from "./pages/main-page/MainPage.tsx";
import LoginPage from "./pages/login-page/LoginPage.tsx";




const App = function() {
    return (
        <Theme preset={presetGpnDefault}>
            <BrowserRouter>
                <Routes>
                    <Route path={AppPage.main} element={<MainLayout/>} >
                        <Route index element={<MainPage/>}></Route>
                    <Route path={AppPage.services} element={<ServicePage/>}></Route>
                    <Route path={AppPage.detail} element={<ServiceDetailPage/>}></Route>
                        <Route path={AppPage.login} element={<LoginPage/>}></Route>
                    </Route>
                    <Route path='*' element={<Responses404/>}></Route>
                </Routes>
            </BrowserRouter>

        </Theme>

    );
}

export default App