import { useForm } from 'react-hook-form'
import { useFormStore } from '@/store/formStore'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PreferencesFormProps {
    onNext: () => void
    onPrev: () => void
}

export default function PreferencesForm({ onNext, onPrev }: PreferencesFormProps) {
    const { preferences, setPreferences } = useFormStore()
    const { register, handleSubmit } = useForm({
      defaultValues: preferences
    })
  
    const onSubmit = (data: typeof preferences) => {
      setPreferences(data)
      onNext()
    }
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="receiveNewsletter"
                {...register('receiveNewsletter')}
              />
              <Label htmlFor="receiveNewsletter" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Receive Newsletter
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToTerms"
                {...register('agreeToTerms')}
              />
              <Label htmlFor="agreeToTerms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Agree to Terms
              </Label>
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