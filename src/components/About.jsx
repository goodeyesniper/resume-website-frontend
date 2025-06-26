import Hero from "../components/Hero";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

const slides = [
  {
    id: 1,
    text: (
      <div>
        <h1 className="text-2xl font-bold mb-2">Hello, I'm</h1>
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-2">Philip Louis Nisperos</h1>
        <p className="text-gray-700 mb-2 pt-5">
          For 12 years, I worked as a Mechanical Engineer, leading projects
          that required me to be on-site for at least 6 months to a year at a
          time. As a Project Engineer, I thrived in solving complex challenges,
          ensuring efficiency, and driving success in every project I handled.
        </p>
				<p className="pt-5">
					While I valued the technical expertise and hands-on work, my
					priorities shifted after getting married and welcoming my son. I
					realized the importance of being present for my family, which led
					me to re-evaluate my career path.
				</p>
      </div>
    ),
    image: "/gcm_pic2.jpg",
  },
  {
    id: 2,
    text: (
			<>
				<p className="">
					I reached a point in my life where I realized that I needed a
					career that wouldn&apos;t require me to be away from home for
					extended periods of time. Being present for the important
					milestones in my son&apos;s life—his first steps, his first
					words, birthdays, and all the little moments in between—became
					more important to me than anything else.
				</p>
				<p className="pt-5">
					I didn&apos;t want to
					miss those precious memories because of work commitments that
					kept me away for months or even a year at a time. I needed a
					role that allowed me to be there—not just as a provider, but
					as an active, present father.
				</p>
			</>
		),
    image: "/My_baby.jpg",
  },
  {
    id: 3,
    text: (
			<>
				<h4 className="">
					<span className="mb-4 inline-block">
						In January, I took a leap and enrolled in a full stack web
						development boot camp and haven't looked back since.
					</span>
					<br />
					<span className="inline-block">
						These days I am fully committed to this new exciting
						journey, diving into code and building dynamic digital
						experiences. I'm combining my mechanical engineering
						discipline with a creative drive to carve out a future in
						tech—one that keeps me closer to home while still pushing me
						to build, design and solve complex tasks.
					</span>
				</h4>
			</>
		),
    image: "/fullstack_certificate.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
};

const staggeredFadeIn = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // delay grows by index
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const About = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const current = slides[activeIndex];
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setReady(true); // Triggers initial load animation after 3.5s
		}, 3500);
		return () => clearTimeout(timer);
	}, []);

	
  return (
    <>
      <Hero title="About" subtitle="About Me" />

			<div className="w-full max-w-7xl mx-auto my-10 p-4 space-y-10">
				{/* Top Section */}
				<div className="flex flex-col md:flex-row justify-between gap-4 items-start min-h-[400px] md:min-h-[500px] mt-0 sm:mt-10">
					{/* Text Content */}
					<div className="md:w-1/3 text-left pr-0 md:pr-5">
						<AnimatePresence mode="wait">
							{ready && (
								<motion.div
									key={`text-${current.id}`}
									variants={fadeInFromLeft}
									initial="hidden"
									animate="visible"
									exit="exit"
								>
									{current.text}
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					{/* Image Content */}
					<div className="md:w-1/2 w-full">
						<AnimatePresence mode="wait">
							{ready && (
								<motion.div
									key={`image-${current.id}`}
									className="h-full md:h-[500px] w-full overflow-hidden flex items-start justify-center"
									variants={fadeIn}
									initial="hidden"
									animate="visible"
									exit="exit"
								>
									<img
										src={current.image}
										alt={`Slide ${current.id}`}
										className="object-cover"
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				{/* Thumbnails */}
				{ready && (
					<motion.div
						className="flex justify-center gap-4 flex-wrap border-t border-b border-gray-300"
						variants={fadeIn}
						initial="hidden"
						animate="visible"
					>
						{slides.map((slide, index) => (
							<motion.div
								key={slide.id}
								className={`h-24 w-24 overflow-hidden cursor-pointer border-2 ${
									index === activeIndex ? "border-black" : "border-transparent"
								}`}
								custom={index}
								variants={staggeredFadeIn}
								initial="hidden"
								animate="visible"
								onClick={() => setActiveIndex(index)}
							>
								<img
									src={slide.image}
									alt={`Thumb ${index + 1}`}
									className="h-full w-auto object-cover"
								/>
							</motion.div>
						))}
					</motion.div>
				)}

				<div className="flex justify-center py-5 whitespace-nowrap">
					<Button className="custom-button-black">Download Resume</Button>
				</div>
			</div>
    </>
  );
};

export default About;
