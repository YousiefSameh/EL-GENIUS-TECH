import Footer from "../components/Footer";
import Header from "../components/Header";

const Services = () => {
	return (
		<div className="bg-dark">
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col items-center mt-[40px] md:mt-0 md:px-0 justify-center h-screen space-y-3">
					<h1 className="text-7xl text-white font-bold z-40">
						<span className="text-primary">S</span>ervices
					</h1>
					<p className="text-white text-justify text-lg w-[90%] md:w-1/2 leading-loose z-40">
						We offer a wide range of services designed to meet the unique needs
						of our clients. Our team of experts is dedicated to providing
						exceptional service and support to ensure your success.
					</p>
				</div>
			</section>
			<section className="py-12">
				<h1 className="text-white text-center text-5xl font-bold py-6">
					<span className="text-primary">O</span>ur{" "}
					<span className="text-primary">S</span>ervices
				</h1>
				<div className="container mx-auto grid grid-cols-1 justify-items-center md:grid-cols-3 gap-12">
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service2.svg"
								className="w-[80px] h-[80px]"
								alt=""
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							UI/UX Design
						</h2>
						<p className="text-white text-justify leading-loose">
							We create intuitive and engaging user experiences that align with
							user needs and business goals. Our UI/UX design process includes
							user research, wireframing, prototyping, and usability testing.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/serviceMobile.svg"
								className="w-[80px] h-[80px]"
								alt=""
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							Mobile Application
						</h2>
						<p className="text-white text-justify leading-loose">
							We develop high-performance mobile applications using Dart and
							Flutter to create beautiful, fast, and scalable cross-platform
							solutions. Our process includes UI design, development, testing,
							and optimization for both iOS and Android platforms.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service3.svg"
								className="w-[80px] h-[80px]"
								alt=""
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							Front-end Development
						</h2>
						<p className="text-white text-justify leading-loose">
							We build fast, scalable, and responsive front-end applications
							using modern web technologies such as HTML, CSS, JavaScript, and
							React. Our front-end development process includes coding, testing,
							and deployment.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service5.svg"
								className="w-[80px] h-[80px]"
								alt=""
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							Back-end Development
						</h2>
						<p className="text-white text-justify leading-loose">
							We build secure and scalable back-end systems using technologies
							like Node.js, and SQL/NoSQL databases. Our process covers
							architecture, coding, and deployment to ensure reliable data
							handling and smooth server performance.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service4.svg"
								className="w-[80px] h-[80px]"
								alt=""
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							Social Media Designs
						</h2>
						<p className="text-white text-justify leading-loose">
							We create eye-catching, on-brand social media designs that engage
							and grow your audience. Using tools like Adobe Photoshop,
							Illustrator, and Canva, we design visuals tailored for each
							platform, focusing on consistency, style, and impact.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service6.svg"
								className="w-[80px] h-[80px]"
								alt=""
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							Social Media Management
						</h2>
						<p className="text-white text-justify leading-loose">
							We manage your social media presence to build engagement and drive
							growth. From content planning and scheduling to audience
							interaction and analytics, our approach ensures consistent,
							strategic, and impactful communication across all platforms.
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Services;
