
import "@/app/globals.css"
import { Inter as FontSans } from 'next/font/google';
import { cn } from "@/lib/utils";
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn(
          'font-sans antialiased',
          fontSans.variable
        )}>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
            {children}
          {/* </ThemeProvider> */}
        </body>
      </html>
    </>
  )
}
