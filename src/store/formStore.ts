import { create } from 'zustand'

interface FormState {
  personalInfo: {
    name: string
    email: string
  }
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  preferences: {
    receiveNewsletter: boolean
    agreeToTerms: boolean
  }
  setPersonalInfo: (info: FormState['personalInfo']) => void
  setAddress: (address: FormState['address']) => void
  setPreferences: (prefs: FormState['preferences']) => void
}

export const useFormStore = create<FormState>((set) => ({
  personalInfo: { name: '', email: '' },
  address: { street: '', city: '', state: '', zipCode: '' },
  preferences: { receiveNewsletter: false, agreeToTerms: false },
  setPersonalInfo: (info) => set({ personalInfo: info }),
  setAddress: (address) => set({ address }),
  setPreferences: (prefs) => set({ preferences: prefs }),
}))