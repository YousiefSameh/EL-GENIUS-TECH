import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ArResetPassword = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === "email") setEmail(value);
		if (name === "password") setPassword(value);
		if (name === "confirmPassword") setConfirmPassword(value);
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();

		// Validate input fields
		if (!email || !password || !confirmPassword) {
			toast.error("يرجى ملء جميع الحقول.");
			return;
		}

		if (password !== confirmPassword) {
			toast.error("كلمات المرور غير متطابقة.");
			return;
		}

		const requestData = {
			email: email,
			newPassword: password,
		};

		try {
			const response = await fetch(
				"https://el-genius-tech-back.vercel.app/api/auth/resetPassword",
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(requestData),
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				console.log("Error response:", errorData);
				toast.error(`فشل إعادة تعيين كلمة المرور: ${errorData.message}`);
			} else {
				const result = await response.json();
				toast.success(
					result.message ||
						"تمت إعادة تعيين كلمة المرور بنجاح. يرجى تسجيل الدخول."
				);
				navigate("/ar/login"); // Redirect to login page after success
			}
		} catch (error) {
			console.log("error: ", error);
			toast.error("حدث خطأ أثناء إعادة تعيين كلمة المرور.");
		}
	};

	return (
		<div className="reset-password-container h-screen bg-[#1e1e1e] flex flex-col md:flex-row">
			<form
				onSubmit={handleResetPassword}
				className="reset-password-form w-full md:w-1/2 py-12 flex flex-col items-center justify-center gap-5"
			>
				<h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-5">
					<span className="text-primary">إ</span>عادة{" "}
					<span className="text-primary">ت</span>عيين كلمة المرور
				</h2>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg"
					onChange={handleInputChange}
					placeholder="أدخل بريدك الإلكتروني..."
					required
				/>
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg mt-4"
					onChange={handleInputChange}
					placeholder="أدخل كلمة المرور الجديدة..."
					required
				/>
				<input
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					value={confirmPassword}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg mt-4"
					onChange={handleInputChange}
					placeholder="تأكيد كلمة المرور الجديدة..."
					required
				/>
				<button type="submit" className="btn-style w-[80%] md:w-[90%]">
					إعادة تعيين كلمة المرور
				</button>
			</form>
			<div className="hidden md:flex md:w-1/2">
				<img
					src="/assets/Valid_Img.webp"
					className="h-full object-cover"
					alt="إعادة تعيين كلمة المرور"
				/>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ArResetPassword;
