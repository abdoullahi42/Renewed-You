import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
// import Main from "./component/Main";
import Homes from "./pages/Homes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import OnlineTheraphy from "./pages/OnlineTherapy";
import Contact from "./pages/Contact";
import Teens from "./pages/Teens";
import Couples from "./pages/Couples";
import Individual from "./pages/Individual";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Login from "./pages/Login";

import Onboarding from "./pages/Onboarding";
import Onlinetheraphy from "./pages/QuestionnaireManager"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Homes />} />
        <Route path="/about" element={<AboutUs />} />
        
        <Route path="/onboarding-theraphy" element={<Onboarding />} />

        <Route path="/onlineTheraphy">
          <Route index element={<Onlinetheraphy/>} />
          <Route path="teens" element={<Teens />} />
          <Route path="couples" element={<Couples />} />
          <Route path="individuals" element={<Individual />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
