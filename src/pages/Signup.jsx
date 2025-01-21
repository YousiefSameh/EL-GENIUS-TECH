import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		passwordConfirm: "",
	});

	const navigate = useNavigate(); // Initialize navigate hook

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		if (formData.password !== formData.passwordConfirm) {
			toast.error("Passwords do not match!");
			return;
		}

		const requestData = {
			username: formData.username,
			email: formData.email,
			password: formData.password,
			passwordConfirm: formData.passwordConfirm,
		};

		console.log("Data being sent:", requestData);

		try {
			const response = await fetch(
				"https://el-genius-tech-back.vercel.app/api/auth/signup",
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
				console.error("Error from server:", errorData);

				if (errorData.errors && errorData.errors.length > 0) {
					errorData.errors.forEach((error) => {
						toast.error(`${error.msg}`);
					});
				} else {
					toast.error("Registration failed: Unknown error occurred.");
				}
			} else {
				const result = await response.json();
				localStorage.setItem("username", result.data.username);
				toast.success("Registration successful!");

				// Navigate to home page after successful registration
				navigate("/");
			}
		} catch (error) {
			console.error("Error during registration:", error);
			toast.error("An error occurred while registering.");
		}
	};

	return (
		<div className="register-container h-screen bg-[#1e1e1e] flex flex-col md:flex-row">
			<form
				onSubmit={handleRegister}
				className="register-form w-full md:w-1/2 py-12 flex flex-col items-center justify-center gap-5"
			>
				<h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-5">
					<span className="text-primary">C</span>reate{" "}
					<span className="text-primary">A</span>ccount
				</h2>
				<input
					type="text"
					id="username"
					name="username"
					value={formData.username}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg"
					onChange={handleInputChange}
					placeholder="Enter Your Username..."
					required
				/>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg"
					placeholder="Enter Your Email..."
					onChange={handleInputChange}
					required
				/>
				<input
					type="password"
					id="password"
					name="password"
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg"
					placeholder="Enter Your Password..."
					value={formData.password}
					onChange={handleInputChange}
					required
				/>
				<input
					type="password"
					id="passwordConfirm"
					name="passwordConfirm"
					className="bg-[#2E2E2E] px-6 py-4 rounded-xl w-[80%] md:w-[90%] placeholder:text-white text-white font-medium placeholder:opacity-85 text-xl outline-none shadow-lg"
					placeholder="Enter Your Confirm Password..."
					value={formData.passwordConfirm}
					onChange={handleInputChange}
					required
				/>
				<button type="submit" className="btn-style w-[80%] md:w-[90%]">
					Register
				</button>
				<div className="flex items-center gap-2">
					<p className="text-neutral-500 text-xl font-medium">
						Do you have an account?
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
					alt="Registration"
				/>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Register;
