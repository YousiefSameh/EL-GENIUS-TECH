import Header from "../../components/Ar/Header";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_396ybvi', 'template_m5ymbx4', form.current, {
        publicKey: 'QDiyb79l5vMxBUarG',
      })
      .then(
        () => {
          console.log('تم الإرسال بنجاح!');
        },
        (error) => {
          console.log('فشل الإرسال...', error.text);
        },
      );
  };

	return (
		<div className="md:h-screen h-full bg-dark md:overflow-hidden" style={{direction: "rtl"}}>
			<Header />
			<div className="container mx-auto mt-[90px] py-4 md:py-0 md:mt-8 h-full flex flex-col md:flex-row items-center gap-12">
				<form ref={form} onSubmit={sendEmail} className="w-[90%] md:w-1/2 flex flex-col gap-6">
					<div className="flex flex-col w-full">
						<label
							htmlFor="fullName"
							className="mb-4 text-white font-bold text-3xl z-40"
						>
							<span className="text-primary">أ</span>دخل{" "}
							<span className="text-primary">الإ</span>سم{" "}
							<span className="text-primary">الكامل</span>
						</label>
						<input
							type="text"
							name="fullName"
							id="fullName"
							placeholder="أدخل اسمك الكامل..."
							className="input-style z-40 text-white"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label
							htmlFor="email"
							className="mb-4 text-white font-bold text-3xl z-40"
						>
							<span className="text-primary">أ</span>دخل{" "}
							<span className="text-primary">ب</span>ريدك{" "}
							<span className="text-primary">الإلكتروني</span>
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="أدخل بريدك الإلكتروني..."
							className="input-style z-40 text-white"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label
							htmlFor="message"
							className="mb-4 text-white font-bold text-3xl z-40"
						>
							<span className="text-primary">أ</span>دخل{" "}
							<span className="text-primary">ر</span>سالتك
						</label>
						<textarea
							name="message"
							rows={4}
							id="message"
							placeholder="أدخل رسالتك..."
							className="input-style z-40 text-white"
						/>
					</div>
					<button type="submit" className="btn-style z-40">
						إرسال
					</button>
				</form>
				<div className="w-[90%] md:w-1/2">
					<div>
						<h2 className="text-4xl font-bold text-white z-40 relative">
							<span className="text-primary">الع</span>نوان
						</h2>
						<p className="text-lg text-white mt-2 font-semibold z-40 relative">
							1234 شارع إلم، الجناح 567، سبرينغفيلد، IL 62704، الولايات المتحدة
						</p>
					</div>
					<div className="mt-12">
						<h2 className="text-4xl font-bold text-white z-40 relative">
							<span className="text-primary">الت</span>واصل{" "}
							<span className="text-primary">ع</span>ن{" "}
							<span className="text-primary">ط</span>ريق{" "}
							<span className="text-primary">اله</span>واتف
						</h2>
						<a href="tel:0123456789" className="text-lg text-white mt-2 font-semibold z-40 relative">
							+(20) 123-456-7890
						</a>
						<a href="tel:0123456789" className="text-lg text-white mt-2 font-semibold z-40 relative">
							+(20) 987-654-3210
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
