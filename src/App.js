import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
const App = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="app">
      <Topbar active={active} setActive={setActive} />
      <Menu active={active} setActive={setActive} />
      <main className="main">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;
