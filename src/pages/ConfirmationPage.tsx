import { motion } from "framer-motion"
import { Check } from 'lucide-react'

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Badge with check and dots */}
        <div className="relative inline-block mb-8">
          {/* Circular glow effects */}
          <motion.div
            className="absolute inset-0 bg-purple-600/10 rounded-full blur-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute inset-0 bg-purple-600/5 rounded-full blur-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />

          {/* Main badge with scalloped edge effect */}
          <motion.div
            className="relative w-16 h-16"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6
            }}
          >
            {/* Scalloped edge background */}
            <div className="absolute inset-0 bg-purple-600/20 rounded-full" />
            
            {/* Main purple circle */}
            <div className="absolute inset-1 bg-purple-600 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>

          </motion.div>
        </div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-serif mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Our top recommended venues for you
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-500 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Shortlist the venues you like so that our planner can understand your tastes better
        </motion.p>
      </div>
    </div>
  )
}

