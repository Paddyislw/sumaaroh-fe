import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Envelope from "../../assets/Envolope.png";
import Card from "../../assets/card.png";
import Background from '../../assets/Background1.png'

type Props = {
    setStartAnimation:Dispatch<SetStateAction<boolean>>
}

const CardAnimation = ({setStartAnimation}:Props) => {
  const [isEnvelopeRevealed, setIsEnvelopeRevealed] = useState(false);
  const [isCardRevealed, setIsCardRevealed] = useState(false);
  const [shouldDisappear, setShouldDisappear] = useState(false);
  const [isComponentVisible, setIsComponentVisible] = useState(true);

  useEffect(() => {
    // Start the reveal animations
    setIsEnvelopeRevealed(true);
    
    // Show card after envelope animation
    const cardTimer = setTimeout(() => setIsCardRevealed(true), 1500);
    
    // Start disappearing animation
    const disappearTimer = setTimeout(() => setShouldDisappear(true), 3500);
    
    // Hide component completely after animations finish
    const hideTimer = setTimeout(() => {
      setIsComponentVisible(false);
      setStartAnimation(true)
    }, 4000);

    return () => {
      clearTimeout(cardTimer);
      clearTimeout(disappearTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isComponentVisible) return null;

  return (
    <motion.div 
      className="flex items-center justify-center min-h-screen bg-cream-50 overflow-hidden absolute top-0 left-0 z-10 w-full"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: shouldDisappear ? 0 : 1
      }}
      transition={{ duration: 1.5 }}
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="relative w-96">
        {/* Envelope */}
        <motion.div
          className="relative"
          initial={{ y: "100%" }}
          animate={{
            y: shouldDisappear ? "-100%" : isEnvelopeRevealed ? 0 : "100%",
            transition: {
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
        >
          <img
            src={Envelope}
            alt="Envelope"
            className="w-full h-auto"
          />

          {/* Card Container */}
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
            {/* Card */}
            <motion.div
              className="absolute top-0 left-0 right-0"
              initial={{ y: "100%", opacity: 0 }}
              animate={{
                y: shouldDisappear ? "-100%" : isCardRevealed ? "10%" : "100%",
                opacity: shouldDisappear ? 0 : isCardRevealed ? 1 : 0,
                transition: {
                  duration: 1.5,
                  ease: [0.4, 0, 0.2, 1],
                  opacity: { duration: 0.5 },
                },
              }}
            >
              <img
                src={Card}
                alt="Congratulations Card"
                className="w-[90%] mx-auto h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardAnimation;