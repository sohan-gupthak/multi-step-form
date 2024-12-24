import { useForm } from 'react-hook-form'
import { useFormStore } from '@/store/formStore'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

interface PersonalInfoFormProps {
    onNext: () => void
}

export default function PersonalInfoForm({ onNext }: PersonalInfoFormProps) {
  const { personalInfo, setPersonalInfo } = useFormStore()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: personalInfo
  })

  const onSubmit = (data: typeof personalInfo) => {
    setPersonalInfo(data)
    onNext()
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-paragraph dark:text-gray-300 mb-1">Name</Label>
            <input
              id="name"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-blue-500 focus:border-transparent text-paragraph dark:text-white bg-white dark:bg-gray-700"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-paragraph dark:text-gray-300 mb-1">Email</Label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-blue-500 focus:border-transparent text-paragraph dark:text-white bg-white dark:bg-gray-700"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>}
          </div>
          <Button type="submit" className="w-full">
            Next
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}