import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (    
    <div>
    <head>
        <title>Mercado de NFT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFT Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-blue-500">
              Mercado
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-blue-500">
              Vender NFTs
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-blue-500">
              Meus NFTs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-blue-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace
