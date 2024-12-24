export interface FormStepperProps {
    currentStep: number;
  }
  
  export interface PersonalInfoFormProps {
    onNext: () => void;
  }
  
  export interface AddressFormProps {
    onNext: () => void;
    onPrev: () => void;
  }
  
  export interface PreferencesFormProps {
    onNext: () => void;
    onPrev: () => void;
  }
  
  export interface ReviewFormProps {
    onPrev: () => void;
    onSubmit: () => void;
  }
  
  export interface PersonalInfo {
    name: string;
    email: string;
  }
  
  export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  }
  
  export interface Preferences {
    interests: string[];
    notifications: boolean;
  }
  
  export interface FormData {
    personalInfo: PersonalInfo;
    address: Address;
    preferences: Preferences;
  }