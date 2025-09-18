// import { Link, Outlet } from "react-router-dom";

// function Layout() {
//   return (
//     <div style={{ padding: "20px" }}>
//       {/* Header */}
//       <header style={{ marginBottom: "20px", borderBottom: "1px solid #ddd" }}>
//         <h1>🌐 My React App</h1>
//         <nav>
//           <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
//           <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
//           <Link to="/contact" style={{ marginRight: "10px" }}>Contact</Link>
//           <Link to="/search">Search</Link>
//         </nav>
//       </header>

//       {/* Main Content (this changes per route) */}
//       <main>
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <footer style={{ marginTop: "20px", borderTop: "1px solid #ddd" }}>
//         <p>© {new Date().getFullYear()} My React App</p>
//       </footer>
//     </div>
//   );
// }

// export default Layout;

import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">🌐 My React App</h1>
        <nav className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        <Link to="/search" className="text-gray-700 hover:text-blue-600">Search</Link>
        </nav>
        
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t p-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} My React App
      </footer>
    </div>
  );
}

export default Layout;

