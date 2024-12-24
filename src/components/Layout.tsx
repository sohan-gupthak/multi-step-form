import { ThemeProvider } from 'next-themes'
import DarkModeToggle from './DarkModeToggle'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-background dark:bg-gray-900 text-foreground flex flex-col">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Multi-Step Form</h1>
            <DarkModeToggle />
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {children}
          </div>
        </main>
        <footer className="border-t">
          <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
            © 2023 Multi-Step Form Project
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}