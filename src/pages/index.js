import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"
import SiteList from "../components/site-list"
import Hook from "../components/hook"

const IndexPage = () => (
  <Layout>
    <SEO title="Sicesi - Médias &amp; services indépendants, depuis 2006" />
    <Hook />
    <SiteList />
    <ContactForm />
  </Layout>
)

export default IndexPage
