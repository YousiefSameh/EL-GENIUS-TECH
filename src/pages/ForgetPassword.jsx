import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");

	const handleInputChange = (e) => {
		setEmail(e.target.value);
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();

		// Validate email field
		if (!email) {
			toast.error("Please enter your email.");
			return;
		}

		const requestData = {
			email: email,
		};

		try {
			const response = await fetch(
				"https://straight-marleen-yousiefsameh-d326cffb.koyeb.app/api/auth/forgotPassword",
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
				console.log("Error response:", errorData);
				toast.error(`Password reset failed: ${errorData.message}`);
			} else {
				const result = await response.json();
				toast.success(
					result.message || "Check your email for password reset instructions."
				);
				navigate("/verify-reset-code");
			}
		} catch (error) {
			console.log("error: ", error);
			toast.error("An error occurred while requesting password reset.");
		}
	};

	return (
		<div className="forget-password-container h-screen bg-[#1e1e1e] flex flex-col md:flex-row">
			<form
				onSubmit={handleResetPassword}
				className="forget-password-form w-full md:w-1/2 py-12 flex flex-col items-center justify-center gap-5"
			>
				<h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-5">
					<span className="text-primary">F</span>orget{" "}
					<span className="text-primary">P</span>assword
				</h2>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg"
					onChange={handleInputChange}
					placeholder="Enter Your Email..."
					required
				/>
				<button type="submit" className="btn-style w-[80%] md:w-[90%]">
					Send
				</button>
				<div className="flex items-center gap-2">
					<p className="text-neutral-500 text-xl font-medium">
						Remembered your password?
					</p>
					<Link
						to="/login"
						className="text-white text-lg font-semibold transition-all hover:text-primary flex items-center gap-2"
					>
						Login
					</Link>
				</div>
			</form>
			<div className="hidden md:flex md:w-1/2">
				<img
					src="/assets/Valid_Img.webp"
					className="h-full object-cover"
					alt="Forget Password"
				/>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ForgetPassword;
