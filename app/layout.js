export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='description'
          content='application of time slots with intervals of 30 minutes from 8:00 to 8 pm, built with nextjs13 and mongoDB'
        />
        <meta
          name='keywords'
          content='Nextjs, Reactjs, JavaScript(ES6+), MongoDB, CSS-GRID, CSS-flexbox'
        />
        <meta name='author' content='Nicolas Ignacio Bouffanais Lay' />
        <meta name='theme-color' content='#1372db' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0'
        />
        <title>Time slots app</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
