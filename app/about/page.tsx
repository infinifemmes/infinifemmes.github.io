import { title } from "@/components/primitives";
import {User} from "@nextui-org/user";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function AboutPage() {
  return (
    <div>
      <section className="flex w-full flex-col items-left justify-center gap-4 py-8 md:py-10">

        <span className={title({ size:"sm", color: "violet" })}>Présentation&nbsp;</span>
        
        <div className="text-justify">
          <User   
            name="Volatiana Landre"
            description="Fondatrice & Professeure"
            avatarProps={{
              isBordered: true,  src: "bio-picture.png", size: "lg"
            }}
          />
          <p>Volatiana a une histoire simple. Originaire du monde du Luxe, on pourrait penser sa carrière professionnelle comme cahotique, longue et sinueuse.
          Pourtant elle a toujours tout fait guidée par la passion.
          Elle a bâti sa carrière en tant que danseuse et professeure de danse. Dès l&apos;âge de 5 ans, elle s&apos;est imprégnée de la rigueur du ballet classique sous la tutelle de Michèle Lebert (@ludivinedoumergue à @rythmeetdanseherblay), à l&apos;Opéra Garnier de Paris en 1989 et à New York avec la compagnie JAY-T (où elle a fait une tournée dans l&apos;état de New York en 2001). </p><p>
          En 2014, elle se spécialise en &quot;Massage Bébé et Relation Mère-Enfant&quot; (formation De Gasquet). Sa propre expérience de la maternité renforce son engagement envers le soutien post-partum, complété par une formation en &quot;Sport, Périnée et Maternité&quot; De Gasquet en 2016. Aujourd&apos;hui, elle relie ses passions pour la danse et le mouvement à travers le Yoga Prénatal, le Yoga Postnatal, les Sessions Senior et les Soins Rebozo ; offrant ainsi un soutien holistique à toutes les étapes importantes de la vie de femme.
          </p>
          <p>Elle forme aujourd&apos;hui des Professionnels de la Santé, des Professeurs de Yoga au travers de ses Masterclass, de YTTC 200h, 50h, 35h et des Retraites &quot;au Clair de Lune&quot; en Bourgogne, tous éclairés par la méthode De Gasquet.</p>
        </div>
      
        
        {/*<br />
        <span className={title({ size:"sm", color: "violet" })}>Pourquoi Infini Femmes ?&nbsp;</span>
      
        <div className="text-justify">
        TBD
        </div>*/}

        <br />
        <span className={title({ size:"sm", color: "violet" })}>Partenariats&nbsp;</span>
      
        <Card className="max-w-[810px]">
          <CardBody>
            <p><b>Yoga et Santé</b> : Sages-femmes, Gynécologues, Kinésithérapeutes, Ostéopathes, Hypnothérapeutes, etc.</p>
          </CardBody>
        </Card>

        <Card className="max-w-[810px]">
          <CardBody>
            <p><b>Yoga et Entreprises</b> : Maternités, Hôpitaux, Cercle de l&apos;Union Interalliée, TF1, France Télévisions, Bouygues, BNP Paribas Real Estate, Mairie d&apos;Issy Les Moulineaux (event &quot;Bien dans sa tête, bien dans son corps&quot;), Salles de sport (<a href="https://ritm-sport.fr/" target="_new">RITM</a>, <a href="https://www.healthy-warriors.com/" target="_new">Healthy Warriors</a>, <a href="https://origynandco.com/" target="_new">Origyn</a>), etc.</p>
          </CardBody>
        </Card>


      </section>
  </div>
  );
}
