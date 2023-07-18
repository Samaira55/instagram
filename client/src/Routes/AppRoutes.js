import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../component/Dashboard';
import Login from '../component/Login';
import App from "../App"


export default function AppRouting() {
   
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Login/>} />
                    </Route>
                    <Route path="/user/Dashboard" element={<App/>}>
                    <Route index element={<Dashboard/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
