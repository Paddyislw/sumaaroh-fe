import { motion } from "framer-motion";
import Image from "../../assets/Image.png";
import Background from "../../assets/Background1.png";
import Sun from '../../assets/Sun.png'
import Logo from "../global/Logo";
import { Link } from "react-router-dom";

type Props = {
    startAnimation:boolean
}

export default function FreeProposal({ startAnimation = false }:Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: startAnimation ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#fdfbf6] relative overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 md:py-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: startAnimation ? 1 : 0, y: startAnimation ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <Logo />
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: startAnimation ? 1 : 0, scale: startAnimation ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full md:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative border */}
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: startAnimation ? 0 : -10, scale: startAnimation ? 1 : 0.9 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute inset-0 rounded-lg transform -rotate-3"
              />
              <img
                src={Image}
                alt="Wedding planners at work"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: startAnimation ? 1 : 0, x: startAnimation ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 text-center md:text-left"
            >
              Anita, let our expert planners craft your special day
            </motion.h1>

            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: startAnimation ? 1 : 0, x: startAnimation ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start gap-4 bg-white p-4 md:p-7 rounded-xl"
              >
                <img className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" src={Sun} alt="Sun icon" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg md:text-xl">
                    Unlock best venues, decors & more
                  </h3>
                  <p className="text-gray-600 font-semibold text-base md:text-lg">
                    Tell us about your dream day & get a perfect proposal in
                    your budget for FREE
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: startAnimation ? 1 : 0, x: startAnimation ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-start gap-4 bg-white p-4 md:p-7 rounded-xl"
              >
                <img className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" src={Sun} alt="Sun icon" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg md:text-xl">
                    800+ Flawless Celebrations
                  </h3>
                  <p className="text-gray-600 font-semibold text-base md:text-lg">
                    Enjoy a perfect, stress-free wedding from the first visit to
                    the final goodbyes
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: startAnimation ? 1 : 0, y: startAnimation ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <Link to={'/wedding-preference'}>
                <button className="w-full px-6 sm:px-12 md:px-24 py-3 md:py-4 text-base md:text-lg bg-[#F06B9A] hover:bg-[#E85A89] text-white rounded-full transition-transform hover:scale-105">
                  Get My FREE Proposal
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

