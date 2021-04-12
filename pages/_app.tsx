import { AppProps } from 'next/app'

import '@fontsource/poppins'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
