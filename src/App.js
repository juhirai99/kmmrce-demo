
import {Titlebanner,Introduction, ExplorePlatform, CustomerDetail , Review , Document ,SuperMerchants,ProjectDetail ,CustomerValue ,Pricing,Footer, RequestDemo} from "./components"
function App() {
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
