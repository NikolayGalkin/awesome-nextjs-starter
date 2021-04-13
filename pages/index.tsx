import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Home Page</title>
    </Head>
    <main className="flex flex-col items-center justify-center min-h-screen space-y-16">
      <h1 className="text-lg font-semibold text-gray-900">Home Page</h1>
      <ul className="flex flex-col space-y-2">
        <li>
          <Link href="/inbox">
            <a className="underline hover:no-underline">Inbox Page</a>
          </Link>
        </li>
        <li className="text">
          <p className="text-gray-400">Chat Page (comming soon)</p>
        </li>
        <li className="text">
          <p className="text-gray-400">Trello Page (comming soon)</p>
        </li>
      </ul>
    </main>
  </>
)

export default HomePage
