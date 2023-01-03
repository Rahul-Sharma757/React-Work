import React from 'react';
import './App.css';
import '../src/css/styles.css';
import './css/all.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './pages/Service';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import AboutPage from './pages/AboutPage';
import WeAreHiring from './pages/WeAreHiring';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import WebAppDevelopment from './pages/WebAppDevelopment';
import MaintainanceSupport from './pages/MaintainanceSupport';
import MigrationIntigration from './pages/MigrationIntigration';
import Consulting from './pages/Consulting';
import Lighiting from './pages/Lighiting';
import UXResearch from './pages/UXResearch';
import UIAnimation from './pages/UIAnimation';
import DesignTesting from './pages/DesignTesting';
import ProductDesign from './pages/ProductDesign';
import PhpDevelopment from './pages/PhpDevelopment';
import MernStackDevelopment from './pages/MernStackDevelopment';
import NodeJsDevelopment from './pages/NodeJsDevelopment';
import ReactJsDevelopment from './pages/ReactJsDevelopment';
import ECommerceDevelopment from './pages/ECommerceDevelopment';
import ReactNativeAppDevelopment from './pages/ReactNativeAppDevelopment';
import WordPressDevelopment from './pages/WordPressDevelopment';
import EcommerceCmsDevelopment from './pages/EcommerceCmsDevelopment';
import MPS from './pages/MPS';
import CRC from './pages/CRC';
import NCRR from './pages/NCRR';
import SmallHD from './pages/SmallHD';
import Teradek from './pages/Teradek';
import Reseller from './pages/Reseller';
import Printing from './pages/Printing';
import Licensing from './pages/Licensing';
import DownloadPortal from './pages/DownloadPortal';
import ActivationApp from './pages/ActivationApp';
import PartnerPortal from './pages/PartnerPortal';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/ServicesPage' element={< Service />}></Route>
          <Route exact path='/caseStudyPage' element={< CaseStudy />}></Route>
          <Route exact path='/aboutPage' element={< AboutPage />}></Route>
          <Route exact path='/weAreHiringPage' element={< WeAreHiring />}></Route>
          <Route exact path='/privacyPolicy' element={< PrivacyPolicy />}></Route>
          <Route exact path='/mobileAppDevelopmentPage' element={< MobileAppDevelopment />}></Route>
          <Route exact path='/webAppDevelopment' element={< WebAppDevelopment />}></Route>
          <Route exact path='/maintainanceSupportPage' element={< MaintainanceSupport />}></Route>
          <Route exact path='/migrationIntigrationPage' element={< MigrationIntigration />}></Route>
          <Route exact path='/consultingPage' element={<Consulting />} ></Route>
          <Route exact path='/lightingPage' element={<Lighiting />}></Route>
          <Route exact path='/uxResearchPage' element={<UXResearch />}></Route>
          <Route exact path='/ui_animationPage' element={<UIAnimation />}></Route>
          <Route exact path='/designTestingPage' element={<DesignTesting />}></Route>
          <Route exact path='/productDesignPage' element={<ProductDesign />}></Route>
          <Route exact path='/phpDevelopmentPage' element={<PhpDevelopment />}></Route>
          <Route exact path='/mernStackDevelopment' element={<MernStackDevelopment />}></Route>
          <Route exact path='/nodeJsDevelopment' element={<NodeJsDevelopment />}></Route>
          <Route exact path='/reactJsDevelopment' element={<ReactJsDevelopment />}></Route>
          <Route exact path='/ecommerceDevelopment' element={<ECommerceDevelopment />}></Route>
          <Route exact path='/reactNativeAppDevelopment' element={<ReactNativeAppDevelopment />}></Route>
          <Route exact path='/wordPressDevelopment' element={<WordPressDevelopment />}></Route>
          <Route exact path='/ecommerceCmsDevelopment' element={<EcommerceCmsDevelopment />}></Route>
          <Route exact path='/mps' element={<MPS />}></Route>
          <Route exact path='/crc' element={<CRC />}></Route>
          <Route exact path='/ncrr' element={<NCRR />}></Route>
          <Route exact path='/smallHD' element={<SmallHD />}></Route>
          <Route exact path='/teradek' element={<Teradek />}></Route>
          <Route exact path='/reseller' element={<Reseller />}></Route>
          <Route exact path='/printing' element={<Printing />}></Route>
          <Route exact path='/lisencing' element={<Licensing />}></Route>
          <Route exact path='/downloadPortal' element={<DownloadPortal />}></Route>
          <Route exact path='/activationApp' element={<ActivationApp />}></Route>
          <Route exact path='/partnerPortal' element={<PartnerPortal />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
