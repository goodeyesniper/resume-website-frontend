import { useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
		{/* <div className="flex items-center justify-center content-between h-auto sm:h-[100vh]">
			<div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full overflow-hidden">
				<div className="order-2 sm:order-1 bg-black py-[5vh] flex items-center justify-center sm:justify-end px-5 sm:px-15">
					<div className="flex justify-center items-center fade-in-right">
						<img src="/fam_pic.jpg" alt="" className="rounded-full gradient-shadow border-2 border-[#f2f2f2] w-[400px]" />
					</div>
				</div>
				<div className="order-1 sm:order-2 py-[5vh] pl-5 sm:pl-10">
					<div className="flex flex-col justify-center h-full">
						<div className="fade-in-up">
							<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold pb-5">Hello</h1>
							<h3 className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-semibold pb-5">I'm Philip Louis Nisperos</h3>
							<h4 className="text-xs sm:text-sm font-semibold pb-5">Full Stack Web Developer</h4>
							<p className="pt-10 whitespace-nowrap">
								<Button className="custom-button">About Me</Button>
							</p>
						</div>
					</div>

				</div>

			</div>
		</div> */}

		<div className="flex items-center justify-center content-between">
			<div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
				<div className="order-2 sm:order-1 bg-[#0f172b] py-[5vh] w-full sm:w-[80%] overflow-hidden"></div>
				<div className="order-1 sm:order-2 py-[5vh] px-0 sm:px-10 h-auto sm:h-[100vh] flex justify-center sm:justify-start">
					<div className="ml-0 sm:-ml-[320px] md:-ml-[420px] lg:-ml-[520px] flex flex-col sm:flex-row items-center justify-center overflow-hidden">
						<div className="fade-in-right bg-[#0f172b] shadow-2xl shadow-gray-600 mx-2 flex flex-col items-center justify-center border border-black">
							<div className="flex flex-col items-center justify-center p-10">
								<img src="/fam_pic.jpg" alt="" className="rounded-full gradient-shadow border-2 border-[#f2f2f2] w-[200px]" />
								<h3 className="py-5 text-3xl font-semibold text-white text-center">Philip Louis Nisperos</h3>
								<div className="border border-white w-[50px] my-6"></div>
								<h4 className="pt-5 text-sm sm:text-md font-semibold text-white text-center">Full Stack Web Developer</h4>
								<h4 className="pt-5 text-sm sm:text-md font-semibold text-white text-center">(Mechanical Engineer)</h4>

							</div>
							<div className="bg-white p-4 flex justify-center items-center gap-x-5 w-full">
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
								<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
								<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
								</svg>
							</div>
						</div>
						<div className="flex flex-col justify-center w-auto sm:w-[500px] mt-10 sm:mt-0 py-10 px-5 sm:px-10">
							<div className="fade-in-up">
								<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold pb-5">Hello</h1>
								<h3 className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-semibold pb-5">Here's who I am & what I do</h3>
								<p className="py-10 flex gap-x-4 whitespace-nowrap">
									<Button className="custom-button" component={Link} to="/about">About Me</Button>
									<Button className="custom-button" component={Link} to="/portfolio">Portfolio</Button>
								</p>
								{/* <p className="text-lg py-5">I make beautiful websites.</p> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		{/* Background 1 */}
		{/* <div className="background1 flex items-center justify-center content-between h-auto sm:h-[100vh] py-[5vh]">
			<div className="container max-w-6xl fade-in-up">
				<div className="grid grid-cols-1 sm:grid-cols-2 px-4 py-10 gap-x-4 gap-y-10 sm:gap-y-0">
					<div className="px-5 flex justify-center items-center">
						<img src="/fam_pic.jpg" alt="" className="rounded-full gradient-shadow border-4 border-transparent w-[472px]" />
					</div>
					<div className="pl-5 flex flex-col justify-center h-full">
						<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold pb-5">Hello</h1>
						<h3 className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-semibold pb-5">I'm Philip Louis Nisperos</h3>
						<h4 className="text-xs sm:text-sm font-semibold pb-5">Full Stack Web Developer</h4>
						<p className="pt-10">
							<Button className="custom-button">About Me</Button>
						</p>
					</div>
				</div>
			</div>
		</div> */}
{/* 
		<div className="relative">
			<div className="background2 flex items-center justify-center">
				<div className="text-white text-center">
					<h1 className="text-4xl font-bold">Contents for Section 2</h1>
				</div>
			</div>

			<div className="absolute -mt-[200px] left-0 w-full flex justify-center z-20 px-5">
				<div className="max-w-4xl w-full h-[400px] bg-amber-50 flex flex-col items-center justify-center shadow-lg">
					<div className="logo-container1 flex items-center justify-center">
						<div className="semi-circle1"></div>
						<div className="letter-p1">P</div>
					</div>
					<h1 className="text-2xl font-bold">TEXT HERE</h1>
				</div>
			</div>
		</div>

		<div className="background3 flex items-center justify-center">
			<div className="text-white text-center">
				<h1 className="text-4xl font-bold">Contents for Section 3</h1>
			</div>
		</div>

		<div className="background4 flex items-center justify-center">
			<div className="text-white text-center">
				<h1 className="text-4xl font-bold">Contents for Section 4</h1>
			</div>
		</div>
			*/}
    </>
  );
};

export default Home
