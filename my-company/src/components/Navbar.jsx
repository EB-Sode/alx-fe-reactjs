import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ marginBottom: "20px" }}>

      <Link to="/">Home</Link> |{" "}
      <Link to="/services">Services</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
      
    </nav>
  );
};

export default Navbar;