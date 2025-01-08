import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-hot-toast";
import WeddingHall from "../../assets/Hall.png";
import venue1 from "../../assets/venue1.png";
import venue2 from "../../assets/venue2.png";
import venue3 from "../../assets/venue3.png";
import venue4 from "../../assets/venue4.png";
import venue5 from "../../assets/venue5.png";
import venue6 from "../../assets/venue6.png";
import { UserPreferences } from "../../types/types";
import { useUser } from "../../context/UserContext";
import { usePreferencesApi } from "../../api/UserPreferenceApi";
import Stepper from "../global/Stepper";
import Logo from "../global/Logo";


type Props = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setVenueSelectLoading: Dispatch<SetStateAction<boolean>>;
  userPreferences: UserPreferences;
  setUserPreferences: Dispatch<SetStateAction<UserPreferences>>;
};

export default function VenueSelect({
  currentStep,
  setCurrentStep,
  userPreferences,
  setUserPreferences,
}: Props) {
  const navigate = useNavigate();
  const { userEmail } = useUser();
  const { 
    savePreference, 
    isSaving, 
    isSuccess, 
    isError 
  } = usePreferencesApi(userEmail);

  useEffect(() => {
    if (!userEmail) {
      toast.error("Please provide your email first");
      navigate("/");
    }
  }, [userEmail, navigate]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/confirmation");
    }
  }, [isSuccess, navigate]);

  const handleSubmit = () => {
    if (!userEmail) {
      toast.error("User email not found. Please try again.");
      navigate("/");
      return;
    }

    savePreference({
      guestCount: userPreferences.guestCount,
      venueType: userPreferences.venueType
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-custom-gradient">
      {/* Left Section - Static */}
      <div className="p-4 sm:p-6 lg:p-8 w-full">
        <button
          className="bg-[#F4B95F] p-2 sm:p-3 rounded-lg"
          onClick={() => setCurrentStep(1)}
          disabled={isSaving}
        >
          <ArrowLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <Stepper currentStep={currentStep} totalSteps={2} />
        <div className="max-w-3xl mx-auto mt-2 sm:mt-2 lg:mt-4 px-0 text-center">
          <div className="block sm:hidden mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4">
            What type of venues <br /> would you like ?
          </h1>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base font-semibold">
            Select all the options that you like
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 mx-auto max-w-7xl">
            {venueTypes.map((venue) => (
              <div
                key={venue.id}
                className={`bg-white w-full py-4 rounded-xl px-4 cursor-pointer transition-all duration-500 hover:scale-105 ${
                  userPreferences.venueType === venue.title &&
                  "border-2 border-[#d4ab67] shadow shadow-[#d4ab67]"
                } ${isSaving ? "pointer-events-none opacity-50" : ""}`}
                onClick={() => {
                  setUserPreferences((prev) => ({
                    ...prev,
                    venueType: venue.title,
                  }));
                }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={venue.image}
                    alt={venue.alt}
                    className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 object-contain mx-auto"
                  />
                  <p className="font-semibold mt-2 text-sm sm:text-base text-gray-600 text-center">
                    {venue.title}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-gray-400 text-center">
                    {venue.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {userPreferences.venueType && (
            <button
              onClick={handleSubmit}
              disabled={isSaving}
              className={`w-full px-24 py-2 mt-6 text-lg bg-[#F06B9A] hover:bg-[#E85A89] text-white rounded-full transition-transform
                ${isSaving ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
            >
              {isSaving ? "Saving..." : "Submit"}
            </button>
          )}

          {isError && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-center mt-4"
            >
              There was an error saving your preferences. Please try again.
            </motion.p>
          )}
        </div>
      </div>

      {/* Right Section - Animated */}
      <motion.div
        className="w-full lg:w-[70%] ml-auto relative items-center justify-center p-4 sm:p-6 lg:p-8 mt-8 lg:mt-0 bg-white hidden sm:flex"
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
                className="text-gray-500 font-semibold mb-6 sm:mb-8 text-sm sm:text-base px-4 border border-[#fdfbe5] rounded-full w-[330px] h-[330px] text-center flex items-center justify-center bg-custom-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="mb-6">
                  People tend to choose airy outdoor venues like resorts for
                  daytime weddings, and elegant indoor setting like convention
                  halls for evening celebrations
                </p>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="px-4 absolute -bottom-[100px]"
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

const venueTypes = [
  {
    id: 1,
    title: "5 Star Hotels",
    description: "High end amenities and exceptional service",
    image: venue1,
    alt: "Isometric view of a luxury 5-star hotel with pool",
  },
  {
    id: 2,
    title: "Resorts",
    description: "Picturesque settings with luxury guest accommodation",
    image: venue2,
    alt: "Isometric view of a resort with swimming pool and palm trees",
  },
  {
    id: 3,
    title: "ConventionHall",
    description: "Indoor Halls for Grand Weddings",
    image: venue3,
    alt: "Isometric view of a modern convention center",
  },
  {
    id: 4,
    title: "3 Star Hotels",
    description: "Affordable venues with good service.",
    image: venue4,
    alt: "Isometric view of a 3-star hotel with swimming pool",
  },
  {
    id: 5,
    title: "Farm houses",
    description: "Green, open spaces for affordable outdoor Weddings",
    image: venue5,
    alt: "Isometric view of a farmhouse with trees",
  },
  {
    id: 6,
    title: "KalyanMantapas",
    description: "Indoor halls for traditional wedidings",
    image: venue6,
    alt: "Isometric view of a traditional wedding hall",
  },
];
