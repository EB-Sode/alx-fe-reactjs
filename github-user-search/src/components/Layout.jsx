import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <header style={{ marginBottom: "20px", borderBottom: "1px solid #ddd" }}>
        <h1>🌐 My React App</h1>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
          <Link to="/contact" style={{ marginRight: "10px" }}>Contact</Link>
          <Link to="/search">Search</Link>
        </nav>
      </header>

      {/* Main Content (this changes per route) */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ marginTop: "20px", borderTop: "1px solid #ddd" }}>
        <p>© {new Date().getFullYear()} My React App</p>
      </footer>
    </div>
  );
}

export default Layout;
