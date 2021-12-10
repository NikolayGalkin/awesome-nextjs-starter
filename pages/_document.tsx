import Document, { Head, Html, Main, NextScript } from 'next/document'

import type { DocumentProps /*DocumentContext, DocumentInitialProps*/ } from 'next/document'

export default class MyDocument extends Document<DocumentProps> {
  // static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return initialProps
  // }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="font-sans text-base antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
