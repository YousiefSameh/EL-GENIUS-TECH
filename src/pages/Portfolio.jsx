import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 3;
	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const res = await fetch(
					"https://el-genius-tech-back.vercel.app/api/projects"
				);
				if (!res.ok) {
					console.error("API call failed:", await res.text());
					return;
				}

				const contentType = res.headers.get("content-type");
				if (contentType && contentType.includes("application/json")) {
					const result = await res.json();
					setProjects(result.data);
				} else {
					console.error("Unexpected response format:", await res.text());
				}
			} catch (error) {
				console.log("Error: ", error);
			}
		};
		fetchProjects();
	}, []);
	const lastProjectIndex = currentPage * projectsPerPage;
	const firstProjectIndex = lastProjectIndex - projectsPerPage;
	const currentProjects = projects.slice(firstProjectIndex, lastProjectIndex);
	return (
		<div className="bg-dark">
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col items-center mt-[40px] md:mt-0 md:px-0 justify-center h-screen space-y-3">
					<h1 className="text-7xl text-white font-bold z-40">
						<span className="text-primary">P</span>ortfolio
					</h1>
					<p className="text-white text-justify text-lg w-[90%] md:w-1/2 leading-loose z-40">
						Our portfolio highlights a range of projects that demonstrate our
						expertise and commitment to excellence. Each project reflects our
						ability to deliver tailored solutions and impactful results for our
						clients.
					</p>
				</div>
			</section>
			<section className="py-12">
				<h1 className="text-white text-center text-5xl font-bold py-6">
					<span className="text-primary">O</span>ur{" "}
					<span className="text-primary">P</span>ortfolio
				</h1>
				<div className="container mx-auto grid grid-cols-1 px-6 md:px-0 md:grid-cols-3 gap-6 mt-6">
					{currentProjects.map((project) => (
						<div key={project.id} className="bg-black rounded-[28px]">
							<img
								src={project.image.url}
								alt={project.title}
								className="rounded-t-[28px]"
							/>
							<div className="content px-6 py-5">
								<h3 className="text-[18px] text-white">{project.type}</h3>
								<h2 className="text-[28px] text-white font-bold">
									{project.title}
								</h2>
								<button className="btn-style block mt-2">
									<a href={project.link} target="_blank">
										Show Now
									</a>
								</button>
							</div>
						</div>
					))}
				</div>
				<Pagination
					totalProjects={projects.length}
					projectsPerPage={projectsPerPage}
					setCurrentPage={setCurrentPage}
				/>
			</section>
			<Footer />
		</div>
	);
};

export default Portfolio;
