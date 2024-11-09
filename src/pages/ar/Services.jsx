import Header from "../../components/Ar/Header";
import Footer from "../../components/Ar/Footer";

const ArServices = () => {
	return (
		<div className="bg-dark">
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col items-center mt-[40px] md:mt-0 md:px-0 justify-center h-screen space-y-3">
					<h1 className="text-7xl text-white font-bold z-40">
						<span className="text-primary">خ</span>دماتنا
					</h1>
					<p className="text-white text-justify text-lg w-[90%] md:w-1/2 leading-loose z-40">
						نحن نقدم مجموعة واسعة من الخدمات المصممة لتلبية الاحتياجات الفريدة
						لعملائنا. فريقنا من الخبراء مكرس لتقديم خدمة استثنائية ودعم لضمان نجاحك.
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
								alt=""
							/>
						</div>
						<h2 className="text-white font-bold text-[22px] text-center">
							تصميم واجهة المستخدم وتجربة المستخدم (UI/UX)
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن نصمم تجارب مستخدم بديهية وجذابة تتماشى مع احتياجات المستخدم
							وأهداف الأعمال. يشمل عملية تصميم واجهة المستخدم وتجربة المستخدم
							البحث عن المستخدم، وتصميم النماذج الأولية، واختبار قابلية الاستخدام.
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
							تطبيقات الجوال
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن نطور تطبيقات جوال عالية الأداء باستخدام Dart و Flutter لإنشاء حلول
							عبر المنصات جميلة وسريعة وقابلة للتوسع. تشمل عملية التطوير لدينا تصميم
							الواجهة، والتطوير، والاختبار، والتحسين لكل من منصات iOS و Android.
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
							تطوير الواجهة الأمامية
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن نبني تطبيقات واجهة أمامية سريعة وقابلة للتوسع باستخدام تقنيات
							الويب الحديثة مثل HTML و CSS و JavaScript و React. تشمل عملية تطوير
							الواجهة الأمامية لدينا البرمجة، والاختبار، والنشر.
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
							تطوير الواجهة الخلفية
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن نبني أنظمة واجهة خلفية آمنة وقابلة للتوسع باستخدام تقنيات
							مثل Node.js وقواعد البيانات SQL/NoSQL. تشمل عمليتنا
							التصميم المعماري، والبرمجة، والنشر لضمان معالجة البيانات بشكل موثوق
							وأداء خوادم سلس.
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
							تصميمات الوسائط الاجتماعية
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن نصمم تصميمات اجتماعية جذابة ومتناسقة مع علامتك التجارية
							لتعزيز وتوسيع جمهورك. باستخدام أدوات مثل Adobe Photoshop و
							Illustrator و Canva، نصمم الرسوم التوضيحية المخصصة لكل منصة مع التركيز
							على التناسق، والأسلوب، والأثر.
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
							إدارة وسائل التواصل الاجتماعي
						</h2>
						<p className="text-white text-justify leading-loose">
							نحن ندير وجودك على وسائل التواصل الاجتماعي لبناء التفاعل ودفع النمو.
							من تخطيط المحتوى وجدولة النشر إلى التفاعل مع الجمهور وتحليل البيانات،
							ضماننا هو التواصل الاستراتيجي والمتسق والمؤثر عبر جميع المنصات.
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default ArServices;
