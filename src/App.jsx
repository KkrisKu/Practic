import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import {Route, BrowserRouter, Routes} from "react-router-dom";

function App(){
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contacts" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>

        </>
    );
}
export default App;