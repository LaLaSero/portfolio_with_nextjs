import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>あままままま</h1>
        <p>これはシンプルなテキストのみのページです。</p>
      </main>

      <footer>
        <p>フッターのテキスト</p>
      </footer>
    </div>
  )
}
