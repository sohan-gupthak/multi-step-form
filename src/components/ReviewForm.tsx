import { useFormStore } from '@/store/formStore'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Toast, ToastTitle, ToastDescription } from "@/components/ui/toast"
import { useState } from 'react'

interface ReviewFormProps {
    onPrev: () => void
}

export default function ReviewForm({ onPrev }: ReviewFormProps) {
  const { personalInfo, address, preferences } = useFormStore()
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async () => {
    console.log('Form submitted:', { personalInfo, address, preferences })
    
    setShowToast(true)

    setTimeout(() => setShowToast(false), 5000)
  }

  return (
    <>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="bg-highlight dark:bg-gray-700">
          <CardTitle className="text-xl font-bold text-headline dark:text-white">Review Your Information</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6 bg-main dark:bg-gray-800">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-paragraph dark:text-gray-200">Personal Information</h3>
            <p className="text-paragraph dark:text-gray-300">Name: {personalInfo.name}</p>
            <p className="text-paragraph dark:text-gray-300">Email: {personalInfo.email}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-paragraph dark:text-gray-200">Address</h3>
            <p className="text-paragraph dark:text-gray-300">Street: {address.street}</p>
            <p className="text-paragraph dark:text-gray-300">City: {address.city}</p>
            <p className="text-paragraph dark:text-gray-300">State: {address.state}</p>
            <p className="text-paragraph dark:text-gray-300">ZIP: {address.zipCode}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-paragraph dark:text-gray-200">Preferences</h3>
            <p className="text-paragraph dark:text-gray-300">Receive Newsletter: {preferences.receiveNewsletter ? 'Yes' : 'No'}</p>
          </div>
          <div className="flex space-x-4">
            <Button 
              onClick={onPrev} 
              className="flex-1 rounded-md bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500"
            >
              Previous
            </Button>
            <Button 
              onClick={handleSubmit} 
              className="flex-1 rounded-md bg-button dark:bg-blue-600 text-buttonText dark:text-white hover:bg-highlight dark:hover:bg-blue-700"
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
      {showToast && (
        <Toast className="fixed bottom-4 right-4 max-w-md w-full md:max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-highlight dark:bg-blue-600 rounded-md">
            <ToastTitle className="font-semibold text-white">Success</ToastTitle>
          </div>
          <ToastDescription className="p-4 text-gray-600 dark:text-gray-300">
            Your form has been successfully submitted.
          </ToastDescription>
        </Toast>
      )}
    </>
  )
}