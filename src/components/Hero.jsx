import '../css/Hero.css'

const Hero = ({ title, subtitle }) => {
  return (
    <div className="container-fluid h-[14vh] sm:h-[18vh] md:h-[20vh] bg-slate-950 overflow-hidden flex items-center justify-center">
      <div className="w-full flex items-center justify-start relative">
        <div className="flex justify-start items-center whitespace-nowrap">
          <h1 className="text-slate-800 text-[140px] sm:text-[180px] md:text-[200px] lg:text-[270px] font-bold p-0 m-0 leading-none">
            {title}
          </h1>
        </div>
        <div className="absolute top-1/2 left-1/2 sm:left-1/3 md:left-1/4 lg:left-1/5 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          <h3 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold text-outline-sm subtitle-effect">
            {subtitle}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;