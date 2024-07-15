import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
// import Main from "./component/Main";
import Homes from "./pages/homes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnlineTheraphy from "./pages/onlineTherapy";
import Contact from "./pages/Contact";
import Teens from "./pages/Teens";
import Couples from "./pages/couples";
import Individual from "./pages/individual";
import NavBar from "./component/navBar";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Homes />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/onlineTheraphy">
          <Route index element={<OnlineTheraphy />} />
          <Route path="teens" element={<Teens />} />
          <Route path="couples" element={<Couples />} />
          <Route path="individuals" element={<Individual />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
