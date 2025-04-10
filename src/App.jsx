import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";

import "./index.css"; //
function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <HomePage />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
