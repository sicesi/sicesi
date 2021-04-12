import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <form action="https://formsubmit.co/alex@sicesi.fr" method="POST">
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Nom
        <input type="text" name="name" required />
      </label>
      <label>
        Objet
        <input type="text" name="_subject" id="subject" required />
      </label>
      <label>
        Message
        <input type="text" name="message" required />
      </label>
      <button type="submit">ENVOYER</button>
      <input type="reset" value="Effacer" />
      <input type="hidden" name="_next" value="localhost:8000/merci" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: `none` }} />
    </form>
    <Link to="/">Go to index</Link>
  </Layout>
)

export default ContactPage
