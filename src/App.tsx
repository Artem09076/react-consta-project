import { Theme, presetGpnDefault } from "@consta/uikit/Theme";


import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ServicePage from "./pages/service-page/ServicePage.tsx";
import ServiceDetailPage from "./pages/service-detail-page/ServiceDetailPage.tsx";
import {Responses404} from "@consta/uikit/Responses404";
import MainLayout from "./layouts/main-layout/MainLayout.tsx";
import AppPage from "./const.ts";
import MainPage from "./pages/main-page/MainPage.tsx";
import LoginPage from "./pages/login-page/LoginPage.tsx";
import {Provider, useSelector} from "react-redux";
import userStore, {RootState} from "./store/user-store/UserStore.tsx";
import UserPage from "./pages/user-page/UserPage.tsx";


const PrivateNoAuthRoute = ({ children } : {children: JSX.Element}) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    return isAuthenticated ? children : <Navigate to={AppPage.login} replace={true}/>;
}

const PrivateAuthRoute = ({ children } : {children: JSX.Element}) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    return !isAuthenticated ? children : <Navigate to={AppPage.main} replace={true}/>;}

const App = function() {
    return (
        <Theme preset={presetGpnDefault}>
            <Provider store={userStore}>
            <BrowserRouter>
                <Routes>
                    <Route path={AppPage.main} element={<MainLayout/>} >
                        <Route index element={<MainPage/>}></Route>
                        <Route path={AppPage.services} element={<PrivateNoAuthRoute><ServicePage></ServicePage></PrivateNoAuthRoute>}></Route>
                        <Route path={AppPage.detail} element={<PrivateNoAuthRoute><ServiceDetailPage/></PrivateNoAuthRoute>}></Route>
                        <Route path={AppPage.login} element={<PrivateAuthRoute><LoginPage/></PrivateAuthRoute>}></Route>
                        <Route path={AppPage.userinfo + ':id'} element={<PrivateNoAuthRoute><UserPage></UserPage></PrivateNoAuthRoute>}></Route>
                    </Route>
                    <Route path='*' element={<Responses404/>}></Route>
                </Routes>
            </BrowserRouter>
            </Provider>
        </Theme>

    );
}

export default App