import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
// import Main from "./component/Main";
import Homes from "./pages/Homes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnlineTheraphy from "./pages/OnlineTherapy";
import Contact from "./pages/Contact";
import Teens from "./pages/Teens";
import Couples from "./pages/Couples";
import Individual from "./pages/Individual";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Landpages from "./pages/Landpages";
import Onboarding from "./pages/Onboarding";
import ClientQuestionnair1 from "./component/ClientQuestionnair1";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Homes />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/land" element={<Landpages />} />
        <Route path="/onboarding-theraphy" element={<Onboarding />} />

        <Route path="/onlineTheraphy">
          <Route index element={<ClientQuestionnair1 />} />
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
