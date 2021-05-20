import * as React from "react"
import SicesiLogo from "./sicesi.inline.svg"
import BackgroundWaves from "./waves.inline.svg"
import TwitterLogo from "./twitter.inline.svg"
import GithubLogo from "./github.inline.svg"

const Footer = () => (
  <footer className="mt-16 text-gray-100 w-full mt-16">
    <BackgroundWaves className="-mx-8" />
    <div className="bg-gray-700">
      <div className="px-8 md:px-12 lg:px-16 py-8 max-w-4xl mx-auto my-0 flex justify-between items-center">
        <div className="flex">
          <SicesiLogo className="logo h-3 md:h-5 w-auto filter opacity-50 brightness-full" />
          <span className="font-light text-sm leading-6 text-gray-400 ml-2 hidden md:inline-block">
            © {new Date().getFullYear()}
          </span>
        </div>
        <span className="text-xs md:text-sm italic font-light text-gray-400">
          <span className="text-sicesiOrange">*</span> moyennes mensuelles
        </span>
        <div className="flex">
          <a
            href="https://twitter.com/sicesi_fr"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TwitterLogo className="p-2 h-8 md:h-10 w-auto filter opacity-50 brightness-full" />
          </a>
          <a
            href="https://github.com/sicesi/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubLogo className="ml p-2 h-8 md:h-10 w-auto filter opacity-50 brightness-full" />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
