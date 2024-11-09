import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!formData.email || !formData.password) {
			toast.error("يرجى ملء البريد الإلكتروني وكلمة المرور.");
			return;
		}

		const requestData = {
			email: formData.email,
			password: formData.password,
		};

		try {
			const response = await fetch(
				"https://straight-marleen-yousiefsameh-d326cffb.koyeb.app/api/auth/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(requestData),
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				toast.error(`فشل تسجيل الدخول: ${errorData.message}`);
			} else {
				const result = await response.json();
				localStorage.setItem("username", result.data.username);
				toast.success("تم تسجيل الدخول بنجاح!");
				navigate("/");
			}
		} catch (error) {
			console.log("خطأ: ", error);
			toast.error("حدث خطأ أثناء تسجيل الدخول.");
		}
	};

	return (
		<div className="login-container h-screen bg-[#1e1e1e] flex flex-col md:flex-row">
			<form
				onSubmit={handleLogin}
				className="login-form w-full md:w-1/2 py-12 flex flex-col items-center justify-center gap-5"
			>
				<h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-5">
					<span className="text-primary">أهلاً</span>{" "}
					<span className="text-primary">بعودتك</span>
				</h2>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg"
					onChange={handleInputChange}
					placeholder="أدخل بريدك الإلكتروني..."
					required
				/>
				<input
					type="password"
					id="password"
					name="password"
					value={formData.password}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg"
					placeholder="أدخل كلمة المرور..."
					onChange={handleInputChange}
					required
				/>
				<button type="submit" className="btn-style w-[80%] md:w-[90%]">
					تسجيل الدخول
				</button>
				<div className="flex items-center gap-2">
					<p className="text-neutral-500 text-xl font-medium">
						هل نسيت كلمة المرور؟{" "}
						<Link className="text-primary" to={"/ar/forget-password"}>
							نسيت كلمة المرور
						</Link>
					</p>
					<Link
						to="/ar/register"
						className="text-white text-lg font-semibold transition-all hover:text-primary flex items-center gap-2"
					>
						إنشاء حساب
					</Link>
					<p className="text-neutral-500 text-xl font-medium">ليس لديك حساب؟</p>
				</div>
			</form>
			<div className="hidden md:flex md:w-1/2">
				<img
					src="/assets/Valid_Img.webp"
					className="h-full object-cover"
					alt="تسجيل الدخول"
				/>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Login;
