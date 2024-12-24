import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormStepperProps } from '@/types/types';

export default function FormStepper({ currentStep }: FormStepperProps) {
  return (
    <Tabs value={`step-${currentStep}`} className="w-full mb-8">
      <TabsList className="grid w-full grid-cols-4 bg-muted rounded-lg p-1">
        <TabsTrigger value="step-1" disabled={currentStep !== 1} className="data-[state=active]:bg-background data-[state=active]:text-foreground">Personal Info</TabsTrigger>
        <TabsTrigger value="step-2" disabled={currentStep !== 2} className="data-[state=active]:bg-background data-[state=active]:text-foreground">Address</TabsTrigger>
        <TabsTrigger value="step-3" disabled={currentStep !== 3} className="data-[state=active]:bg-background data-[state=active]:text-foreground">Preferences</TabsTrigger>
        <TabsTrigger value="step-4" disabled={currentStep !== 4} className="data-[state=active]:bg-background data-[state=active]:text-foreground">Review</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}