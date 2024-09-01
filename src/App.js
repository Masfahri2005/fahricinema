import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/LandingPage.css"; // Impor CSS dari file style
import { Container, Row, Col } from "react-bootstrap"; // Impor komponen Bootstrap
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import List from "./components/List";
import SuperHero from "./components/Superhero";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* BUKA INTRO SECTION */}
      <div className="myBG border">
        <NavigationBar />
        <Intro />
      </div>
      
      {/* BUKA SECTION 1 */}
      <div className="trending">
        <Trending />
      </div>

      {/* BUKA SECTION 2 */}
      <div className="superhero">
        <SuperHero />
      </div>

      {/* BUKA LIST */}
      <div className="list">
        <List />
      </div>

      {/* BUKA FOOTER */}
      <div className="#">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
