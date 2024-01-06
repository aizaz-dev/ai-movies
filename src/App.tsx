import { Route, Routes } from "react-router-dom";
import Stellenbeschreibung from "./pages/stellenbeschreibung/Stellenbeschreibung";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Jobs from "./pages/jobs/Jobs";
import Faq from "./components/Faqs";
import Uber from "./pages/Uber/Uber";
import Case from "./pages/case/Case";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Blog2 from "./pages/blog-1/blog-1";
import Startseite from "./pages/startseite/Startseite";
import Produkt from "./pages/produkt/Pagetwo";
import Unterseite from "./pages/unterseite/Unterseite";
import Faqs from "./pages/faq/Faq";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* page 1 */}
        <Route path="/" element={<Startseite/>} />
        {/* page 2 */}
        <Route path="/produkt" element={<Produkt />} />
        {/* page 3 */}
        <Route path="/uber" element={<Uber />} />
        {/* page 4 */}
        <Route path="/case" element={<Case />} />
        {/* page 5 */}
        <Route path="/unterseite"  element={<Unterseite/>}/>
        {/* Page 6 */}
        <Route path="/contact" element={<Contact />} />
        {/* Page 7 */}
        <Route path="/faq" element={<Faqs />} />
        {/* Page 8 */}
        <Route path="/jobs" element={<Jobs />} />
        {/* Page 9 */}
        <Route path="/stellenbeschreibung" element={<Jobs />} />
        {/* Page 10*/}
        <Route
          path="/stellenbeschreibung-1"
          element={<Stellenbeschreibung />}
        />
        {/* Page 11*/}
        <Route path="/blog" element={<Blog />} />
        {/* Page 12*/}
        <Route path="/blog-1" element={<Blog2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
