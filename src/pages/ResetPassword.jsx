import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
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
			toast.error("Please fill in all fields.");
			return;
		}

		if (password !== confirmPassword) {
			toast.error("Passwords do not match.");
			return;
		}

		const requestData = {
			email: email,
			newPassword: password,
		};

		try {
			const response = await fetch(
				"https://straight-marleen-yousiefsameh-d326cffb.koyeb.app/api/auth/resetPassword",
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
				toast.error(`Reset password failed: ${errorData.message}`);
			} else {
				const result = await response.json();
				toast.success(
					result.message || "Password reset successfully. Please log in."
				);
				navigate("/login"); // Redirect to login page after success
			}
		} catch (error) {
			console.log("error: ", error);
			toast.error("An error occurred while resetting the password.");
		}
	};

	return (
		<div className="reset-password-container h-screen bg-[#1e1e1e] flex flex-col md:flex-row">
			<form
				onSubmit={handleResetPassword}
				className="reset-password-form w-full md:w-1/2 py-12 flex flex-col items-center justify-center gap-5"
			>
				<h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-5">
					<span className="text-primary">R</span>eset{" "}
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
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg mt-4"
					onChange={handleInputChange}
					placeholder="Enter New Password..."
					required
				/>
				<input
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					value={confirmPassword}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg mt-4"
					onChange={handleInputChange}
					placeholder="Confirm New Password..."
					required
				/>
				<button type="submit" className="btn-style w-[80%] md:w-[90%]">
					Reset Password
				</button>
			</form>
			<div className="hidden md:flex md:w-1/2">
				<img
					src="/assets/Valid_Img.webp"
					className="h-full object-cover"
					alt="Reset Password"
				/>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ResetPassword;
