import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

export default function Job2Page() {

    return (
        <div>
          <section className="flex w-full flex-col items-left justify-center gap-4 py-8 md:py-10">

            <span className={title({ size:"sm", color: "blue" })}>Assistant.e Commercial et Administratif&nbsp;</span>

        <div className="text-left">
        Infini Femmes est une petite structure créée par et pour les femmes et qui les accompagnent à différentes étapes charnières de la Vie.
En prénatal, dès la sortie de couches et en postnatal. On fait aussi appel aux services d&apos;Infini femmes en pré-menaupose et ménaupose.

Et ce, à travers le Yoga, les massages Maman-bébé, les Massages Rebozo, l&apos;Hypnonaissance et la Méditation Guidée.

Des formations &quot;Yoga, Bien-être et Périnée&quot;©️ sont construites pour les Paramédicaux et les Gynécologues et d&apos;autres Formations, Masterclass et Ateliers ont ete créés pour toutes celles & ceux qui souhaitent découvrir les bienfaits du Yoga selon la Méthode De Gasquet.

<p>&nbsp;</p><p><b>MISSIONS PRINCIPALES</b></p>

<p>En tant qu&apos;Assistant.e Commercial et Administratif, vous travaillerez en étroite collaboration avec la Fondatrice pour contribuer au développement commercial.</p>

<p>&nbsp;</p><p>Vous aurez pour missions :</p>

<ul>
<li>▪︎ Assurer les activités de secrétariat</li>
<li>▪︎ Préparer les réunions de travail et réaliser les comptes-rendus</li>
<li>▪︎ Accueillir, informer et orienter les adhérentes</li>
<li>▪︎ Assurer le standard téléphonique</li>
<li>▪︎ Prendre les rendez-vous de la coordination et aider dans l’organisation d’events, dans la gestion de des cours yoga, des ateliers yoga bien-être et toutes les formations 2025</li>
<li>▪︎ Tenir à jour les coordonnées des inscrits et les mailing listes afférentes</li>
<li>▪︎ Collecter le courrier de la boîte postale, enregistrer et classer le courrier, Taper les courriers et autres documents administratifs en français et en anglais</li>
<li>▪︎ Assurer la liaison avec tous les prestataires externes et les partenariats en France comme à l’étranger, gérer les plannings et les appels téléphoniques afférents </li>
<li>▪︎ Négocier les devis et passer les commandes le cas échéant</li>
</ul>


<p>&nbsp;</p><p><b>PROFIL RECHERCHÉ</b></p>
<ul>
<li>▪︎ Fiable, discret et réactif.ve</li>
<li>▪︎ Capacité à anticiper les besoins et force de propositions </li>
<li>▪︎ vous « aimez » les Femmes, les Périnées et le Yoga/le Corps en Mouvement</li>
<li>▪︎ Formation : Bac à bac+2 minimum avec une première expérience professionnelle </li>
<li>▪︎ Langue : Français parlé et écrit, Anglais parlé et écrit </li>
<li>▪︎ Compétences techniques : Maîtrise des logiciels Word / Excel / Powerpoint, maîtrise des réseaux sociaux</li>
</ul>
<p>&nbsp;</p><p><b>POURQUOI REJOINDRE INFINI FEMMES ?</b></p>
<ul>
<li>▪︎ Vous êtes attiré.e par le monde de la périnatalité et incollable (ou presque) sur le Périnée, les Femmes et les Hormones</li>
<li>▪︎ Développer vos compétences en gestion commerciale et administrative</li>
<li>▪︎ Contribuer à des projets passionnants ayant un réel impact</li>
</ul>
<p>&nbsp;</p><p><b>COMMENT POSTULER ?</b></p>

<p>Envoyez votre CV et une lettre de motivation à l&apos;adresse suivante hello@infinifemmes.com avec pour objet &quot;Candidature Assistant.e Commercial et Administratif&quot;</p>
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