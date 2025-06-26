import { Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Portfolio = () => {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible");
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero title="Portfolio" subtitle="Portfolio" />

      <div className="container-fluid flex justify-center">
        <div className="container max-w-6xl">
          {/* <h1 className="text-4xl sm:text-5xl font-bold text-center py-20">Portfolio</h1> */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 sm:gap-x-4 gap-y-4 mx-2 pt-10 pb-15">
            <motion.div
              className="col-span-2 text-center"
              initial="hidden"
              animate={controls}
              variants={fadeInFromLeft}
            >
              <img src="/image8.jpg" alt="" className="" />
            </motion.div>
            <motion.div
              className="col-span-1 px-2 md:px-5"
              initial="hidden"
              animate={controls}
              variants={fadeInFromBottom}
            >
              <h4 className="text-2xl font-bold pb-5">Project 1</h4>
              <h5 className="pb-5 text-lg font-bold">Motueka Task</h5>
              <h6 className="pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                illo doloribus temporibus quae totam asperiores voluptate veniam
                tempora commodi accusantium?
              </h6>
              <Button className="custom-button">Read More</Button>
            </motion.div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 sm:gap-x-4 gap-y-4 mx-2 py-15">
            <motion.div
              className="col-span-1 order-2 md:order-1 px-2 md:px-5"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInFromBottom}
            >
              <h4 className="text-2xl font-bold pb-5">Project 2</h4>
              <h5 className="pb-5 text-lg font-bold">Cleaning Services</h5>
              <h6 className="pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                illo doloribus temporibus quae totam asperiores voluptate veniam
                tempora commodi accusantium?
              </h6>
              <Button className="custom-button">Read More</Button>
            </motion.div>
            <motion.div
              className="col-span-2 order-1 md:order-2 text-center"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInFromRight}
            >
              <img src="/image7.jpg" alt="" />
            </motion.div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 sm:gap-x-4 gap-y-4 mx-2 pt-15 pb-30">
            <motion.div
              className="col-span-2 text-center"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInFromLeft}
            >
              <img src="/image5.jpg" alt="" />
            </motion.div>
            <motion.div
              className="col-span-1 px-2 md:px-5"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInFromBottom}
            >
              <h4 className="text-2xl font-bold pb-5">Project 3</h4>
              <h5 className="pb-5 text-lg font-bold">Movie Browser</h5>
              <h6 className="pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                illo doloribus temporibus quae totam asperiores voluptate veniam
                tempora commodi accusantium?
              </h6>
              <Button className="custom-button">Read More</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
