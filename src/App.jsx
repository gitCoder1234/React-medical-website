import { BrowserRouter, Route, Routes } from "react-router-dom";

// landing page
import Homepage from "./Pages/LandingPage/Homepage/Homepage";
import Vaccination from "./Pages/LandingPage/Vaccination/Vaccination";
import Covid19 from "./Pages/LandingPage/Covid19/Covid19";
import DentalApp from "./Pages/LandingPage/DentalAppointment/DentalApp";
import DentalCare from "./Pages/LandingPage/DentalCare/DentalCare";

// main
import Main from "./Pages/MainPage/Main/Main";

// homepage ecards
import Ecard1 from "./Pages/HomePageEcards/Ecard1/Ecard1";
import Ecard2 from "./Pages/HomePageEcards/Ecard2/Ecard2";
import Ecard3 from "./Pages/HomePageEcards/Ecard3/Ecard3";

// profile,AppointmentDetails
import Profile from "./Pages/Profile,AppointmentDetails/Profile/Profile";
import AppointmentDetail from "./Pages/Profile,AppointmentDetails/AppointmentDetail/AppointmentDetail";
import DonateUs from "./Pages/Profile,AppointmentDetails/DonateUs/DonateUs";
import DonateForm from "./Pages/Profile,AppointmentDetails/DonateForm/DonateForm";

// doctor consultation
import DoctorConsul from "./Pages/DoctorConsultation/DoctorConsul/DoctorConsul";
import DoctorList from "./Pages/DoctorConsultation/DoctorList/DoctorList";

//  medicine,topDeals&cart
import ContinueShop from "./Pages/Medicines,topDeals&Cart/ContinueShopping/ContinueShop";
import Medicine from "./Pages/Medicines,topDeals&Cart/Medicine/Medicine";
import ShoppingCart from "./Pages/Medicines,topDeals&Cart/ShoppingCart/ShoppingCart";
import TopDeals from "./Pages/Medicines,topDeals&Cart/TopDeals/TopDeals";

// labs and tests
import Labs from "./Pages/Labs&Tests/Labs";
// surgery care
import SurgeryCare from "./Pages/SurgeryCare/SurgeryCare";
// cataract surgery
import Cataract from "./Pages/CataractSurgery/Cataract";
// lasik surgery
import Lasik from "./Pages/LasikSurgery/Lasik";
// kidney surgery
import Kidney from "./Pages/KidneySurgery/Kidney";
// gallstone surgery
import Gall from "./Pages/GallstoneSurgery/Gall";
// arthroscopy
import Athro from "./Pages/ArthoscopySurgery/Athro";
// cancer care
import Cancer from "./Pages/CancerCare/Cancer";

// // footer
import Careers from "./Pages/_FooterPages/Careers/Careers";
import Jobs1 from "./Pages/_FooterPages/Careers/Jobs1/Jobs1";
import Jobs2 from "./Pages/_FooterPages/Careers/Jobs2/Jobs2";
import Jobs3 from "./Pages/_FooterPages/Careers/Jobs3/Jobs3";
import Jobs4 from "./Pages/_FooterPages/Careers/Jobs4/Jobs4";
import Jobs5 from "./Pages/_FooterPages/Careers/Jobs5/Jobs5";
import Jobs6 from "./Pages/_FooterPages/Careers/Jobs6/Jobs6";
import Jobs7 from "./Pages/_FooterPages/Careers/Jobs7/Jobs7";
import Jobs8 from "./Pages/_FooterPages/Careers/Jobs8/Jobs8";

import Contact from "./Pages/_FooterPages/Contact/Contact";
import Faq from "./Pages/_FooterPages/FAQ/Faq";
import Overview from "./Pages/_FooterPages/Overview/Overview";
import Privacy from "./Pages/_FooterPages/PrivacyPolicy/Privacy";
import Security from "./Pages/_FooterPages/Security/Security";
import Terms from "./Pages/_FooterPages/TermsOfUse/Terms";
import Location1 from "./Pages/_FooterPages/LocateHospital/Location1/Location1";
import Location2 from "./Pages/_FooterPages/LocateHospital/Location2/Location2";
import Location3 from "./Pages/_FooterPages/LocateHospital/Location3/Location3";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* landing page  */}
        <Route path="/" element={<Homepage />} />
        <Route path="/vaccination" element={<Vaccination />} />
        <Route path="/covid19" element={<Covid19 />} />
        <Route path="/dentalCare" element={<DentalCare />} />
        <Route path="/dentalApp" element={<DentalApp />} />

        {/* main page  */}
        <Route path="/main" element={<Main />} />

        {/* homepage ecards */}
        <Route path="/ecard1" element={<Ecard1 />} />
        <Route path="/ecard2" element={<Ecard2 />} />
        <Route path="/ecard3" element={<Ecard3 />} />

        {/* profile,appointment details and donate  */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointmentDetail" element={<AppointmentDetail />} />
        <Route path="/donateUs" element={<DonateUs />} />
        <Route path="/donateForm" element={<DonateForm />} />

        {/* doctor consultation  */}
        <Route path="/doctorconsultation" element={<DoctorConsul />} />
        <Route path="/doctorlist" element={<DoctorList />} />

        {/* medicine,topDeals&cart  */}
        <Route path="/continueShopping" element={<ContinueShop />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/topDeals" element={<TopDeals />} />

        {/* labs and tests  */}
        <Route path="/labs" element={<Labs />} />

        {/* surgery care  */}
        <Route path="/surgeryCare" element={<SurgeryCare />} />

        {/* cataract surgery  */}
        <Route path="/cataract" element={<Cataract />} />

        {/* lasik  */}
        <Route path="/lasik" element={<Lasik />} />

        {/* kidney  */}
        <Route path="/kidney" element={<Kidney />} />

        {/* gallstone  */}
        <Route path="/gallstone" element={<Gall />} />

        {/* arthroscopy */}
        <Route path="/athro" element={<Athro />} />

        {/* cancer care  */}
        <Route path="/cancercare" element={<Cancer />} />

        {/* footer  */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/jobs1" element={<Jobs1 />} />
        <Route path="/jobs2" element={<Jobs2 />} />
        <Route path="/jobs3" element={<Jobs3 />} />
        <Route path="/jobs4" element={<Jobs4 />} />
        <Route path="/jobs5" element={<Jobs5 />} />
        <Route path="/jobs6" element={<Jobs6 />} />
        <Route path="/jobs7" element={<Jobs7 />} />
        <Route path="/jobs8" element={<Jobs8 />} />

        <Route path="/location1" element={<Location1 />} />
        <Route path="/location2" element={<Location2 />} />
        <Route path="/location3" element={<Location3 />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/security" element={<Security />} />
        <Route path="/termsOfUse" element={<Terms />} />

        {/* end  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
