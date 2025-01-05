import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

export default function Job1Page() {

    return (
        <div>
          <section className="flex w-full flex-col items-left justify-center gap-4 py-8 md:py-10">

            <span className={title({ size:"sm", color: "blue" })}>Assistant.e Communication Digitale&nbsp;</span>

        <div className="text-left">
        Infini Femmes est une petite structure créée par et pour les femmes et qui les accompagnent à différentes étapes charnières de la Vie.
En prénatal, dès la sortie de couches et en postnatal. On fait aussi appel aux services d&apos;Infini femmes en pré-menaupose et ménaupose.

Et ce, à travers le Yoga, les massages Maman-bébé, les Massages Rebozo, l&apos;Hypnonaissance et la Méditation Guidée.

Des formations &quot;Yoga, Bien-être et Périnée&quot;©️ sont construites pour les Paramédicaux et les Gynécologues et d&apos;autres Formations, Masterclass et Ateliers ont ete créés pour toutes celles & ceux qui souhaitent découvrir les bienfaits du Yoga selon la Méthode De Gasquet.

<p>&nbsp;</p><p><b>MISSIONS PRINCIPALES</b></p>

<p>En tant qu&apos;Assistant.e Communication Digitale, vous travaillerez en étroite collaboration avec la Fondatrice pour contribuer à l&apos;élaboration de la Communication en ligne.</p>

<p>&nbsp;</p><p>Vous aurez pour missions :</p>

<p>&nbsp;</p><p><b>AIDE A LA RÉALISATION DU SITE INTERNET</b></p>
<ul>
<li>▪︎ Participer à la conception et à la mise en page du site web,</li>
<li>▪︎ Contribuer à l&apos;optimisation du contenu pour améliorer le référencement naturel (SEO)</li>
<li>▪︎ Assurer une veille concurrentielle et proposer des améliorations pour le site.</li>
</ul>
<p>&nbsp;</p><p><b>GESTION DU CONTENU DES RESEAUX SOCIAUX</b></p>
<ul>
<li>▪︎ Créer, planifier et publier du contenu sur nos plateformes (Facebook, Instagram, LinkedIn, etc.)</li>
<li>▪︎ Participer à la collaboration du contenu et au calendrier éditorial</li>
<li>▪︎ Animer et Modérer les communautés en ligne pour accroître l&apos;engagement</li>
<li>▪︎ Analyser les performances des publications et proposer des actions d&apos;amélioration</li>
</ul>
<p>&nbsp;</p><p><b>PROFIL RECHERCHÉ</b></p>
<ul>
<li>▪︎ Etudiant.e en Communication, Marketing Digital</li>
<li>▪︎ Passionné.e par le Digital et les Réseaux Sociaux</li>
<li>▪︎ Excellentes capacités rédactionnelles en français et en anglais</li>
<li>▪︎ Créatif.ve, autonome et force de proposition</li>
<li>▪︎ Maîtrise des outils de création graphique (Photoshop, Canada, etc.) et des outils de gestion des réseaux sociaux</li>
<li>▪︎ Une première expérience dans la gestion de contenu Web ou de réseaux sociaux serait un plus, mais débutant.e accepté.e</li>
</ul>
<p>&nbsp;</p><p><b>POURQUOI REJOINDRE INFINI FEMMES ?</b></p>
<ul>
<li>▪︎ Vous êtes attiré.e par le monde de la périnatalité et incollable (ou presque) sur le Périnée, les Femmes et les Hormones</li>
<li>▪︎ Développer vos compétences en Communication Digitale et Marketing</li>
<li>▪︎ Contribuer à des projets passionnants ayant un réel impact</li>
</ul>
<p>&nbsp;</p><p><b>COMMENT POSTULER ?</b></p>

<p>Envoyez votre CV et une lettre de motivation à l&apos;adresse suivante hello@infinifemmes.com avec pour objet &quot;Candidature Assistant.e Communication Digitale&quot;</p>
<p>Hâte de découvrir votre profil !</p></div>




        <Link
            className={buttonStyles({
                color: "secondary",
                radius: "sm",
                variant: "shadow",
                })}
                href="/recrutement"
            >
            Retour
            </Link>
                </section>
    </div>);

}