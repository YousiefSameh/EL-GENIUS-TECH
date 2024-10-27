import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className="bg-black fixed top-0 left-0 w-full z-50">
			<div className="container mx-auto flex items-center justify-between">
				<nav className="flex gap-4">
					<img src="assets/Logo.webp" className="w-[90px] h-[90px]" alt="" />
					<ul className="hidden lg:flex items-center gap-6">
						<li className="nav-link">
							<Link to={"/"}>Home</Link>
						</li>
						<li className="nav-link">
							<Link to={"/about"}>About Us</Link>
						</li>
						<li className="nav-link">
							<Link to={"/services"}>Services</Link>
						</li>
						<li className="nav-link">
							<Link to={"/portfolio"}>Portfolio</Link>
						</li>
						<li className="nav-link">
							<Link to={"/pricing"}>Pricing</Link>
						</li>
						<li className="nav-link">
							<Link to={"/testimonials"}>Testimonials</Link>
						</li>
						<li className="nav-link">
							<Link to={"/contact"}>Contact Us</Link>
						</li>
					</ul>
				</nav>
				<nav className="hidden lg:flex items-center gap-5">
					<button className="btn-style w-[150px]">
						<Link to={"/register"}>Register</Link>
					</button>
					<button className="btn-style w-[150px]">
						<Link to={"/login"}>Login</Link>
					</button>
				</nav>
				<button
					className="block lg:hidden px-4"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<img
						src="./assets/menu.svg"
						className="w-[36px] fill-primary"
						alt=""
					/>
				</button>
			</div>
			<div
				className={`mobile-nav absolute pb-6 bg-black w-full top-full ${
					isMenuOpen ? "block" : "hidden"
				} transition-all`}
			>
				<div className="container px-6 mx-auto">
					<ul className="flex flex-col gap-4">
						<li className="nav-link">
							<Link to={"/"}>Home</Link>
						</li>
						<li className="nav-link">
							<Link to={"/about"}>About Us</Link>
						</li>
						<li className="nav-link">
							<Link to={"/services"}>Services</Link>
						</li>
						<li className="nav-link">
							<Link to={"/portfolio"}>Portfolio</Link>
						</li>
						<li className="nav-link">
							<Link to={"/pricing"}>Pricing</Link>
						</li>
						<li className="nav-link">
							<Link to={"/testimonials"}>Testimonials</Link>
						</li>
						<li className="nav-link">
							<Link to={"/contact"}>Contact Us</Link>
						</li>
					</ul>
					<ul className="mt-4 flex flex-col gap-4">
						<button className="btn-style w-[140px]">
							<Link to={"/register"}>Register</Link>
						</button>
						<button className="btn-style w-[140px]">
							<Link to={"/login"}>Login</Link>
						</button>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
