import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FormStepper from '@/components/FormStepper'
import PersonalInfoForm from '@/components/PersonalInfoForm'
import AddressForm from '@/components/AddressForm'
import PreferencesForm from '@/components/PreferencesForm'
import ReviewForm from '@/components/ReviewForm'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen flex flex-col px-2 py-2 p-2">
      <div className="w-full max-w-4xl shadow-soft rounded-3xl overflow-hidden">
        <div className="p-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Multi-Step Form</h1>
          <DarkModeToggle />
        </div>
        <div className="p-6">
          <FormStepper currentStep={step} />
          <AnimatePresence mode='wait'>
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && <PersonalInfoForm onNext={nextStep} />}
              {step === 2 && <AddressForm onNext={nextStep} onPrev={prevStep} />}
              {step === 3 && <PreferencesForm onNext={nextStep} onPrev={prevStep} />}
              {step === 4 && <ReviewForm onPrev={prevStep} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}