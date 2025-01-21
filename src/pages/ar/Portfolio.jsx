import { useEffect, useState } from "react";
import Header from "../../components/Ar/Header";
import Footer from "../../components/Ar/Footer";
import Pagination from "../../components/Pagination";

const ArPortfolio = () => {
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
		<div className="bg-dark" style={{ direction: "rtl" }}>
			<Header />
			<section className="hero w-full relative h-screen bg-[url('/assets/Hero_BG.webp')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
				<div className="container mx-auto flex flex-col items-center mt-[40px] md:mt-0 md:px-0 justify-center h-screen space-y-3">
					<h1 className="text-7xl text-white font-bold z-40">
						<span className="text-primary">م</span>عرض الأعمال
					</h1>
					<p className="text-white text-justify text-lg w-[90%] md:w-1/2 leading-loose z-40">
						يعرض معرض أعمالنا مجموعة متنوعة من المشاريع التي تعكس خبرتنا
						والتزامنا بالتميز. كل مشروع يعكس قدرتنا على تقديم حلول مخصصة ونتائج
						فعالة لعملائنا.
					</p>
				</div>
			</section>
			<section className="py-12">
				<h1 className="text-white text-center text-5xl font-bold py-6">
					<span className="text-primary">م</span>عرض{" "}
					<span className="text-primary">أ</span>عمالنا
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
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										شاهد الآن
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

export default ArPortfolio;
