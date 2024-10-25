import Header from "../components/header"

const Home = () => {
  return (
    <main className="bg-dark h-screen">
      <Header />
      <div className="hero w-full relative h-screen bg-[url('./assets/Hero_BG.png')] bg-no-repeat bg-cover before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-overlay">
        <div className="container mx-auto flex flex-col mt-[40px] md:mt-0 pl-4 md:px-0 justify-center h-screen space-y-3">
          <p className="font-medium text-[20px] text-white z-40">Welcome to EL-GENIUS TECH</p>
          <h1 className="font-bold text-[52px] md:text-[60px] text-primary z-40">Software Development <br /> Solutions</h1>
          <h3 className="font-semibold text-[24px] md:text-[28px] text-white z-40">We Build Innovative Software to Transform Your Ideas</h3>
          <button className="btn-style w-fit z-40 !mt-8">Our Portfolio</button>
        </div>
      </div>
    </main>
  )
}

export default Home