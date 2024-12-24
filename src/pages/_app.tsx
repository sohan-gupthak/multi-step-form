import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ToastProvider, ToastViewport } from "@/components/ui/toast"
import '@/styles/output.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ToastProvider>
        <Component {...pageProps} />
        <ToastViewport />
      </ToastProvider>
    </ThemeProvider>
  )
}

export default MyApp