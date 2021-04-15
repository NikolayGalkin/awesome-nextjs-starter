import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import { BiMenuAltLeft, BiCart, BiHome, BiHeart, BiUser } from 'react-icons/bi'

const dishes = [
  {
    title: 'Креветки',
    image:
      'https://images.unsplash.com/photo-1559742811-822873691df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=165&q=80',
    price: 185,
  },
  {
    title: 'Рыба полосочками',
    image:
      'https://images.unsplash.com/photo-1614627293113-e7e68163d958?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=165&h=165&q=80',
    price: 175,
  },
  {
    title: 'Мясо мидии',
    image:
      'https://images.unsplash.com/photo-1582759777896-0aaa738a5c38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=165&q=80',
    price: 150,
  },
  {
    title: 'Морской коктейль',
    image:
      'https://images.unsplash.com/photo-1569494315581-abddb8d41cfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=165&q=80',
    price: 125,
  },
]

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Морепродукты на Ньютона</title>
    </Head>
    <div className="flex flex-col min-h-screen px-8 pt-16">
      <header className="flex justify-between">
        <BiMenuAltLeft className="text-3xl text-gray-900" />
        <BiCart className="text-3xl text-primary" />
      </header>
      <main className="flex flex-col justify-start flex-grow h-full py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-7">Морепродукты на Ньютона</h1>
        <div className="flex flex-grow py-24 pt-32 space-x-8 overflow-x-auto">
          {dishes.map((dish) => (
            <div
              key={dish.title}
              className="relative flex flex-col items-center justify-end flex-none w-2/3 px-8 pb-6 bg-white md:w-1/4 rounded-3xl"
            >
              <img
                className="absolute object-cover w-32 h-32 rounded-full -top-16"
                src={dish.image}
              />
              <h2 className="mb-4 text-xl font-semibold text-center text-gray-900">{dish.title}</h2>
              <span className="font-semibold text-primary">{dish.price} грн (0.5кг)</span>
            </div>
          ))}
        </div>
      </main>
      <aside>
        <div className="flex items-center justify-between pb-12">
          <a href="#">
            <BiHome className="text-3xl text-primary" />
          </a>
          <a href="#">
            <BiHeart className="text-3xl" />
          </a>
          <a href="#">
            <BiUser className="text-3xl" />
          </a>
        </div>
      </aside>
    </div>
  </>
)

export default HomePage
