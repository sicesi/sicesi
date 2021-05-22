import React from "react"
import SendIcon from "./send.inline.svg"

class ContactForm extends React.Component {
  render() {
    return (
      <div className="" id="contact">
        <div className="relative">
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 mt-16">
            <div className="p-0 lg:col-span-2 lg:pr-8 lg:mt-16 lg:pb-20 xl:pr-12 p-0 md:pt-8">
              <div className="max-w-lg mx-auto text-left lg:text-right">
                <h2 className="text-3xl mb-2 font-extrabold tracking-tight text-sicesiGray sm:text-3xl">
                  Contactez-nous<span class="text-sicesiOrange">.</span>
                </h2>
                <p className="mt-3 text-base md:text-lg text-gray-500">
                  Vous avez des questions ?
                  <br />
                  On vous écoute !
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 lg:mt-16 lg:pb-20 lg:px-8 xl:pl-4 p-0">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <form
                  action="https://form.taxi/s/w4uhcghs"
                  method="POST"
                  className="mt-8 flex flex-col space-y-4"
                >
                  <div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-sicesiOrange focus:border-sicesiOrange border-transparent rounded-md shadow-inner"
                        required
                        placeholder="Nom*"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="_replyto"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-sicesiOrange focus:border-sicesiOrange border-transparent rounded-md shadow-inner"
                        required
                        placeholder="Email*"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-sicesiOrange focus:border-sicesiOrange border-transparent rounded-md shadow-inner"
                        defaultValue={""}
                        placeholder="Message*"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      aria-label="Envoyer"
                      className="transition duration-150 ease-in-out flex items-center justify-center bg-gradient-to-b from-sicesiOrange to-orange-600 opacity-90 text-white p-4 border-0 border-transparent rounded-full hover:opacity-100"
                    >
                      <SendIcon className="h-5" />
                    </button>
                  </div>
                  <input
                    type="hidden"
                    name="_next"
                    value="http://localhost:8000/merci"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_lang" value="fr" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Sicesi.fr - Nouveau message"
                  />
                  <input type="text" name="_miel" className="hidden" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
