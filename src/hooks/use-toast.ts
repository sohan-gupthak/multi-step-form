import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast"
import { useState, useEffect } from 'react'

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1))
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [toasts])

  const addToast = (props: Omit<ToastProps, 'open'>) => {
    setToasts((prevToasts) => [...prevToasts, { ...props, open: true }])
  }

  return { addToast, Toast, toasts }
}