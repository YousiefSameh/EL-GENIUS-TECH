import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [username, setUsername] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const isArabic = location.pathname.startsWith("/ar");

	useEffect(() => {
		const storedUsername = localStorage.getItem("username");
		setUsername(storedUsername);
	}, []);

	const toggleLanguage = () => {
		const newPath = isArabic
			? location.pathname.replace("/ar", "")
			: `/ar${location.pathname}`;
		navigate(newPath);
	};

	const handleLogout = () => {
		localStorage.removeItem("username");
		setUsername(null);
		window.location.reload();
	};

	return (
		<header className="bg-black fixed top-0 left-0 w-full z-50">
			<div className="container mx-auto flex items-center justify-between">
				<nav className="flex gap-4">
					<img src="assets/Logo.webp" className="w-[90px] h-[90px]" alt="Logo" />
					<ul className="hidden lg:flex items-center gap-6">
						<li className="nav-link"><Link to="/">Home</Link></li>
						<li className="nav-link"><Link to="/about">About Us</Link></li>
						<li className="nav-link"><Link to="/services">Services</Link></li>
						<li className="nav-link"><Link to="/portfolio">Portfolio</Link></li>
						<li className="nav-link"><Link to="/testimonials">Testimonials</Link></li>
						<li className="nav-link"><Link to="/contact">Contact Us</Link></li>
					</ul>
				</nav>
				<nav className="hidden lg:flex items-center gap-5">
					{username ? (
						<>
							<div className="flex items-center gap-3">
								<img src="assets/user-icon.svg" alt="User Icon" className="w-[36px] h-[36px]" />
								<span className="text-white font-medium">{username}</span>
							</div>
							<button className="btn-style w-[150px]" onClick={handleLogout}>Log out</button>
						</>
					) : (
						<>
							<button className="btn-style w-[150px]"><Link to="/register">Register</Link></button>
							<button className="btn-style w-[150px]"><Link to="/login">Login</Link></button>
						</>
					)}
					<button className="btn-style w-[150px]" onClick={toggleLanguage}>{isArabic ? "English" : "العربية"}</button>
				</nav>
				<button className="block lg:hidden px-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<img src="assets/menu.svg" className="w-[36px]" alt="Menu Icon" />
				</button>
			</div>
			<div className={`mobile-nav absolute pb-6 bg-black w-full top-full ${isMenuOpen ? "block" : "hidden"} transition-all`}>
				<div className="container px-6 mx-auto">
					<ul className="flex flex-col gap-4">
						<li className="nav-link"><Link to="/">Home</Link></li>
						<li className="nav-link"><Link to="/about">About Us</Link></li>
						<li className="nav-link"><Link to="/services">Services</Link></li>
						<li className="nav-link"><Link to="/portfolio">Portfolio</Link></li>
						<li className="nav-link"><Link to="/testimonials">Testimonials</Link></li>
						<li className="nav-link"><Link to="/contact">Contact Us</Link></li>
					</ul>
					<div className="mt-4">
						{username ? (
							<>
								<div className="flex items-center gap-3">
									<img src="assets/user-icon.svg" alt="User Icon" className="w-[36px] h-[36px]" />
									<span className="text-white font-medium">{username}</span>
								</div>
								<button className="btn-style w-[150px]" onClick={handleLogout}>Log out</button>
							</>
						) : (
							<div className="flex gap-4">
								<button className="btn-style w-full"><Link to="/register">Register</Link></button>
								<button className="btn-style w-full"><Link to="/login">Login</Link></button>
							</div>
						)}
						<button className="btn-style w-full mt-4" onClick={toggleLanguage}>{isArabic ? "English" : "العربية"}</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
