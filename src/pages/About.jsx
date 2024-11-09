import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="bg-dark">
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col items-center mt-[40px] md:mt-0 md:px-0 justify-center h-screen space-y-3">
					<h1 className="text-7xl text-white font-bold z-40">
						<span className="text-primary">A</span>bout{" "}
						<span className="text-primary">U</span>s
					</h1>
					<p className="text-white text-justify text-lg w-[90%] md:w-1/2 leading-loose z-40">
						Welcome to Our Company, Discover who we are, our mission, vision,
						and the values that drive us. Learn about our journey, team, and
						commitment to delivering exceptional software solutions tailored to
						your business needs
					</p>
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
						<h2 className="text-[48px] text-primary font-bold">
							What is EL-GENIUS TECH
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
							<Link to={"/about"}>Our Portfolio</Link>
						</button>
					</div>
				</div>
			</section>
			<section className="py-12">
				<h1 className="text-white text-center text-5xl font-bold py-6">
					<span className="text-primary">W</span>hy{" "}
					<span className="text-primary">C</span>hoose{" "}
					<span className="text-primary">U</span>s?
				</h1>
				<div className="container mx-auto grid grid-cols-1 justify-items-center md:grid-cols-3 gap-12">
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<img
							src="/assets/Choose1.svg"
							className="w-[120px] h-[120px]"
							alt=""
						/>
						<h2 className="text-white font-bold text-3xl text-center">
							<span className="text-primary">C</span>ustom{" "}
							<span className="text-primary">S</span>oftware{" "}
							<span className="text-primary">S</span>olutions
						</h2>
						<p className="text-white text-justify leading-loose">
							We specialize in delivering tailored software solutions that meet
							the unique needs of each client, ensuring maximum efficiency and
							innovation.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<img
							src="/assets/Choose2.svg"
							className="w-[120px] h-[120px]"
							alt=""
						/>
						<h2 className="text-white font-bold text-3xl text-center">
							<span className="text-primary">E</span>xperienced <br />{" "}
							<span className="text-primary">T</span>eam
						</h2>
						<p className="text-white text-justify leading-loose">
							We specialize in delivering tailored software solutions that meet
							the unique needs of each client, ensuring maximum efficiency and
							innovation.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<img
							src="/assets/Choose3.svg"
							className="w-[120px] h-[120px]"
							alt=""
						/>
						<h2 className="text-white font-bold text-3xl text-center">
							<span className="text-primary">O</span>n-Time{" "}
							<span className="text-primary">D</span>elivery <br />{" "}
							<span className="text-primary">&</span> Support
						</h2>
						<p className="text-white text-justify leading-loose">
							We specialize in delivering tailored software solutions that meet
							the unique needs of each client, ensuring maximum efficiency and
							innovation.
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default About;
