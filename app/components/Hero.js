function Hero() {
    
  return (
    <>
      <div className="flex flex-col md:flex-row p-4 py-10 justify-between items-center bg-gray-800 text-white transition-colors duration-300">
        <div className="flex-1">
          <h1
            className=
              "text-4xl font-extrabold text-center md:text-left text-blue-600 "
          >
            Ahmed Abdela
          </h1>
          <h2 className="text-gray-600 text-2xl">
            Frontend-Mobile and Web Developer
          </h2>
          <p className="py-4">
            I am a frontend developer student this is my portfolio site.
            Welcome!
          </p>
        </div>

        <div className="flex-shrink-0 mr-28 md:mt-0">
          <img
            src="/PC.jpg"
            alt="Portfolio picture"
            className="h-52 w-52 rounded-full border object-cover"
          />
        </div>
      </div>


    </>
  );
}

export default Hero;
