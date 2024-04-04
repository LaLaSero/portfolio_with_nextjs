import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/practice.css' // Adjust the path to your CSS module
import pic from '../../public/images/257168.png' // Adjust the path to your image

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.background}>
          {/* Use the Image component for optimized image loading */}
		  <Image
			src={pic}
			alt="Desktop Image"
			width={1100} height={733}
			sizes="(max-width:480px) 90vw,(max-width:1200px) 75vw,50vw"
			// style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
			/>
        </div>
        <div className={styles.overlay}>
          {/* Your text content goes here */}
          <h1>あままままま</h1>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* Your footer content */}
      </footer>
    </div>
  )
}
