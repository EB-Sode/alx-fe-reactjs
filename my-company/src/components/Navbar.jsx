import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#282c34", padding: "10px", display: "flex", justifyContent: "center" }}>

      <Link to="/">Home</Link> |{" "}
      <Link to="/services">Services</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>

    </nav>
  );
};

export default Navbar;