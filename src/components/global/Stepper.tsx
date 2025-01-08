import { motion } from "framer-motion"

interface StepperProps {
  currentStep: number
  totalSteps: number
}

export default function Stepper({ currentStep = 3, totalSteps = 6 }: StepperProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="w-full bg-transparent p-0 absolute sm:relative top-0 left-0 sm:p-4">
      <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden border">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F4B95F] to-[#F4B95F]/80"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
      <div className="mt-2 text-center hidden sm:block">
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          key={currentStep} 
          transition={{ duration: 0.7 }}
        >
          Step {currentStep}/{totalSteps}
        </motion.p>
      </div>
    </div>
  )
}

