export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom m-2">
            <div className="container">
                <a href="#" className="navbar-brand fw-semi
                bold">
                    Looped With Love
                </a>
            </div>
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

            <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href="#" className="nav-link active">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}