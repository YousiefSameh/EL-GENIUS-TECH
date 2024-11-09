import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const res = await fetch(
					"https://straight-marleen-yousiefsameh-d326cffb.koyeb.app/api/projects"
				);
				if (!res.ok) {
					console.error("API call failed:", await res.text());
					return;
				}

				const contentType = res.headers.get("content-type");
				if (contentType && contentType.includes("application/json")) {
					const result = await res.json();
					setProjects(result.data);
				} else {
					console.error("Unexpected response format:", await res.text());
				}
			} catch (error) {
				console.log("Error: ", error);
			}
		};
		fetchProjects();
	}, []);
	return (
		<div className="bg-dark">
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col mt-[40px] md:mt-0 pl-4 md:px-0 justify-center h-screen space-y-3">
					<p className="font-medium text-[20px] text-white z-40">
						Welcome to EL-GENIUS TECH
					</p>
					<h1 className="font-bold text-[52px] md:text-[60px] text-primary z-40">
						Software Development <br /> Solutions
					</h1>
					<h3 className="font-semibold text-[24px] md:text-[28px] text-white z-40">
						We Build Innovative Software to Transform Your Ideas
					</h3>
					<button className="btn-style w-fit z-40 !mt-8">Our Portfolio</button>
				</div>
			</section>
			<section className="about h-full lg:h-[500px]">
				<div className="container mx-auto h-full py-5 flex flex-col lg:flex-row items-center gap-12 justify-between">
					<img
						src="/assets/Logo.webp"
						className="w-[90%] lg:w-[450px] rounded-sm"
						alt=""
					/>
					<div className="content w-[90%] lg:w-full py-4 gap-4 flex flex-col">
						<h2 className="text-[48px] text-white font-bold">
							<span className="text-primary">A</span>bout{" "}
							<span className="text-primary">U</span>s
						</h2>
						<p className="text-white leading-[35px] text-justify">
							El-Genius Tech is a forward-thinking software company dedicated to
							providing innovative technology solutions for businesses of all
							sizes. Specializing in custom software development, artificial
							intelligence integration, and cloud computing services, the
							company aims to enhance operational efficiency and drive growth.
							With a team of experienced professionals, El-Genius Tech focuses
							on delivering high-quality, tailored products that meet the unique
							needs of clients, helping them navigate the digital landscape and
							achieve their strategic objectives effectively.
						</p>
						<button className="btn-style w-fit">
							<Link to={"/about"}>About Us</Link>
						</button>
					</div>
				</div>
			</section>
			<section className="portfolio py-12">
				<div className="container mx-auto">
					<div className="head flex flex-col gap-3 justify-center md:flex-row items-center md:justify-between">
						<h2 className="text-[38px] text-white font-bold">
							<span className="text-primary">O</span>ur{" "}
							<span className="text-primary">P</span>ortfolio
						</h2>
						<button className="btn-style">
							<Link>More Projects</Link>
						</button>
					</div>
					<div className="content grid grid-cols-1 px-6 md:px-0 md:grid-cols-3 gap-6 mt-6">
						{projects.slice(0, 3).map((project) => (
							<div key={project.id} className="bg-black rounded-[28px]">
								<img
									src={project.image.url}
									alt={project.title}
									className="rounded-t-[28px]"
								/>
								<div className="content px-6 py-5">
									<h3 className="text-[18px] text-white">{project.type}</h3>
									<h2 className="text-[28px] text-white font-bold">
										{project.title}
									</h2>
									<button className="btn-style block mt-2">
										<a href="https://www.google.com">Show Now</a>
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="testimonials py-12">
				<div className="container mx-auto">
					<div className="head flex flex-col gap-3 justify-center md:flex-row items-center md:justify-between">
						<h2 className="text-[38px] text-white font-bold">
							<span className="text-primary">O</span>ur{" "}
							<span className="text-primary">T</span>estimonials
						</h2>
						<button className="btn-style">
							<Link>More Projects</Link>
						</button>
					</div>
					<div className="grid grid-cols-1 px-6 md:px-0 md:grid-cols-2 gap-6 mt-6">
						<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8">
							<p className="italic text-white font-semibold text-lg leading-loose">
								&quot;The team at EL-GENIUS TECH exceeded our expectations!
								Their expertise and dedication helped our business grow faster
								than we imagined. Highly recommended!&quot;
							</p>
							<p className="font-bold text-primary">– Sarah Johnson</p>
						</div>
						<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8">
							<p className="italic text-white font-semibold text-lg leading-loose">
								&quot;The team at EL-GENIUS TECH exceeded our expectations!
								Their expertise and dedication helped our business grow faster
								than we imagined. Highly recommended!&quot;
							</p>
							<p className="font-bold text-primary">– Sarah Johnson</p>
						</div>
					</div>
				</div>
			</section>
			<section className="contact py-12">
				<div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
					<img
						src="/assets/ContactUs_Img.webp"
						className="w-[90%] md:w-1/2 h-[550px]"
						alt=""
					/>
					<form action="" className="w-[90%] md:w-1/2">
						<div className="flex flex-col gap-3">
							<h2 className="text-white text-5xl font-bold">
								<span className="text-primary">C</span>ontact{" "}
								<span className="text-primary">U</span>s
							</h2>
							<input type="text" placeholder="Name" className="input-style" />
							<input type="email" placeholder="Email" className="input-style" />
							<textarea
								placeholder="Message"
								rows={10}
								className="input-style"
							/>
							<button type="submit" className="btn-style">
								Send
							</button>
						</div>
					</form>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Home;
