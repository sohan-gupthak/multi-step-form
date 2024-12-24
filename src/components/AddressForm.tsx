import { AddressFormProps, Address } from '@/types/types';
import { useForm } from 'react-hook-form'
import { useFormStore } from '@/store/formStore'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AddressForm({ onNext, onPrev }: AddressFormProps) {
  const { address, setAddress } = useFormStore()
  const { register, handleSubmit, formState: { errors } } = useForm<Address>({
    defaultValues: address
  })

  const onSubmit = (data: Address) => {
    setAddress(data)
    onNext()
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="">
        <CardTitle className="text-xl font-bold">Address Information</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="street" className="block text-sm font-medium text-paragraph dark:text-gray-300 mb-1">Street Address</Label>
            <input
              id="street"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-blue-500 focus:border-transparent text-paragraph dark:text-white bg-white dark:bg-gray-700"
              {...register('street', { required: 'Street address is required' })}
            />
            {errors.street && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.street.message}</p>}
          </div>
          <div>
            <Label htmlFor="city" className="block text-sm font-medium text-paragraph dark:text-gray-300 mb-1">City</Label>
            <input
              id="city"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-blue-500 focus:border-transparent text-paragraph dark:text-white bg-white dark:bg-gray-700"
              {...register('city', { required: 'City is required' })}
            />
            {errors.city && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.city.message}</p>}
          </div>
          <div>
            <Label htmlFor="state" className="block text-sm font-medium text-paragraph dark:text-gray-300 mb-1">State</Label>
            <input
              id="state"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-blue-500 focus:border-transparent text-paragraph dark:text-white bg-white dark:bg-gray-700"
              {...register('state', { required: 'State is required' })}
            />
            {errors.state && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.state.message}</p>}
          </div>
          <div>
            <Label htmlFor="zipCode" className="block text-sm font-medium text-paragraph dark:text-gray-300 mb-1">Zip Code</Label>
            <input
              id="zipCode"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight dark:focus:ring-blue-500 focus:border-transparent text-paragraph dark:text-white bg-white dark:bg-gray-700"
              {...register('zipCode', { required: 'Zip Code is required' })}
            />
            {errors.zipCode && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.zipCode.message}</p>}
          </div>
          <div className="flex justify-between">
              <Button type="button" onClick={onPrev}>Previous</Button>
              <Button type="submit">Next</Button>
            </div>
        </form>
      </CardContent>
    </Card>
  )
}
