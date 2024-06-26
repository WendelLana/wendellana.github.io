import "./hero.scss";
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    }
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate">
          <motion.h2 variants={textVariants}>WENDEL FERNANDES</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer and Software Engineer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}><a href="#Services">See the Latest Works</a></motion.button>
            <motion.button variants={textVariants}><a href="#Contact">Contact me</a></motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        International Software Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/foto.png" alt="" />
      </div>
    </div>
  )
}

export default Hero