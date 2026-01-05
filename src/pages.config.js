import Home from './pages/Home';
import About from './pages/About';
import Umunthu360 from './pages/Umunthu360';
import Practice from './pages/Practice';
import Speaking from './pages/Speaking';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Umunthu360": Umunthu360,
    "Practice": Practice,
    "Speaking": Speaking,
    "Writing": Writing,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};