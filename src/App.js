
import {Titlebanner,Introduction, ExplorePlatform, CustomerDetail , Review , Document ,SuperMerchants,ProjectDetail ,CustomerValue ,Pricing,Footer, RequestDemo} from "./components";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      disable: "phone",
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Titlebanner></Titlebanner>
      <Introduction></Introduction>
      <ExplorePlatform id="superMerchants"></ExplorePlatform>
      <CustomerDetail />
      <Review />
      <Document id="docs"/>
      <SuperMerchants id="superMerchants"/>
      <CustomerValue />
      <ProjectDetail/>
      <CustomerDetail />
      <Pricing id="pricing"/>
      <RequestDemo />
      <Footer />

    </div>
  );
}

export default App;
