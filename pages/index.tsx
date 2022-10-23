import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';

const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then((res) => res.json())

const Home: NextPage = () => {
  const { data, mutate, error } = useSWR('/api/advice', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <Head>
        <title>Random Advice</title>
        <meta name="description" content="Providing you with random advice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="font-bold text-xl">
          Random Advice
        </h1>

        <p className="text-base py-20 sm:text-sm sm:px-10">
          {data.advice}
        </p>

        <button onClick={() => mutate()} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-md shadow">Another one</button>

      </main>
    </div>
  )
}

export default Home
