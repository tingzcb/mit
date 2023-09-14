
 import 'bootstrap/dist/css/bootstrap.css';

import Home from "./pages/home/Home";
import LogoImage from "./components/logoImage";
import NavBar from "./components/NavBar";
// import BottomFooter from ".components/BottomFooter";
import SideBar from "./components/SideBar";
// import Home from "./pages/home/Home";
import './app.css';

import 'w3-css/w3.css';
import { Button, ButtonGroup, Box, Grid, GridItem, Hide, Show } from "@chakra-ui/react";

//router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import ManagedItServices from "./pages/manageItServices/ManagedItServices";
import RootLayout from "./layouts/RootLayout";
import HostingServices from './pages/hostingServices/HostingServices';
import ContactUs from './pages/contactUs/ContactUs';
import PcMacSupport from "./pages/pcMacSupport/PcMacSupport";
import ServerNetwork from "./pages/serverNetwork/ServerNetwork";
import BackUp from "./pages/backupDisasterRecovery/BackUp";
import Software from "./pages/softwareImplementation/Software";
import WebsiteDesign from "./pages/websiteDesign/WebsiteDesign";
import EmailHosting from "./pages/websiteEmailHosting/EmailHosting";
import ITpartner from "./pages/itPartner/ITpartner";
import Testimonials from "./pages/Testimonials";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path="managedItServices" element={<ManagedItServices />} />
      <Route path="hostingServices" element={<HostingServices />} />
      <Route path="contactUs" element={<ContactUs />} />

      <Route path="pcMacSupport" element={<PcMacSupport />} />
      <Route path="serverNetwork" element={<ServerNetwork />} />
      <Route path="backUp" element={<BackUp />} />
      <Route path="Software" element={<Software />} />
      <Route path="hosting" element={<HostingServices />} />
      <Route path="websiteDesign" element={<WebsiteDesign />} />
      <Route path="emailHosting" element={<EmailHosting />} />
      <Route path="partner" element={<ITpartner />} />
      <Route path="testimonial" element={<Testimonials />} />


    </Route>


  )
)


const App = () => {


  return (
    <RouterProvider router={router} />

  )
}

export default App