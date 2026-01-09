import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom m-2" style={{ backgroundColor: 'var(--lwl-white)' }}>
            <div className="container">
                <a href="#" className="navbar-brand fw-semi
                bold" >
                    Looped With Love
                </a>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            

            <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item mx-4">
                        <Link to="/" className="nav-link active nav-link-custom">Home</Link>
                    </li>
                    <li className="nav-item mx-4">
                        <Link to="/gallery" className="nav-link nav-link-custom">Gallery</Link>
                    </li>
                    <li className="nav-item mx-4">  
                        <Link to="/gallery" className="nav-link nav-link-custom">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}