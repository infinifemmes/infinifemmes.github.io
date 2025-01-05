import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";

export default function RetraitePage() {

    return (
        <div>
          <section className="flex w-full flex-col items-left justify-center gap-4 py-8 md:py-10">

            <span className={title({ size:"sm", color: "violet" })}>{siteConfig.courses.retraitetitle}&nbsp;</span>

        <div className="text-left">
        <p>Amandine <a href="https://www.instagram.com/mamzelle.bienetre" target="_new">@Mam&lsquo;zelle Bien-être</a> et Volatiana <a href="https://www.instagram.com/infinifemmes" target="_new">@Infini Femmes</a> vous proposent une expérience unique en Bourgogne dans la Maison du Bonheur, à Montigny-la-Resle.</p>
            <p>&nbsp;</p>
            <p>Cette retraite de trois jours vous plongera dans l&lsquo;énergie du Printemps et du renouveau à travers un voyage au cœur des 7 chakras. Vous irez explorer des techniques de respiration, d&lsquo;ancrage et vous jouerez avec le mouvement pour délier les tensions et surtout vous ressourcer loin du tumulte du quotidien. La déconnexion au numérique sera d&lsquo;ailleurs vivement recommandé,  pour vivre l&lsquo;expérience pleinement au cœur de la nature et de la douceur printanière.</p>
            <p>&nbsp;</p>


            <p>Au programme :</p>
            <p>&nbsp;</p>
<ul>
    <li>▪︎ 4 heures de cours de yoga : Des séances adaptées à tous les niveaux pour harmoniser corps et esprit.</li>
    <li>▪︎ 30 minutes de massage par personne : Un moment de détente pour relâcher les tensions et revitaliser votre énergie.</li>
    <li>▪︎ Visite de cave à Chablis : Découvrez les merveilles viticoles de la région avec une dégustation à la clé.</li>
    <li>▪︎ Ateliers créatifs et cercles de partage : Échangez et créez dans un cadre bucolique et bienveillant, dans une maison de charme typiquement bourguignonne des années 30.</li>
</ul>
<p>&nbsp;</p>
<p><b>Repas inclus</b> : Profitez de délices culinaires végétariens du vendredi soir au dimanche midi au Restaurant le Soleil d&lsquo;Or (à moins de 5 minutes à pieds de la Maison du Bonheur)</p>
<p>&nbsp;</p>

<p><b>Hébergement</b> : Options non-incluses, cependant il sera possible de sejourner à l&lsquo;Hôtel Le Soleil d&lsquo;Or ou Airbnb chez Cécile à 10 minutes de la Maison du Bonheur.</p>
<p>&nbsp;</p>

<p>Pour rendre cette expérience plus intimiste et prendre soin de chacun d&lsquo;entre vous, nous limitons à 10 le nombre de participant.e.s, garantissant ainsi une attention personnalisée et une atmosphère cocooning.</p>
<p>&nbsp;</p>

<p>Venez vous ressourcer et célébrer le printemps avec nous ! 🌼 Pour plus d&lsquo;informations ou pour réserver votre place, n&lsquo;hésitez pas à nous contacter, à très vite !</p>
<p>&nbsp;</p>

<p>Amandine et Volatiana</p>


        </div>




        <Link
            className={buttonStyles({
                color: "secondary",
                radius: "sm",
                variant: "shadow",
                })}
                href="/prestations"
            >
            Retour
            </Link>
                </section>
    </div>);

}