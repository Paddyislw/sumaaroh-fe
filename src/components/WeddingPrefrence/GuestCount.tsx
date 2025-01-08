import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import WeddingHall from "../../assets/WeddingHall.png";
import Logo from "../global/Logo";
import Stepper from "../global/Stepper";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

type UserPreferences = {
  guestCount: string;
  venueType: string;
};

type Props = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setVenueSelectLoading: Dispatch<SetStateAction<boolean>>;
  userPreferences: UserPreferences;
  setUserPreferences: Dispatch<SetStateAction<UserPreferences>>;
};

export default function GuestCount({
  currentStep,
  setCurrentStep,
  setVenueSelectLoading,
  userPreferences,
  setUserPreferences,
}: Props) {
  const guestCountOptions = [
    "< 100",
    "100 - 250",
    "250 - 500",
    "500 - 1000",
    ">1000",
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-custom-gradient">
      {/* Left Section - Static */}
      <div className=" p-4 sm:p-6 lg:p-8 w-full">
        <button
          className="bg-[#F4B95F] p-2 sm:p-3 rounded-lg"
          onClick={() => {
            navigate("/free-proposal");
          }}
        >
          <ArrowLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <Stepper currentStep={currentStep} totalSteps={2} />
        <div className="max-w-xl mx-auto mt-8 sm:mt-12 lg:mt-20 px-4 text-center">
          <div className="block sm:hidden mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4">
            How many guests are you expecting?
          </h1>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base font-semibold">
            Please choose the number of people attending your biggest function
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {guestCountOptions.map((option) => (
              <button
                key={option}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-[#d4ab67]
                         transition-colors text-sm sm:text-base hover:bg-[#d4ab67] hover:text-gray-200 ${
                           userPreferences.guestCount === option &&
                           "bg-[#d4ab67] text-white"
                         }`}
                onClick={() => {
                  setUserPreferences((prev) => ({
                    ...prev,
                    guestCount: option,
                  }));
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="mx-auto mt-6 px-8 py-2 rounded-3xl bg-[#d4ab67] text-gray-100"
            onClick={() => {
              setCurrentStep(2);
              setVenueSelectLoading(true);
            }}
          >
            Next
          </button>
        </div>
      </div>

      {/* Right Section - Animated */}
      <motion.div
        className="w-full lg:w-[70%] ml-auto relative  items-center justify-center p-4 sm:p-6 lg:p-8 mt-8 lg:mt-0 bg-white hidden sm:flex"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <Logo />

          <motion.div
            className="max-w-md text-center p-4 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-4 sm:mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <span className="text-xl sm:text-2xl">💡</span>
            </motion.div>
            <div className="relative">
              <motion.p
                className="text-gray-600 font-semibold mb-6 sm:mb-8 text-sm sm:text-base px-4 border border-[#fdfbe5] rounded-full w-[330px] h-[330px] text-center flex items-center justify-center bg-custom-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="mb-6">
                  In receptions, expect about 35% of guests in the floating
                  crowd, and ensure ample standing and mingling space.
                </p>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="px-4 absolute -bottom-[170px]"
              >
                <img
                  src={WeddingHall}
                  alt="Wedding Reception Layout"
                  width={400}
                  height={400}
                  className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
