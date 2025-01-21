import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Ar/Header";
import Footer from "../../components/Ar/Footer";

const ArHome = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const res = await fetch(
					"https://el-genius-tech-back.vercel.app/api/projects"
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
		<div className="bg-dark" style={{ direction: "rtl" }}>
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col mt-[40px] md:mt-0 pl-4 md:px-0 justify-center h-screen space-y-3">
					<p className="font-medium text-[20px] text-white z-40">
						مرحبًا بكم في EL-GENIUS TECH
					</p>
					<h1 className="font-bold text-[52px] md:text-[60px] text-primary z-40">
						حلول تطوير البرمجيات
					</h1>
					<h3 className="font-semibold text-[24px] md:text-[28px] text-white z-40">
						نحن نبني برمجيات مبتكرة لتحويل أفكارك
					</h3>
					<button className="btn-style w-fit z-40 !mt-8">محفظة مشاريعنا</button>
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
						<h2 className="text-[48px] text-primary font-bold">من نحن</h2>
						<p className="text-white leading-[35px] text-justify">
							تعتبر شركة EL-GENIUS TECH من الشركات الرائدة التي تهدف إلى توفير
							حلول تكنولوجية مبتكرة للشركات بمختلف أحجامها. تتخصص الشركة في
							تطوير البرمجيات حسب الطلب، تكامل الذكاء الاصطناعي، وخدمات الحوسبة
							السحابية، مما يسهم في تعزيز الكفاءة التشغيلية وتحفيز النمو. تعمل
							الشركة بفريق محترف ذو خبرة يركز على تقديم منتجات عالية الجودة
							ومخصصة لتلبية احتياجات العملاء الفريدة، مما يساعدهم على التحول
							الرقمي وتحقيق أهدافهم الاستراتيجية بفعالية.
						</p>
						<button className="btn-style w-fit">
							<Link to={"/about"}>من نحن</Link>
						</button>
					</div>
				</div>
			</section>
			<section className="portfolio py-12">
				<div className="container mx-auto">
					<div className="head flex flex-col gap-3 justify-center md:flex-row items-center md:justify-between">
						<h2 className="text-[38px] text-primary font-bold">
							محفظة مشاريعنا
						</h2>
						<button className="btn-style">
							<Link>المزيد من المشاريع</Link>
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
										<a href={project.link} target="_blank">
											شاهد الآن
										</a>
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
						<h2 className="text-[38px] text-primary font-bold">
							توصيات عملائنا
						</h2>
						<button className="btn-style">
							<Link>المزيد من التوصيات</Link>
						</button>
					</div>
					<div className="grid grid-cols-1 px-6 md:px-0 md:grid-cols-2 gap-6 mt-6">
						<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8">
							<p className="italic text-white font-semibold text-lg leading-loose">
								&quot;فريق EL-GENIUS TECH تجاوز توقعاتنا! خبرتهم والتزامهم ساعد
								شركتنا على النمو بشكل أسرع مما كنا نتصور. ننصح بهم بشدة!&quot;
							</p>
							<p className="font-bold text-primary">– سارة جونسون</p>
						</div>
						<div className="bg-black p-8 rounded-[28px] flex flex-col gap-8">
							<p className="italic text-white font-semibold text-lg leading-loose">
								&quot;فريق EL-GENIUS TECH تجاوز توقعاتنا! خبرتهم والتزامهم ساعد
								شركتنا على النمو بشكل أسرع مما كنا نتصور. ننصح بهم بشدة!&quot;
							</p>
							<p className="font-bold text-primary">– سارة جونسون</p>
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
							<h2 className="text-primary text-5xl font-bold">اتصل بنا</h2>
							<input type="text" placeholder="الاسم" className="input-style" />
							<input
								type="email"
								placeholder="البريد الإلكتروني"
								className="input-style"
							/>
							<textarea placeholder="رسالة" rows={10} className="input-style" />
							<button type="submit" className="btn-style">
								إرسال
							</button>
						</div>
					</form>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default ArHome;
