import Article from './pages/Article';
import Contact from './pages/Contact';
import Practice from './pages/Practice';
import Speaking from './pages/Speaking';
import Umunthu360 from './pages/Umunthu360';
import Writing from './pages/Writing';
import About from './pages/About';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Article": Article,
    "Contact": Contact,
    "Practice": Practice,
    "Speaking": Speaking,
    "Umunthu360": Umunthu360,
    "Writing": Writing,
    "About": About,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};