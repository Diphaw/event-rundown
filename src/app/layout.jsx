import '../app/globals.css'

export const metadata = {
  title: 'Event Rundown Creator',
  description: 'Create and manage event schedules with ease',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

