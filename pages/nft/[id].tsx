import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import Image from 'next/image'
import golem from '../assets/golem.jpg'

function NFTDropPage() {
  // Auth

  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  console.log(address)
  // -----

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left */}
      <div
        className="bg-gradient-to-br 
          from-cyan-800 to-rose-500 lg:col-span-4"
      >
        <div
          className="flex flex-col items-center
              justify-center py-2 lg:min-h-screen
              "
        >
          <div className="mt-10 rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <div className='w-44 h-44 relative lg:h-96 lg:w-72'>
              <Image className="rounded-xl object-cover" src={golem} objectFit="cover" layout='fill'/>
            </div>
          </div>

          {/* <Image
                    src={logo}
                  /> */}

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">Divine Leo</h1>
            <h2 className="text-xl text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              repellendus natus aspernatur dolorum, ratione porro in.
              Consequuntur, labore. Ipsam atque sed consequuntur ex tempora,
              possimus dolorem ratione! Sequi, velit hic!
            </h2>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex items-center justify-between">
          <h1
            className="w-52 cursor-pointer text-xl font-extralight sm:w-80
                  "
          >
            The{' '}
            <span className="font-extrabold underline decoration-blue-600/50">
              Divine Leo
            </span>{' '}
            NFT Market place
          </h1>

          <button
            onClick={() => (address ? disconnect():connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign out' : 'Sign in'}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className='text-center text-sm text-rose-500'>You're logged in the wallet{address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
        )}

        {/* content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 ">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The DivineLeo Royality club | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">13/21 Nfts claimed</p>
        </div>

        {/* Mint button */}
        <button className="h-16 w-full rounded-full bg-red-600 font-bold text-white">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
