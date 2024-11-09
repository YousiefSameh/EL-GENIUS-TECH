import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-black rounded-t-[28px] p-4 md:p-12">
			<div className="container mx-auto grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-5">
				<div className="col-span-2">
					<img src="/assets/Logo.webp" className="w-[150px] h-[150px]" alt="" />
					<h4 className="text-white font-bold text-2xl md:-mt-4 md:ml-7">
						Software Development <br /> Solutions
					</h4>
				</div>
				<div className="col">
					<h3 className="text-white font-bold text-2xl pb-4">
						<span className="text-primary">Q</span>uick{" "}
						<span className="text-primary">L</span>inks
					</h3>
					<ul className="space-y-4">
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/"}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/about"}
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/services"}
							>
								Services
							</Link>
						</li>
					</ul>
				</div>
				<div className="col">
					<h3 className="text-white font-bold text-2xl pb-4">
						<span className="text-primary">Q</span>uick{" "}
						<span className="text-primary">L</span>inks
					</h3>
					<ul className="space-y-4">
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/portfolio"}
							>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/testimonials"}
							>
								Testimonials
							</Link>
						</li>
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/contact"}
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
				<div className="col">
					<h3 className="text-white font-bold text-2xl pb-4">
						<span className="text-primary">C</span>all{" "}
						<span className="text-primary">U</span>s
					</h3>
					<ul className="space-y-4">
						<li className="text-white font-bold transition-all hover:text-primary">
							<p>+(20) 123-456-7890</p>
						</li>
						<li className="text-white font-bold transition-all hover:text-primary">
							<p>+(20) 987-654-3210</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="copyright flex justify-center mt-16">
				<p className="text-white font-bold">
					&copy; Copyright <span className="text-primary">Yousief Sameh</span>{" "}
					2024. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
