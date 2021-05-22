import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksPage = () => (
  <Layout>
    <SEO title="Merci de nous avoir contacté." />
    <h1 className="text-4xl sm:text-5xl sm:leading-none tracking-tight mt-16 mb-6 font-extrabold text-sicesiBlue">
      Message reçu !
    </h1>
    <p className="text-lg">Nous vous répondrons sous peu, à bientôt.</p>
    <Link
      to="/"
      aria-label="Retour à l'accueil"
      className="transition duration-150 ease-in-out inline-block bg-gradient-to-b from-sicesiOrange to-orange-600 opacity-90 hover:opacity-100 text-white font-bold px-4 py border-0 border-transparent text-base font-medium rounded-full hover:bg-orange-600 md:text-lg py-2 px-7"
    >
      Retour à l'accueil
    </Link>
  </Layout>
)

export default ThanksPage
