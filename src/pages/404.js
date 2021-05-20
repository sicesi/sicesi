import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const browser = typeof window !== "undefined" && window

const NotFoundPage = () => {
  return (
    browser && (
      <Layout>
        <SEO title="404: Page introuvable" />
        <h1 className="text-sicesiGray text-9xl font-extrabold mt-16">
          404<span className="text-sicesiOrange">.</span>
        </h1>
        <p className="text-xl">Cette page est introuvable</p>
        <Link
          to="/"
          className="transition duration-150 ease-in-out inline-block bg-gradient-to-b from-sicesiOrange to-orange-600 opacity-90 hover:opacity-100 text-white font-bold px-4 py border-0 border-transparent text-base font-medium rounded-full hover:bg-orange-600 md:text-lg py-2 px-7"
        >
          Retour à l'accueil
        </Link>
      </Layout>
    )
  )
}
export default NotFoundPage
