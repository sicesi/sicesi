import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SiteCard from "./site-card"

const SiteList = () => {
  return (
    <div class="flex justify-between content-between flex-wrap mt-10 space-y-10 md:mt-20 md:space-y-20 lg:mt-32 lg:space-y-32">
      {
        /* PromoAlert */
        <SiteCard
          title="PromoAlert"
          link="https://www.promoalert.com/"
          pageviews="1,2M"
          visits="600K"
          description="Notre but, simplifier le quotidien de milliers de consommateurs : annuaire d'enseignes, prospectus en ligne, offres promotionnelles, etc."
          angle="-2"
        >
          <StaticImage
            src="../images/sites/promoalert.png"
            height={330}
            alt="PromoAlert"
          />
        </SiteCard>
      }
      {
        /* Masculin */
        <SiteCard
          title="Masculin"
          link="https://www.masculin.com/"
          pageviews="700K"
          visits="400K"
          description="L'actualité au masculin. Nos essais produits, guides d'achat et sujets de sociétés servent une variété toujours grandissante de visiteurs."
          angle="1"
        >
          <StaticImage
            src="../images/sites/masculin.png"
            height={340}
            alt="#9CA3AF"
          />
        </SiteCard>
      }
      {
        /* LaptopSpirit */
        <SiteCard
          title="LaptopSpirit"
          link="https://www.laptopspirit.fr/"
          pageviews="600K"
          visits="200K"
          description="La référence en matière d'ordinateurs portables : actualité, tests &amp; guides d'achat. Nous sélectionnons quotidiennement les meilleures offres PC portable du marché pour nos visiteurs."
          angle="-1"
        >
          <StaticImage
            src="../images/sites/laptopspirit.png"
            height={350}
            alt="LaptopSpirit"
          />
        </SiteCard>
      }
      {
        /* ElectroConseil */
        <SiteCard
          title="ElectroConseil"
          link="http://electroconseil.fr/"
          pageviews="30K"
          visits="20K"
          description="Actualité, guides d'achat et bons plans électro-ménager au quotidien pour servir nos utilisateurs."
          angle="2"
        >
          <StaticImage
            src="../images/sites/electroconseil.png"
            height={360}
            alt="ElectroConseil"
          />
        </SiteCard>
      }
    </div>
  )
}

export default SiteList
