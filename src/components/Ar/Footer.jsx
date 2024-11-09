import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-black rounded-t-[28px] p-4 md:p-12" style={{direction: "rtl"}}>
			<div className="container mx-auto grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-5">
				<div className="col-span-2">
					<img src="/assets/Logo.webp" className="w-[150px] h-[150px]" alt="" />
					<h4 className="text-white font-bold text-2xl md:-mt-4 md:ml-7">
						حلول تطوير البرمجيات
					</h4>
				</div>
				<div className="col">
					<h3 className="text-primary font-bold text-2xl pb-4">
						روابط سريعة
					</h3>
					<ul className="space-y-4">
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/ar"}
							>
								الرئيسية
							</Link>
						</li>
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/ar/about"}
							>
								من نحن
							</Link>
						</li>
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/ar/services"}
							>
								خدماتنا
							</Link>
						</li>
					</ul>
				</div>
				<div className="col">
					<h3 className="text-primary font-bold text-2xl pb-4">
						روابط سريعة
					</h3>
					<ul className="space-y-4">
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/ar/portfolio"}
							>
								أعمالنا
							</Link>
						</li>
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/ar/testimonials"}
							>
								آراء العملاء
							</Link>
						</li>
						<li>
							<Link
								className="text-white font-bold transition-all hover:text-primary"
								to={"/ar/contact"}
							>
								تواصل معنا
							</Link>
						</li>
					</ul>
				</div>
				<div className="col">
					<h3 className="text-primary font-bold text-2xl pb-4">
						روابط سريعة
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
					&copy; حقوق الطبع والنشر{" "}
					<span className="text-primary">يوسف سامح</span> 2024. جميع الحقوق محفوظة.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
