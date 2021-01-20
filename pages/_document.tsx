import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="flex items-center justify-center min-h-screen font-sans text-base antialiased bg-black-pearl">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
