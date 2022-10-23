import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR, { SWRResponse, Fetcher } from 'swr';

const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then((res) => res.json())

const Home: NextPage = () => {
  const { data, mutate, error } = useSWR('/api/advice', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Random Advice</title>
        <meta name="description" content="Providing you with random advice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Random Advice
        </h1>

        <p className={styles.description}>
          {data.advice}
        </p>

        <button onClick={() => mutate()} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-md shadow">Another one</button>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
