import { Roboto } from '@next/font/google'
import Head from 'next/head'

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
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
