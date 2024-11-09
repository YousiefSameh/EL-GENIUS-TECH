import Header from "../components/Header";
import Footer from "../components/Footer";

const Testimonials = () => {
	return (
		<div className="bg-dark">
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col items-center mt-[40px] md:mt-0 md:px-0 justify-center h-screen space-y-3">
					<h1 className="text-6xl text-white font-bold z-40">
						<span className="text-primary">T</span>estimonials
					</h1>
					<p className="text-white text-justify text-lg w-[90%] md:w-1/2 leading-loose z-40">
						&quot;Client Success Stories&quot;, Hear from our satisfied clients
						as they share their experiences working with us. Discover how our
						software solutions have helped businesses achieve their goals and
						exceed expectations through innovation and collaboration.
					</p>
				</div>
			</section>
			<section className="py-12">
				<h1 className="text-white text-center text-4xl font-bold py-6">
					<span className="text-primary">O</span>ur{" "}
					<span className="text-primary">T</span>estimonials
				</h1>
				<div className="container mx-auto grid grid-cols-1 justify-items-center md:grid-cols-2 gap-12">
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;The team at EL-GENIUS TECH exceeded our expectations! Their
							expertise and dedication helped our business grow faster than we
							imagined. Highly recommended!&quot;
						</p>
						<p className="font-bold text-primary">– Sarah Johnson</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;The team at EL-GENIUS TECH exceeded our expectations! Their
							expertise and dedication helped our business grow faster than we
							imagined. Highly recommended!&quot;
						</p>
						<p className="font-bold text-primary">– Sarah Johnson</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;The team at EL-GENIUS TECH exceeded our expectations! Their
							expertise and dedication helped our business grow faster than we
							imagined. Highly recommended!&quot;
						</p>
						<p className="font-bold text-primary">– Sarah Johnson</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap- w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;The team at EL-GENIUS TECH exceeded our expectations! Their
							expertise and dedication helped our business grow faster than we
							imagined. Highly recommended!&quot;
						</p>
						<p className="font-bold text-primary">– Sarah Johnson</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;The team at EL-GENIUS TECH exceeded our expectations! Their
							expertise and dedication helped our business grow faster than we
							imagined. Highly recommended!&quot;
						</p>
						<p className="font-bold text-primary">– Sarah Johnson</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;The team at EL-GENIUS TECH exceeded our expectations! Their
							expertise and dedication helped our business grow faster than we
							imagined. Highly recommended!&quot;
						</p>
						<p className="font-bold text-primary">– Sarah Johnson</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Testimonials;
