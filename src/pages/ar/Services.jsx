import Header from "../../components/Ar/Header";
import Footer from "../../components/Ar/Footer";


const ArServices = () => {
	return (
		<div className="bg-dark" style={{direction: "rtl"}}>
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col items-center mt-[40px] md:mt-0 md:px-0 justify-center h-screen space-y-3">
					<h1 className="text-7xl text-white font-bold z-40">
						<span className="text-primary">خ</span>دمات
					</h1>
					<p className="text-white text-justify text-lg w-[90%] md:w-1/2 leading-loose z-40">
						نحن نقدم مجموعة واسعة من الخدمات المصممة لتلبية الاحتياجات الفريدة لعملائنا. فريقنا من الخبراء ملتزم بتقديم خدمة ودعم استثنائي لضمان نجاحكم.
					</p>
				</div>
			</section>
			<section className="py-12">
				<h1 className="text-white text-center text-5xl font-bold py-6">
					<span className="text-primary">خ</span>دماتنا
				</h1>
				<div className="container mx-auto grid grid-cols-1 justify-items-center md:grid-cols-3 gap-12">
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service2.svg"
								className="w-[80px] h-[80px]"
								alt="تصميم واجهة المستخدم"
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							تصميم واجهة المستخدم (UI)
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن نصمم واجهات بصرية جذابة وتفاعلية تجسد العلامات التجارية. تشمل عملية تصميم واجهة المستخدم لدينا التصميم البصري، تصميم التفاعل، وتطوير الواجهة الأمامية.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service1.svg"
								className="w-[80px] h-[80px]"
								alt="تصميم تجربة المستخدم"
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							تصميم تجربة المستخدم (UX)
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن نبتكر تجارب تصميمية بديهية ومركزة على المستخدم تلبي أهداف الأعمال واحتياجات المستخدمين. تشمل عملية تصميم تجربة المستخدم لدينا بحث المستخدم، إنشاء الإطارات السلكية، النماذج الأولية، واختبارات قابلية الاستخدام.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service3.svg"
								className="w-[80px] h-[80px]"
								alt="تطوير الواجهة الأمامية"
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							تطوير الواجهة الأمامية
						</h2>
						<p className="text-white text-justify leading-loose">
							نبني تطبيقات واجهة أمامية سريعة وقابلة للتوسع واستجابة باستخدام تقنيات الويب الحديثة مثل HTML، CSS، JavaScript، وReact. تشمل عملية تطوير الواجهة الأمامية لدينا الترميز، الاختبار، والنشر.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service5.svg"
								className="w-[80px] h-[80px]"
								alt="تطوير الواجهة الخلفية"
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							تطوير الواجهة الخلفية
						</h2>
						<p className="text-white text-justify leading-loose">
							نبني أنظمة خلفية آمنة وقابلة للتوسع باستخدام تقنيات مثل Node.js، Python، وقواعد بيانات SQL/NoSQL. تشمل عمليتنا التصميم المعماري، الترميز، والنشر لضمان إدارة بيانات موثوقة وأداء خادم سلس.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service4.svg"
								className="w-[80px] h-[80px]"
								alt="تصميمات وسائل التواصل الاجتماعي"
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							تصميمات وسائل التواصل الاجتماعي
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن نصمم تصاميم جذابة ومتناسقة لوسائل التواصل الاجتماعي تشد انتباه جمهوركم وتنميه. باستخدام أدوات مثل Adobe Photoshop، Illustrator، وCanva، نصمم مرئيات مخصصة لكل منصة، مع التركيز على التناسق، الأسلوب، والأثر.
						</p>
					</div>
					<div className="col flex w-[90%] md:w-full flex-col items-center space-y-4 bg-[#1e1e1e] p-8 rounded-[28px]">
						<div className="icon w-[130px] h-[130px] bg-dark flex items-center justify-center rounded-full">
							<img
								src="/assets/service6.svg"
								className="w-[80px] h-[80px]"
								alt="إدارة وسائل التواصل الاجتماعي"
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							إدارة وسائل التواصل الاجتماعي
						</h2>
						<p className="text-white text-justify leading-loose">
							ندير حضوركم على وسائل التواصل الاجتماعي لبناء التفاعل ودفع النمو. من تخطيط المحتوى والجدولة إلى تفاعل الجمهور والتحليلات، تضمن طريقتنا التواصل المتسق، الاستراتيجي، والمؤثر عبر جميع المنصات.
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default ArServices;
