import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const VerifyCode = () => {
	const navigate = useNavigate();
	const [code, setCode] = useState("");

	const handleInputChange = (e) => {
		setCode(e.target.value);
	};

	const handleVerifyCode = async (e) => {
		e.preventDefault();

		// Validate code field
		if (!code) {
			toast.error("Please enter the verification code.");
			return;
		}

		const requestData = {
			resetCode: code,
		};

		try {
			const response = await fetch(
				"https://straight-marleen-yousiefsameh-d326cffb.koyeb.app/api/auth/verifyResetCode",
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
				toast.error(`Code verification failed: ${errorData.message}`);
			} else {
				const result = await response.json();
				toast.success(result.message || "Code verified successfully.");
				navigate("/reset-password"); // Redirect to reset password page after successful verification
			}
		} catch (error) {
			console.log("error: ", error);
			toast.error("An error occurred while verifying the code.");
		}
	};

	return (
		<div className="verify-code-container h-screen bg-[#1e1e1e] flex flex-col md:flex-row">
			<form
				onSubmit={handleVerifyCode}
				className="verify-code-form w-full md:w-1/2 py-12 flex flex-col items-center justify-center gap-5"
			>
				<h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-5">
					<span className="text-primary">V</span>erify{" "}
					<span className="text-primary">C</span>ode
				</h2>
				<input
					type="text"
					id="code"
					name="code"
					value={code}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg"
					onChange={handleInputChange}
					placeholder="Enter Verification Code..."
					required
				/>
				<button type="submit" className="btn-style w-[80%] md:w-[90%]">
					Verify Code
				</button>
				<div className="flex items-center gap-2">
					<p className="text-neutral-500 text-xl font-medium">
						Didn&apos;t receive the code?
					</p>
					<Link
						to="/forget-password"
						className="text-white text-lg font-semibold transition-all hover:text-primary flex items-center gap-2"
					>
						Submit
					</Link>
				</div>
			</form>
			<div className="hidden md:flex md:w-1/2">
				<img
					src="/assets/Valid_Img.webp"
					className="h-full object-cover"
					alt="Verify Code"
				/>
			</div>
			<ToastContainer />
		</div>
	);
};

export default VerifyCode;
