import Header from "../components/Header";

const Contact = () => {
	return (
		<div className="md:h-screen h-full bg-dark md:overflow-hidden">
			<Header />
			<div className="container mx-auto mt-[90px] py-4 md:py-0 md:mt-8 h-full flex flex-col md:flex-row items-center gap-12">
        <form action="" className="w-[90%] md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="fullName" className="mb-4 text-white font-bold text-3xl z-40"><span className="text-primary">E</span>nter <span className="text-primary">Y</span>our <span className="text-primary">F</span>ull Name</label>
            <input type="text" name="fullName" id="fullName" placeholder="Enter Your Full Name..." className="input-style z-40"/>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-4 text-white font-bold text-3xl z-40"><span className="text-primary">E</span>nter <span className="text-primary">Y</span>our <span className="text-primary">E</span>mail</label>
            <input type="email" name="email" id="email" placeholder="Enter Your Email..." className="input-style z-40"/>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="mb-4 text-white font-bold text-3xl z-40"><span className="text-primary">E</span>nter <span className="text-primary">Y</span>our <span className="text-primary">M</span>essage</label>
            <textarea name="message" rows={4} id="message" placeholder="Enter Your Message..." className="input-style z-40"/>
          </div>
          <button type="submit" className="btn-style z-40">Send</button>
        </form>
        <div className="w-[90%] md:w-1/2">
          <div>
            <h2 className="text-4xl font-bold text-white z-40 relative"><span className="text-primary">A</span>ddress</h2>
            <p className="text-lg text-white mt-2 font-semibold z-40 relative">1234 Elm Street, Suite 567 Springfield, IL 62704, USA</p>
          </div>
          <div className="mt-12">
            <h2 className="text-4xl font-bold text-white z-40 relative"><span className="text-primary">C</span>ontact <span className="text-primary">O</span>n <span className="text-primary">P</span>hones</h2>
            <p className="text-lg text-white mt-2 font-semibold z-40 relative">+(20) 123-456-7890</p>
            <p className="text-lg text-white mt-2 font-semibold z-40 relative">+(20) 987-654-3210</p>
          </div>
        </div>
      </div>
		</div>
	);
};

export default Contact;