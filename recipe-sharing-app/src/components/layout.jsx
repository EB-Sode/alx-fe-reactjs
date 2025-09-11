import { Outlet, Link } from "react-router-dom";

const Layout = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/recipes/new">Add Recipe</Link> |{" "}
      <Link to="/favorites">Favorites</Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
