import * as React from "react"
import { Link } from "gatsby"
import SicesiLogo from "./sicesi.inline.svg"

const Header = () => (
  <header>
    <div className="px-8 md:px-12 lg:px-16 py-8 max-w-4xl mx-auto my-0">
      <h1 className="m-0">
        <Link
          to="/"
          aria-label="Retour à l'accueil"
          className="text-white no-underline"
        >
          <SicesiLogo className="logo h-4 md:h-5 w-auto" />
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
