import React from 'react';
import './App.css';
import '../src/css/styles.css';
import './css/all.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Service from './pages/Service';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import AboutPage from './pages/AboutPage';
import WeAreHiring from './pages/WeAreHiring';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import WebAppDevelopment from './pages/WebAppDevelopment';
import MaintainanceSupport from './pages/MaintainanceSupport';

function App() {
  return (
  <>
    <Router>
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
      </Routes>
    </Router>
  </>
   
  );
}

export default App;
