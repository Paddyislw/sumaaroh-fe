import { motion } from "framer-motion"
import { Eye } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

interface LoadingScreenProps {
  message?: string
  icon?: LucideIcon
}

export default function LoadingScreen({ 
  message = "Great, let our planners craft the perfect setting for your magical day.",
  icon: Icon = Eye
}: LoadingScreenProps) {
  return (
    <div className="fixed bg-custom-gradient inset-0 flex items-center justify-center overflow-hidden">
      {/* Large outer glow */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      
      {/* Inner glow */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full bg-white/30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      />

      <div className="relative text-center max-w-md px-4">
        {/* Icon container with glow effect */}
        <motion.div
          className="relative flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
        >
          {/* Icon glow effect */}
          <motion.div
            className="absolute inset-0 bg-white/40 rounded-full blur-md"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1.2, 1],
              opacity: [0, 0.5, 0.3]
            }}
            transition={{ 
              delay: 0.6,
              duration: 1,
              times: [0, 0.5, 1]
            }}
          />
          
          {/* Animated icon */}
          <motion.div
            className="relative bg-white/10 p-4 rounded-full backdrop-blur-sm"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
        
        {/* Text with glow effect */}
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-white/30 rounded-3xl blur-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
          <motion.p
            className="relative text-gray-400 text-center text-lg sm:text-xl px-6 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            {message}
          </motion.p>
        </div>

        {/* Subtle pulsing dot animation */}
        <motion.div
          className="mt-8 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gray-400/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

