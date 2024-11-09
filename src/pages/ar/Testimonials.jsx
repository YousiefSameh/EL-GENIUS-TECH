import Header from "../../components/Ar/Header";
import Footer from "../../components/Ar/Footer";

const ArTestimonials = () => {
	return (
		<div className="bg-dark" style={{direction: "rtl"}}>
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col items-center mt-[40px] md:mt-0 md:px-0 justify-center h-screen space-y-3">
					<h1 className="text-6xl text-white font-bold z-40">
						<span className="text-primary">ت</span>وصيات <span className="text-primary">ا</span>لعملاء
					</h1>
					<p className="text-white text-justify text-lg w-[90%] md:w-1/2 leading-loose z-40">
						&quot;قصص نجاح العملاء&quot;، استمع إلى آراء عملائنا الراضين وهم
						يشاركون تجاربهم في العمل معنا. اكتشف كيف ساعدت حلولنا البرمجية
						الشركات على تحقيق أهدافها وتجاوز التوقعات من خلال الابتكار
						والتعاون.
					</p>
				</div>
			</section>
			<section className="py-12">
				<h1 className="text-white text-center text-4xl font-bold py-6">
					<span className="text-primary">ت</span>وصيات{" "}
					<span className="text-primary">ع</span>ملائنا
				</h1>
				<div className="container mx-auto grid grid-cols-1 justify-items-center md:grid-cols-2 gap-12">
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;فريق EL-GENIUS TECH تجاوز توقعاتنا! خبرتهم وتفانيهم ساعد
							شركتنا على النمو بشكل أسرع مما تصورنا. أنصح بالتعامل معهم بشدة!&quot;
						</p>
						<p className="font-bold text-primary">– سارة جونسون</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;فريق EL-GENIUS TECH تجاوز توقعاتنا! خبرتهم وتفانيهم ساعد
							شركتنا على النمو بشكل أسرع مما تصورنا. أنصح بالتعامل معهم بشدة!&quot;
						</p>
						<p className="font-bold text-primary">– سارة جونسون</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;فريق EL-GENIUS TECH تجاوز توقعاتنا! خبرتهم وتفانيهم ساعد
							شركتنا على النمو بشكل أسرع مما تصورنا. أنصح بالتعامل معهم بشدة!&quot;
						</p>
						<p className="font-bold text-primary">– سارة جونسون</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;فريق EL-GENIUS TECH تجاوز توقعاتنا! خبرتهم وتفانيهم ساعد
							شركتنا على النمو بشكل أسرع مما تصورنا. أنصح بالتعامل معهم بشدة!&quot;
						</p>
						<p className="font-bold text-primary">– سارة جونسون</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;فريق EL-GENIUS TECH تجاوز توقعاتنا! خبرتهم وتفانيهم ساعد
							شركتنا على النمو بشكل أسرع مما تصورنا. أنصح بالتعامل معهم بشدة!&quot;
						</p>
						<p className="font-bold text-primary">– سارة جونسون</p>
					</div>
					<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8 w-[90%] md:w-full">
						<p className="italic text-white font-semibold text-lg leading-loose">
							&quot;فريق EL-GENIUS TECH تجاوز توقعاتنا! خبرتهم وتفانيهم ساعد
							شركتنا على النمو بشكل أسرع مما تصورنا. أنصح بالتعامل معهم بشدة!&quot;
						</p>
						<p className="font-bold text-primary">– سارة جونسون</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default ArTestimonials;
