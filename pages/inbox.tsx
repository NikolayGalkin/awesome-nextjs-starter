import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import {
  BiChevronDown,
  BiChevronUp,
  BiBell,
  BiSearch,
  BiFlag,
  BiEdit,
  BiUserCircle,
  BiCheckCircle,
  BiTrashAlt,
  BiSortUp,
  BiArrowBack,
  BiTag,
  BiArchiveIn,
  BiDotsHorizontalRounded,
} from 'react-icons/bi'
import { BsQuestionCircle } from 'react-icons/bs'
import { FiInbox } from 'react-icons/fi'

const InboxPage: NextPage = () => (
  <>
    <Head>
      <title>Inbox Page</title>
    </Head>
    <div className="flex flex-col h-screen">
      <header className="flex flex-shrink-0">
        <div className="flex-shrink-0 w-64 px-4 py-3 bg-gray-800">
          <button className="flex items-center w-full">
            <Image
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1613294134043-19ca249c6363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=144&q=80"
              layout="fixed"
              objectFit="cover"
              width="32"
              height="32"
              alt="avatar"
            />
            <span className="ml-4 mr-2 text-sm font-medium text-white">Monica White</span>
            <BiChevronDown className="ml-auto text-white" />
          </button>
        </div>
        <div className="flex items-center justify-between flex-1 px-6 bg-gray-700">
          <nav className="flex space-x-3">
            <a
              className="px-3 py-2 text-sm font-medium leading-none text-white transition-colors duration-300 bg-gray-800 rounded-lg hover:bg-gray-600"
              href="#"
            >
              Mailbox
            </a>
            <a
              className="px-3 py-2 text-sm font-medium leading-none text-white transition-colors duration-300 rounded-lg hover:bg-gray-600"
              href="#"
            >
              Customers
            </a>
            <a
              className="px-3 py-2 text-sm font-medium leading-none text-white transition-colors duration-300 rounded-lg hover:bg-gray-600"
              href="#"
            >
              Reporting
            </a>
            <a
              className="px-3 py-2 text-sm font-medium leading-none text-white transition-colors duration-300 rounded-lg hover:bg-gray-600"
              href="#"
            >
              Manage
            </a>
          </nav>
          <div className="flex items-center ">
            <div className="relative w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <BiSearch className="w-5 h-5 text-gray-500 fill-current" />
              </span>
              <input
                className="block w-full py-2 pr-4 text-sm text-white placeholder-gray-400 bg-gray-900 rounded-lg pl-9 focus:bg-white focus:text-gray-900 focus-placeholder-600 focus:outline-none"
                placeholder="Search"
              />
            </div>
            <button className="ml-6 text-gray-400 transition-colors duration-300 hover:text-gray-200">
              <BiBell className="w-5 h-5" />
            </button>
            <button className="ml-4 text-gray-400 transition-colors duration-300 hover:text-gray-200">
              <BsQuestionCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 p-6 overflow-y-auto bg-gray-100">
          <nav>
            <h2 className="text-xs font-semibold tracking-wide text-gray-600 uppercase">Mailboxes</h2>
            <div className="mt-4 space-y-2">
              <a
                className="flex items-center justify-between px-3 py-2 -mx-3 text-sm font-medium text-gray-900 transition-colors duration-300 bg-gray-200 rounded-lg hover:text-gray-900 hover:bg-gray-200"
                href="#"
              >
                <span className="inline-flex items-center space-x-2">
                  <FiInbox className="w-5 h-5 text-gray-700" />
                  <span className="">Inbox</span>
                </span>
                <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">6</span>
              </a>
              <a
                className="flex items-center justify-between px-3 py-2 -mx-3 text-sm font-medium text-gray-600 transition-colors duration-300 rounded-lg hover:bg-gray-200 hover:text-gray-900"
                href="#"
              >
                <span className="inline-flex items-center space-x-2">
                  <BiFlag className="w-5 h-5" />
                  <span className="">Flaged</span>
                </span>
              </a>
              <a
                className="flex items-center justify-between px-3 py-2 -mx-3 text-sm font-medium text-gray-600 transition-colors duration-300 rounded-lg hover:bg-gray-200 hover:text-gray-900"
                href="#"
              >
                <span className="inline-flex items-center space-x-2">
                  <BiEdit className="w-5 h-5" />
                  <span className="">Drafts</span>
                </span>
                <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">2</span>
              </a>
              <a
                className="flex items-center justify-between px-3 py-2 -mx-3 text-sm font-medium text-gray-600 transition-colors duration-300 rounded-lg hover:bg-gray-200 hover:text-gray-900"
                href="#"
              >
                <span className="inline-flex items-center space-x-2">
                  <BiUserCircle className="w-5 h-5" />
                  <span className="">Assigned</span>
                </span>
                <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">1</span>
              </a>
              <a
                className="flex items-center justify-between px-3 py-2 -mx-3 text-sm font-medium text-gray-600 transition-colors duration-300 rounded-lg hover:bg-gray-200 hover:text-gray-900"
                href="#"
              >
                <span className="inline-flex items-center space-x-2">
                  <BiCheckCircle className="w-5 h-5" />
                  <span className="">Closed</span>
                </span>
              </a>
              <a
                className="flex items-center justify-between px-3 py-2 -mx-3 text-sm font-medium text-gray-600 transition-colors duration-300 rounded-lg hover:bg-gray-200 hover:text-gray-900"
                href="#"
              >
                <span className="inline-flex items-center space-x-2">
                  <BiTrashAlt className="w-5 h-5" />
                  <span className="">Junk</span>
                </span>
              </a>
            </div>
            <h2 className="mt-8 text-xs font-semibold tracking-wide text-gray-600 uppercase">Folders</h2>
            <div className="flex flex-col mt-4 space-y-4">
              <a className="text-sm font-medium text-gray-700" href="#">
                Refunds
              </a>
              <a className="text-sm font-medium text-gray-700" href="#">
                Discounts
              </a>
              <a className="text-sm font-medium text-gray-700" href="#">
                Bugs
              </a>
            </div>
          </nav>
        </aside>
        <main className="flex flex-1 bg-gray-200">
          <div className="relative flex flex-col flex-grow w-full max-w-xs border-l border-r border-gray-300">
            <div className="flex items-center justify-between flex-shrink-0 px-4 py-2 border-b border-gray-300">
              <button className="flex items-center text-xs font-semibold text-gray-600">
                Sorted by Date
                <BiChevronDown className="ml-1 text-gray-500" />
              </button>
              <button>
                <BiSortUp className="w-6 h-6 text-gray-500 fill-current" />
              </button>
            </div>
            <div className="flex flex-col flex-grow overflow-y-auto">
              <a href="#" className="px-6 pt-3 pb-4 bg-white">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">Gloria Robertson</span>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore sed natus? Necessitatibus
                  consequatur nesciunt suscipit nihil ipsa. Porro, sunt. Quod magni, dolor necessitatibus vero inventore
                  maxime ad? Sed, esse.
                </p>
              </a>
              <a href="#" className="px-6 pt-3 pb-4 bg-gray-200 border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">Gloria Robertson</span>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore sed natus? Necessitatibus
                  consequatur nesciunt suscipit nihil ipsa. Porro, sunt. Quod magni, dolor necessitatibus vero inventore
                  maxime ad? Sed, esse.
                </p>
              </a>
              <a href="#" className="px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">Gloria Robertson</span>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore sed natus? Necessitatibus
                  consequatur nesciunt suscipit nihil ipsa. Porro, sunt. Quod magni, dolor necessitatibus vero inventore
                  maxime ad? Sed, esse.
                </p>
              </a>
              <a href="#" className="px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">Gloria Robertson</span>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore sed natus? Necessitatibus
                  consequatur nesciunt suscipit nihil ipsa. Porro, sunt. Quod magni, dolor necessitatibus vero inventore
                  maxime ad? Sed, esse.
                </p>
              </a>
              <a href="#" className="px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">Gloria Robertson</span>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore sed natus? Necessitatibus
                  consequatur nesciunt suscipit nihil ipsa. Porro, sunt. Quod magni, dolor necessitatibus vero inventore
                  maxime ad? Sed, esse.
                </p>
              </a>
              <a href="#" className="px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">Gloria Robertson</span>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore sed natus? Necessitatibus
                  consequatur nesciunt suscipit nihil ipsa. Porro, sunt. Quod magni, dolor necessitatibus vero inventore
                  maxime ad? Sed, esse.
                </p>
              </a>
              <a href="#" className="px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">Gloria Robertson</span>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore sed natus? Necessitatibus
                  consequatur nesciunt suscipit nihil ipsa. Porro, sunt. Quod magni, dolor necessitatibus vero inventore
                  maxime ad? Sed, esse.
                </p>
              </a>
              <a href="#" className="px-6 pt-3 pb-4 bg-white border-t">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-gray-900">Gloria Robertson</span>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <p className="text-sm text-gray-900">Refund</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore sed natus? Necessitatibus
                  consequatur nesciunt suscipit nihil ipsa. Porro, sunt. Quod magni, dolor necessitatibus vero inventore
                  maxime ad? Sed, esse.
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-1 w-0">
            <div className="relative flex-shrink-0 shadow-md">
              <div className="flex items-center justify-between px-5 py-4 bg-gray-100 border-b">
                <div className="flex items-center space-x-6">
                  <button>
                    <BiArrowBack className="w-6 h-6 text-gray-600 fill-current stroke-current" />
                  </button>
                  <button>
                    <BiTag className="w-6 h-6 text-gray-600 fill-current stroke-current" />
                  </button>
                  <button>
                    <BiUserCircle className="w-6 h-6 text-gray-600 fill-current stroke-current" />
                  </button>
                  <button>
                    <BiArchiveIn className="w-6 h-6 text-gray-600 fill-current stroke-current" />
                  </button>
                  <button>
                    <BiDotsHorizontalRounded className="w-6 h-6 text-gray-600 fill-current stroke-current" />
                  </button>
                </div>
                <div className="flex space-x-2 itmes-center">
                  <BiChevronDown className="w-8 h-8 text-gray-600 fill-current stroke-current" />
                  <BiChevronUp className="w-8 h-8 text-gray-600 fill-current stroke-current" />
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4 space-x-4 bg-white">
                <h3 className="text-xl text-gray-900 truncate">Re: Student discount?</h3>
                <div className="flex-shrink-0 space-x-2">
                  <span>#1428</span>
                  <span className="px-2 py-1 text-sm font-semibold leading-none text-green-900 bg-green-200 rounded-full">
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="p-2.5 space-y-2 flex-1 overflow-y-auto">
              <article className="flex flex-col px-10 pt-6 pb-8 space-y-6 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Joe Armstrong</span> <span className="text-gray-600">wrote</span>
                  </p>
                  <div className="flex items-center space-x-5">
                    <span className="text-sm text-gray-600">Yesterdat at 7:24 AM</span>
                    <Image
                      className="rounded-full w-9 h-9"
                      src="https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=144&q=80"
                      layout="fixed"
                      objectFit="cover"
                      width="36"
                      height="36"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-800">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea eius, vero id unde consequuntur
                    eum ex minus aliquam veniam cumque optio rerum sint, sit ad ducimus ipsam odit quasi.
                  </p>
                </div>
              </article>
              <article className="flex flex-col px-10 pt-6 pb-8 space-y-6 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Monica White</span> <span className="text-gray-600">reply</span>
                  </p>
                  <div className="flex items-center space-x-5">
                    <span className="text-sm text-gray-600">Yesterdat at 7:24 AM</span>
                    <Image
                      className="rounded-full w-9 h-9"
                      src="https://images.unsplash.com/photo-1613294134043-19ca249c6363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=144&q=80"
                      layout="fixed"
                      objectFit="cover"
                      width="36"
                      height="36"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="text-sm prose-2xl text-gray-800">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea eius, vero id unde consequuntur
                    eum ex minus aliquam veniam cumque optio rerum sint, sit ad ducimus ipsam odit quasi.
                  </p>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea eius, vero id unde consequuntur
                    eum ex minus aliquam veniam cumque optio rerum sint, sit ad ducimus ipsam odit quasi.
                  </p>
                  <p className="font-semibold text-gray-900 ">Monica White</p>
                  <p className="">Customer Service</p>
                </div>
              </article>
              <article className="flex flex-col px-10 pt-6 pb-8 space-y-6 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Joe Armstrong</span> <span className="text-gray-600">reply</span>
                  </p>
                  <div className="flex items-center space-x-5">
                    <span className="text-sm text-gray-600">Yesterdat at 7:24 AM</span>
                    <Image
                      className="rounded-full w-9 h-9"
                      src="https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=144&q=80"
                      layout="fixed"
                      objectFit="cover"
                      width="36"
                      height="36"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-800">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea eius, vero id unde consequuntur
                    eum ex minus aliquam veniam cumque optio rerum sint, sit ad ducimus ipsam odit quasi.
                  </p>
                </div>
              </article>
              <article className="flex flex-col px-10 pt-6 pb-8 space-y-6 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Monica White</span> <span className="text-gray-600">reply</span>
                  </p>
                  <div className="flex items-center space-x-5">
                    <span className="text-sm text-gray-600">Yesterdat at 7:24 AM</span>
                    <Image
                      className="rounded-full w-9 h-9"
                      src="https://images.unsplash.com/photo-1613294134043-19ca249c6363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=144&q=80"
                      layout="fixed"
                      objectFit="cover"
                      width="36"
                      height="36"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="text-sm prose-2xl text-gray-800">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea eius, vero id unde consequuntur
                    eum ex minus aliquam veniam cumque optio rerum sint, sit ad ducimus ipsam odit quasi.
                  </p>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea eius, vero id unde consequuntur
                    eum ex minus aliquam veniam cumque optio rerum sint, sit ad ducimus ipsam odit quasi.
                  </p>
                  <p className="font-semibold text-gray-900 ">Monica White</p>
                  <p className="">Customer Service</p>
                </div>
              </article>
            </div>
          </div>
        </main>
      </div>
    </div>
  </>
)

export default InboxPage
