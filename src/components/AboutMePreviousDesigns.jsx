import Hero from "../components/Hero";
import { Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const slides = [
  {
    id: 1,
    text: "Project 1: Motueka Magic",
    image: "/gcm_pic2.jpg",
  },
  {
    id: 2,
    text: "Project 2: Kiwi Cleaners",
    image: "/My_baby.jpg",
  },
  {
    id: 3,
    text: "Project 3: Movie Browser",
    image: "/image3.jpg",
  },
  {
    id: 4,
    text: "Project 3: Movie Browser",
    image: "/image4.jpg",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const handleClick = async (index) => {
    // Fade out text and image
    await Promise.all([
      textControls.start("hidden"),
      imageControls.start("hidden"),
    ]);

    // Change slide
    swiperRef.current.slideTo(index);
    setCurrentIndex(index);

    // Animate new content in
    textControls.start("visible");
    imageControls.start("visible");
  };

  useEffect(() => {
    textControls.start("visible");
    imageControls.start("visible");
  }, []); // initial mount

  // const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  // const [hasAnimated, setHasAnimated] = useState(false);

  // const [textAnimationComplete1, setTextAnimationComplete1] = useState(false);
  // const [hasAnimated1, setHasAnimated1] = useState(false);

  // useEffect(() => {
  //   if (hasAnimated) {
  //     setTextAnimationComplete(true);
  //   }
  // }, [hasAnimated]);

  // useEffect(() => {
  //   if (hasAnimated1) {
  //     setTextAnimationComplete1(true);
  //   }
  // }, [hasAnimated1]);

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  // const fadeInFromRight = {
  //   hidden: { opacity: 0, x: 100 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 1 },
  //   },
  // };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  return (
    <>
      <Hero title="About" subtitle="About Me" />

      <div className="w-full max-w-6xl mx-auto px-4 py-10 space-y-8">
        {/* Top: Text + Image */}
        <div className="flex flex-col lg:flex-row gap-6">
          <motion.div
            className="lg:w-1/2 w-full flex items-center justify-center text-center lg:text-left"
            variants={fadeInFromLeft}
            initial="hidden"
            animate={textControls}
          >
            <h2 className="text-2xl sm:text-3xl font-bold">{slides[currentIndex].text}</h2>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full"
            variants={fadeIn}
            initial="hidden"
            animate={imageControls}
          >
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              allowTouchMove={false}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.text}
                      className="h-full w-auto object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`h-24 w-24 overflow-hidden cursor-pointer border-2 ${
                index === currentIndex ? "border-black" : "border-transparent"
              }`}
              onClick={() => handleClick(index)}
            >
              <img
                src={slide.image}
                alt={`Thumb ${index + 1}`}
                className="h-full w-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-gray-100 mx-2 py-10">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-2 sm:p-6 overflow-hidden">

          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="md:w-2/3 md:p-5 md:mr-4">
              <h1 className="text-3xl font-bold mb-2">Hello, I'm</h1>
              <h1 className="text-4xl font-bold mb-2">Philip Louis Nisperos</h1>
              <p className="text-gray-700 text-lg mb-2 pt-5">
                For 12 years, I worked as a Mechanical Engineer, leading
                projects that required me to be on-site for at least 6 months to
                a year at a time. As a Project Engineer, I thrived in solving
                complex challenges, ensuring efficiency, and driving success in
                every project I handled.
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <img src="/gcm_pic2.jpg" alt="Profile" className="rounded-lg" />
            </div>
          </div>

          <div className="mt-5 text-gray-700 text-lg">
            <p className="md:p-5">
              While I valued the technical expertise and hands-on work, my
              priorities shifted after getting married and welcoming my son. I
              realized the importance of being present for my family, which led
              me to re-evaluate my career path.
            </p>
            <div className="flex flex-col md:flex-row items-center mt-4 gap-5">
              <div className="md:w-1/3">
                <img src="/My_baby.jpg" alt="Work" className="rounded-lg" />
              </div>
              <div className="md:w-2/3 md:ml-4">
                <p className="md:p-5">
                  I reached a point in my life where I realized that I needed a
                  career that wouldn&apos;t require me to be away from home for
                  extended periods of time. Being present for the important
                  milestones in my son&apos;s life—his first steps, his first
                  words, birthdays, and all the little moments in between—became
                  more important to me than anything else. I didn&apos;t want to
                  miss those precious memories because of work commitments that
                  kept me away for months or even a year at a time. I needed a
                  role that allowed me to be there—not just as a provider, but
                  as an active, present father.
                </p>
              </div>
            </div>
            <p className="mt-4 md:p-5">
              That's when I decided to pursue my long-standing passion—
              <span className="font-bold">programming and web development</span>
              .
            </p>
          </div>

          <div className="mt-4 flex flex-col md:flex-row items-center text-lg text-gray-700 gap-5">
            <div className="md:w-2/3 md:p-5 md:mr-4">
              <p className="mb-2">
                In January, I took a leap and enrolled in a full stack web
                development boot camp and haven't looked back since.
              </p>
              <p className="">
                These days I am fully committed to this new exciting journey,
                diving into code and building dynamic digital experiences. I'm
                combining my mechanical engineering discipline with a creative
                drive to carve out a future in tech—one that keeps me closer to
                home while still pushing me to build, design and solve complex
                tasks.
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <img
                src="/fullstack_certificate.jpg"
                alt="Hobby"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid flex justify-center">
        <div className="container max-w-6xl pt-10 mt-10">
          <div className="grid grid-cols-3 gap-y-0 md:gap-y-10 pb-[10vh] mx-2">
            <div className="relative col-span-3 md:col-span-1 mb-10 flex items-center order-2 md:order-1 h-full">
              <motion.div
                className="relative md:absolute md:mx-[10px] lg:mx-[50px] bg-[#fff] w-full md:w-[450px] lg:w-[500px] border px-5 shadow-lg shadow-black z-10 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInFromLeft}
                onAnimationComplete={() => setHasAnimated(true)}
              >
                <div className="pt-2 pb-5 text-lg sm:text-2xl md:text-3xl">
                  <h1 className="font-bold pb-5">Hello, I'm&nbsp;</h1>
                  <h1 className="font-bold drop-shadow-lg drop-shadow-gray-500 text-2xl sm:text-3xl md:text-4xl">
                    Philip Louis Nisperos
                  </h1>
                </div>
                <h4 className="pt-2 pb-5">
                  For 12 years, I worked as a Mechanical Engineer, leading
                  projects that required me to be on-site for at least 6 months
                  to a year at a time. As a Project Engineer, I thrived in
                  solving complex challenges, ensuring efficiency, and driving
                  success in every project I handled.
                </h4>
              </motion.div>
            </div>
            <motion.div
              className="col-span-3 md:col-span-2 mb-0 md:mb-10 order-1 md:order-2 h-full flex items-center"
              initial="hidden"
              animate={textAnimationComplete ? "visible" : "hidden"}
              exit="hidden"
              variants={fadeIn}
            >
              <img src="/gcm_pic2.jpg" alt="" className="w-full" />
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-y-0 md:gap-y-10 pb-[10vh] mx-2">
            <motion.div
              className="col-span-3 md:col-span-2 mb-0 md:mb-10 h-full flex items-center"
              initial="hidden"
              animate={textAnimationComplete1 ? "visible" : "hidden"}
              exit="hidden"
              variants={fadeIn}
            >
              <img src="/My_baby.jpg" alt="" className="w-full md:w-auto" />
            </motion.div>
            <div className="relative col-span-3 md:col-span-1 mb-10 flex items-center h-full">
              <motion.div
                className="relative md:absolute -mx-auto md:-mx-[150px] lg:-mx-[200px] bg-[#fff] w-full md:w-[400px] lg:w-[500px] border px-5 shadow-lg shadow-black overflow-hidden"
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInFromRight}
                onAnimationComplete={() => setHasAnimated1(true)}
              >
                <h4 className="pt-2 pb-5">
                  While I valued the technical expertise and hands-on work, my
                  priorities shifted after getting married and welcoming my son.
                  I realized the importance of being present for my family,
                  which led me to re-evaluate my career path. I reached a point
                  in my life where I realized that I needed a career that
                  wouldn&apos;t require me to be away from home for extended
                  periods of time. Being present for the important milestones in
                  my son&apos;s life—his first steps, his first words,
                  birthdays, and all the little moments in between—became more
                  important to me than anything else. I didn&apos;t want to miss
                  those precious memories because of work commitments that kept
                  me away for months or even a year at a time. I needed a role
                  that allowed me to be there—not just as a provider, but as an
                  active, present father. That's when I decided to pursue my
                  long-standing passion—
                  <span className="font-bold">
                    programming and web development
                  </span>
                  .
                </h4>
              </motion.div>
            </div>
          </div>

          <div className="mx-2">
            <div className="col-span-3 mb-10 flex justify-center overflow-hidden">
              <motion.div
                className="w-full md:w-2/3 bg-[#fff] border px-5 shadow-lg shadow-black mb-10"
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ once: true, amount: 1 }}
                variants={fadeIn}
              >
                <h4 className="text-md sm:text-lg pt-2 pb-5">
                  <span className="mb-4 inline-block">
                    In January, I took a leap and enrolled in a full stack web
                    development boot camp and haven't looked back since.
                  </span>
                  <br />
                  <span className="mb-4 inline-block">
                    These days I am fully committed to this new exciting
                    journey, diving into code and building dynamic digital
                    experiences. I'm combining my mechanical engineering
                    discipline with a creative drive to carve out a future in
                    tech—one that keeps me closer to home while still pushing me
                    to build, design and solve complex tasks.
                  </span>
                </h4>
              </motion.div>
            </div>
            <motion.div
              className="col-span-3 pt-5 mb-10 flex justify-center"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
            >
              <img src="/fullstack_certificate.jpg" alt="" className="w-full md:w-3/4" />
            </motion.div>
            <div className="col-span-3 flex justify-center pb-10 overflow-hidden">
              <div className="py-5 whitespace-nowrap">
                <Button className="custom-button">Download Resume</Button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default About;

================================================
import Hero from "../components/Hero";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


const slides = [
  {
    id: 1,
    text: (
      <div>
        <h1 className="text-3xl font-bold mb-2">Hello, I'm</h1>
        <h1 className="text-4xl font-bold mb-2">Philip Louis Nisperos</h1>
        <p className="text-gray-700 text-lg mb-2 pt-5">
          For 12 years, I worked as a Mechanical Engineer, leading projects
          that required me to be on-site for at least 6 months to a year at a
          time. As a Project Engineer, I thrived in solving complex challenges,
          ensuring efficiency, and driving success in every project I handled.
        </p>
      </div>
    ),
    image: "/gcm_pic2.jpg",
  },
  {
    id: 2,
    text: (
			<>
				<p className="md:p-5">
					While I valued the technical expertise and hands-on work, my
					priorities shifted after getting married and welcoming my son. I
					realized the importance of being present for my family, which led
					me to re-evaluate my career path.
				</p>
				<p className="md:p-5">
					I reached a point in my life where I realized that I needed a
					career that wouldn&apos;t require me to be away from home for
					extended periods of time. Being present for the important
					milestones in my son&apos;s life—his first steps, his first
					words, birthdays, and all the little moments in between—became
					more important to me than anything else. I didn&apos;t want to
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
    text: "Project 3: Movie Browser",
    image: "/fullstack_certificate.jpg",
  },
	{
    id: 4,
    text: "Project 4: This is Project 4",
    image: "/image4.jpg",
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

const About = ({ isLoading }) => {
	const [activeIndex, setActiveIndex] = useState(0);
  const current = slides[activeIndex];
	const [readyToAnimate, setReadyToAnimate] = useState(false);

	useEffect(() => {
		if (!isLoading) {
			const timer = setTimeout(() => setReadyToAnimate(true), 100); // slight delay to breathe
			return () => clearTimeout(timer);
		}
	}, [isLoading]);
	
  return (
    <>
      <Hero title="About" subtitle="About Me" />

			<div className="w-full max-w-7xl mx-auto my-10 px-4 py-10 space-y-10 border">
				{/* Top Section */}
				<div className="flex flex-col lg:flex-row gap-6 items-start border">
					<div className="lg:w-1/2 text-center lg:text-left py-2">
						<AnimatePresence mode="wait">
							<motion.div
								key={current.id}
								variants={fadeInFromLeft}
								initial="hidden"
								animate={readyToAnimate ? "visible" : "hidden"}
							>
								{current.text}
							</motion.div>
						</AnimatePresence>
					</div>

					<div className="lg:w-1/2 w-full">
						<AnimatePresence mode="wait">
							<motion.div
								key={current.id + "-image"}
								className="h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center"
								variants={fadeIn}
								initial="hidden"
								animate={readyToAnimate ? "visible" : "hidden"}
								exit="exit"
							>
								<img
									src={current.image}
									alt={`Slide ${current.id}`}
									className="h-full w-auto object-cover"
								/>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* Thumbnails */}
				<motion.div
					className="flex justify-center gap-4 flex-wrap border-t border-b pt-4"
					initial="hidden"
					animate={readyToAnimate ? "visible" : "hidden"}
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
							animate={readyToAnimate ? "visible" : "hidden"}
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
			</div>

    </>
  );
};

export default About;
