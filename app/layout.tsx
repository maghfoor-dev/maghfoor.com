import '../styles/globals.css'
import { Anek_Devanagari } from "next/font/google"

const anek = Anek_Devanagari({
  subsets: ["latin"],
})

export const metadata = {
  title: 'Maghfoor Ahmed',
  description: 'Maghfoor\'s Personal Website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={anek.className}>
      <head>
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
      </head>
      <body>{children}</body>
    </html>
  )
}
