import Head from 'next/head'
import Image from 'next/image'
import {
  BiArchiveIn,
  BiArrowBack,
  BiBell,
  BiCheckCircle,
  BiChevronDown,
  BiChevronUp,
  BiDotsHorizontalRounded,
  BiEdit,
  BiFlag,
  BiSearch,
  BiSortUp,
  BiTag,
  BiTrashAlt,
  BiUserCircle,
} from 'react-icons/bi'
import { BsQuestionCircle } from 'react-icons/bs'
import { FiInbox } from 'react-icons/fi'

import type { NextPage } from 'next'

const InboxPage: NextPage = () => (
  <>
    <Head>
      <title>Inbox Page</title>
    </Head>
    <div className="flex h-screen flex-col">
      <header className="flex flex-shrink-0">
        <div className="w-64 flex-shrink-0 bg-gray-800 px-4 py-3">
          <button className="flex w-full items-center">
            <Image
              className="h-8 w-8 rounded-full"
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
        <div className="flex flex-1 items-center justify-between bg-gray-700 px-6">
          <nav className="flex space-x-3">
            <a
              className="rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium leading-none text-white transition-colors duration-300 hover:bg-gray-600"
              href="#">
              Mailbox
            </a>
            <a
              className="rounded-lg px-3 py-2 text-sm font-medium leading-none text-white transition-colors duration-300 hover:bg-gray-600"
              href="#">
              Customers
            </a>
            <a
              className="rounded-lg px-3 py-2 text-sm font-medium leading-none text-white transition-colors duration-300 hover:bg-gray-600"
              href="#">
              Reporting
            </a>
            <a
              className="rounded-lg px-3 py-2 text-sm font-medium leading-none text-white transition-colors duration-300 hover:bg-gray-600"
              href="#">
              Manage
            </a>
          </nav>
          <div className="flex items-center ">
            <div className="relative w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <BiSearch className="h-5 w-5 fill-current text-gray-500" />
              </span>
              <input
                className="focus-placeholder-600 block w-full rounded-lg bg-gray-900 py-2 pr-4 pl-9 text-sm text-white placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:outline-none"
                placeholder="Search"
              />
            </div>
            <button className="ml-6 text-gray-400 transition-colors duration-300 hover:text-gray-200">
              <BiBell className="h-5 w-5" />
            </button>
            <button className="ml-4 text-gray-400 transition-colors duration-300 hover:text-gray-200">
              <BsQuestionCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 overflow-y-auto bg-gray-100 p-6">
          <nav>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-600">Mailboxes</h2>
            <div className="mt-4 space-y-2">
              <a
                className="-mx-3 flex items-center justify-between rounded-lg bg-gray-200 px-3 py-2 text-sm font-medium text-gray-900 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900"
                href="#">
                <span className="inline-flex items-center space-x-2">
                  <FiInbox className="h-5 w-5 text-gray-700" />
                  <span className="">Inbox</span>
                </span>
                <span className="rounded-full bg-gray-300 px-3 py-1 text-xs font-semibold text-gray-700">6</span>
              </a>
              <a
                className="-mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900"
                href="#">
                <span className="inline-flex items-center space-x-2">
                  <BiFlag className="h-5 w-5" />
                  <span className="">Flaged</span>
                </span>
              </a>
              <a
                className="-mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900"
                href="#">
                <span className="inline-flex items-center space-x-2">
                  <BiEdit className="h-5 w-5" />
                  <span className="">Drafts</span>
                </span>
                <span className="rounded-full bg-gray-300 px-3 py-1 text-xs font-semibold text-gray-700">2</span>
              </a>
              <a
                className="-mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900"
                href="#">
                <span className="inline-flex items-center space-x-2">
                  <BiUserCircle className="h-5 w-5" />
                  <span className="">Assigned</span>
                </span>
                <span className="rounded-full bg-gray-300 px-3 py-1 text-xs font-semibold text-gray-700">1</span>
              </a>
              <a
                className="-mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900"
                href="#">
                <span className="inline-flex items-center space-x-2">
                  <BiCheckCircle className="h-5 w-5" />
                  <span className="">Closed</span>
                </span>
              </a>
              <a
                className="-mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900"
                href="#">
                <span className="inline-flex items-center space-x-2">
                  <BiTrashAlt className="h-5 w-5" />
                  <span className="">Junk</span>
                </span>
              </a>
            </div>
            <h2 className="mt-8 text-xs font-semibold uppercase tracking-wide text-gray-600">Folders</h2>
            <div className="mt-4 flex flex-col space-y-4">
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
          <div className="relative flex w-full max-w-xs flex-grow flex-col border-l border-r border-gray-300">
            <div className="flex flex-shrink-0 items-center justify-between border-b border-gray-300 px-4 py-2">
              <button className="flex items-center text-xs font-semibold text-gray-600">
                Sorted by Date
                <BiChevronDown className="ml-1 text-gray-500" />
              </button>
              <button>
                <BiSortUp className="h-6 w-6 fill-current text-gray-500" />
              </button>
            </div>
            <div className="flex flex-grow flex-col overflow-y-auto">
              <a href="#" className="bg-white px-6 pt-3 pb-4">
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
              <a href="#" className="border-t bg-gray-200 px-6 pt-3 pb-4">
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
              <a href="#" className="border-t bg-white px-6 pt-3 pb-4">
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
              <a href="#" className="border-t bg-white px-6 pt-3 pb-4">
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
              <a href="#" className="border-t bg-white px-6 pt-3 pb-4">
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
              <a href="#" className="border-t bg-white px-6 pt-3 pb-4">
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
              <a href="#" className="border-t bg-white px-6 pt-3 pb-4">
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
              <a href="#" className="border-t bg-white px-6 pt-3 pb-4">
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
          <div className="flex w-0 flex-1 flex-col">
            <div className="relative flex-shrink-0 shadow-md">
              <div className="flex items-center justify-between border-b bg-gray-100 px-5 py-4">
                <div className="flex items-center space-x-6">
                  <button>
                    <BiArrowBack className="h-6 w-6 fill-current stroke-current text-gray-600" />
                  </button>
                  <button>
                    <BiTag className="h-6 w-6 fill-current stroke-current text-gray-600" />
                  </button>
                  <button>
                    <BiUserCircle className="h-6 w-6 fill-current stroke-current text-gray-600" />
                  </button>
                  <button>
                    <BiArchiveIn className="h-6 w-6 fill-current stroke-current text-gray-600" />
                  </button>
                  <button>
                    <BiDotsHorizontalRounded className="h-6 w-6 fill-current stroke-current text-gray-600" />
                  </button>
                </div>
                <div className="itmes-center flex space-x-2">
                  <BiChevronDown className="h-8 w-8 fill-current stroke-current text-gray-600" />
                  <BiChevronUp className="h-8 w-8 fill-current stroke-current text-gray-600" />
                </div>
              </div>
              <div className="flex items-center justify-between space-x-4 bg-white px-5 py-4">
                <h3 className="truncate text-xl text-gray-900">Re: Student discount?</h3>
                <div className="flex-shrink-0 space-x-2">
                  <span>#1428</span>
                  <span className="rounded-full bg-green-200 px-2 py-1 text-sm font-semibold leading-none text-green-900">
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto p-2.5">
              <article className="flex flex-col space-y-6 rounded-lg bg-white px-10 pt-6 pb-8 shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Joe Armstrong</span> <span className="text-gray-600">wrote</span>
                  </p>
                  <div className="flex items-center space-x-5">
                    <span className="text-sm text-gray-600">Yesterdat at 7:24 AM</span>
                    <Image
                      className="h-9 w-9 rounded-full"
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
              <article className="flex flex-col space-y-6 rounded-lg bg-white px-10 pt-6 pb-8 shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Monica White</span> <span className="text-gray-600">reply</span>
                  </p>
                  <div className="flex items-center space-x-5">
                    <span className="text-sm text-gray-600">Yesterdat at 7:24 AM</span>
                    <Image
                      className="h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1613294134043-19ca249c6363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=144&q=80"
                      layout="fixed"
                      objectFit="cover"
                      width="36"
                      height="36"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="prose-2xl text-sm text-gray-800">
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
              <article className="flex flex-col space-y-6 rounded-lg bg-white px-10 pt-6 pb-8 shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Joe Armstrong</span> <span className="text-gray-600">reply</span>
                  </p>
                  <div className="flex items-center space-x-5">
                    <span className="text-sm text-gray-600">Yesterdat at 7:24 AM</span>
                    <Image
                      className="h-9 w-9 rounded-full"
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
              <article className="flex flex-col space-y-6 rounded-lg bg-white px-10 pt-6 pb-8 shadow">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    <span className="text-gray-900">Monica White</span> <span className="text-gray-600">reply</span>
                  </p>
                  <div className="flex items-center space-x-5">
                    <span className="text-sm text-gray-600">Yesterdat at 7:24 AM</span>
                    <Image
                      className="h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1613294134043-19ca249c6363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=144&q=80"
                      layout="fixed"
                      objectFit="cover"
                      width="36"
                      height="36"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="prose-2xl text-sm text-gray-800">
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
