import * as React from "react"
import PropTypes from "prop-types"

const SiteCard = ({
  children,
  title,
  link,
  visits,
  pageviews,
  description,
  angle,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col md:flex-row"
    >
      <div className="w-auto transform scale-80 lg:scale-100 w-72 md:-ml-3 lg:w-auto lg:ml-auto">
        <div
          className="pin"
          style={{
            position: "relative",
            left: "165px",
            top: "5px",
            transform: "scale(0.8) rotate(" + angle + "deg)",
          }}
        ></div>
        <div
          className="shadow-light mr-14 bg-white p-2 w-72"
          style={{ transform: "rotate(" + angle + "deg)", height: "234px" }}
        >
          {children}
        </div>
      </div>
      <div className="w-auto transform scale-90 lg:scale-100">
        <ul className="flex flex-col justify-center h-full">
          <li className="max-w-sm mb-3">
            <h2 className="text-3xl mb-2 font-extrabold text-sicesiGray tracking-tight">
              {title}
            </h2>
            <p className="text-gray-500">{description}</p>
          </li>
          <li className="max-w-sm text-gray-500 flex space-x-10 mt-2">
            <div className="flex flex-col">
              <div className="text-2xl text-sicesiBlue leading-5 font-extrabold">
                {pageviews}
              </div>
              <div className="text-xs font-semibold text-blueGray-400">
                Pages vues<span className="text-sicesiOrange">*</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-2xl text-sicesiBlue leading-5 font-extrabold">
                {visits}
              </div>
              <div className="text-xs font-semibold text-blueGray-400">
                Visites<span className="text-sicesiOrange">*</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </a>
  )
}

SiteCard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteCard
