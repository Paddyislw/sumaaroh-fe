import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Background from "../assets/Background1.png";
import Logo from "../components/global/Logo";
import { useUserApi } from "../api/UserApi";
import { useUser } from "../context/UserContext";

export default function UserDetailsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  const { createUser, isCreatingUser, isCreateSuccess, isCreateError } = useUserApi();
  const { setUserEmail } = useUser();

  const validateName = (value: string) => {
    if (value.trim().length < 2) {
      setNameError("Name must be at least 2 characters long");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  useEffect(() => {
    setIsFormValid(
      name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
  }, [name, email]);

  // Effect to handle successful user creation
  useEffect(() => {
    if (isCreateSuccess) {
      setUserEmail(email);
      navigate("/free-proposal");
    }
  }, [isCreateSuccess, navigate, email, setUserEmail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      createUser({ name, email });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const errorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9f4b8] to-[#f0e68c] relative"
    >
      <div className="absolute mx-auto top-4 sm:right-4">
        <Logo />
      </div>
      <motion.div
        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white border-opacity-30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-center text-gray-800"
          variants={itemVariants}
        >
          User Details
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
              onBlur={() => validateName(name)}
              required
              className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your name"
              disabled={isCreatingUser}
            />
            <AnimatePresence>
              {nameError && (
                <motion.p
                  className="mt-1 text-red-500 text-sm"
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {nameError}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div variants={itemVariants}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              onBlur={() => validateEmail(email)}
              required
              className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your email"
              disabled={isCreatingUser}
            />
            <AnimatePresence>
              {emailError && (
                <motion.p
                  className="mt-1 text-red-500 text-sm"
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {emailError}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={!isFormValid || isCreatingUser}
              className={`w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85A89] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 ${
                isFormValid && !isCreatingUser
                  ? "bg-[#E85A89] text-white hover:bg-[#E85A89]"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              {isCreatingUser ? "Creating..." : "Submit"}
            </button>
          </motion.div>
          
          {/* Error message */}
          <AnimatePresence>
            {isCreateError && (
              <motion.div
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-red-500 text-sm text-center"
              >
                An error occurred while creating the user. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}