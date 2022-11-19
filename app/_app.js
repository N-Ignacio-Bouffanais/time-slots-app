import { Roboto } from '@next/font/google'

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
