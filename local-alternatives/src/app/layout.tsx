import './globals.css'; 

import NavBar from '@SMART/components/NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        </head>
        <body className=''>
          <NavBar></NavBar>
          <div className=' mt-50'>{children}</div>
          </body>
      </html>
    </div>
  )
}