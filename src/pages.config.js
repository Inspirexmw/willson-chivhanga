import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Speaking from './pages/Speaking';
import Umunthu360 from './pages/Umunthu360';
import Writing from './pages/Writing';
import Article from './pages/Article';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Contact": Contact,
    "Home": Home,
    "Practice": Practice,
    "Speaking": Speaking,
    "Umunthu360": Umunthu360,
    "Writing": Writing,
    "Article": Article,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};