import Header from "../../components/Ar/Header";
import Footer from "../../components/Ar/Footer";
import { Link } from "react-router-dom";

const ArAbout = () => {
	return (
		<div className="bg-dark" style={{direction: "rtl"}}>
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col items-center mt-[40px] md:mt-0 md:px-0 justify-center h-screen space-y-3">
					<h1 className="text-7xl text-white font-bold z-40">
						<span className="text-primary">م</span>ن{" "}
						<span className="text-primary">ن</span>حن
					</h1>
					<p className="text-white text-justify text-lg w-[90%] md:w-1/2 leading-loose z-40">
						مرحبًا بكم في شركتنا، اكتشفوا من نحن، مهمتنا، رؤيتنا، والقيم التي
						تحركنا. تعرفوا على رحلتنا، فريقنا، والتزامنا بتقديم حلول برمجية
						استثنائية تلبي احتياجات أعمالكم.
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
							ما هي شركة EL-GENIUS TECH
						</h2>
						<p className="text-white leading-[35px] text-justify">
							تعتبر شركة El-Genius Tech شركة رائدة في مجال البرمجيات تسعى إلى
							تقديم حلول تقنية مبتكرة للشركات من جميع الأحجام. متخصصة في
							تطوير البرمجيات المخصصة، دمج الذكاء الاصطناعي، وخدمات الحوسبة
							السحابية، تهدف الشركة إلى تعزيز الكفاءة التشغيلية ودفع النمو.
							مع فريق من المحترفين ذوي الخبرة، تركز El-Genius Tech على تقديم
							منتجات عالية الجودة ومخصصة لتلبية احتياجات العملاء الفريدة،
							ومساعدتهم في التحول الرقمي وتحقيق أهدافهم الاستراتيجية بشكل
							فعال.
						</p>
						<button className="btn-style w-fit">
							<Link to={"/about"}>أعمالنا</Link>
						</button>
					</div>
				</div>
			</section>
			<section className="py-12">
				<h1 className="text-white text-center text-5xl font-bold py-6">
					<span className="text-primary">ل</span>ماذا{" "}
					<span className="text-primary">ت</span>ختار{" "}
					<span className="text-primary">ن</span>حن؟
				</h1>
				<div className="container mx-auto grid grid-cols-1 justify-items-center md:grid-cols-3 gap-12">
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<img
							src="/assets/Choose1.svg"
							className="w-[120px] h-[120px]"
							alt=""
						/>
						<h2 className="text-white font-bold text-3xl text-center">
							<span className="text-primary">ح</span>لول{" "}
							<span className="text-primary">ب</span>رمجيات{" "}
							<span className="text-primary">م</span>خصصة
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن متخصصون في تقديم حلول برمجية مخصصة تلبي الاحتياجات الفريدة
							لكل عميل، مما يضمن أقصى قدر من الكفاءة والابتكار.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<img
							src="/assets/Choose2.svg"
							className="w-[120px] h-[120px]"
							alt=""
						/>
						<h2 className="text-white font-bold text-3xl text-center">
							<span className="text-primary">ف</span>ريق{" "}
							<span className="text-primary">ذ</span>و خبرة
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن متخصصون في تقديم حلول برمجية مخصصة تلبي الاحتياجات الفريدة
							لكل عميل، مما يضمن أقصى قدر من الكفاءة والابتكار.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<img
							src="/assets/Choose3.svg"
							className="w-[120px] h-[120px]"
							alt=""
						/>
						<h2 className="text-white font-bold text-3xl text-center">
							<span className="text-primary">ت</span>سليم{" "}
							<span className="text-primary">ف</span>ي{" "}
							<span className="text-primary">الو</span>قت <br />{" "}
							<span className="text-primary">و</span>دعم
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن متخصصون في تقديم حلول برمجية مخصصة تلبي الاحتياجات الفريدة
							لكل عميل، مما يضمن أقصى قدر من الكفاءة والابتكار.
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default ArAbout;
