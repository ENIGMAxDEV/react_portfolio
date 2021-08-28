import "./menu.scss";

const Menu = ({ active, setActive }) => {
  return (
    <div className={"menu " + (active && "active")}>
      <ul>
        <li onClick={() => setActive(!active)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setActive(!active)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setActive(!active)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setActive(!active)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setActive(!active)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
