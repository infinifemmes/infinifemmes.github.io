
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

export default function RecrutementPage() {



    return (
        <div>
            <section className="flex w-full flex-col items-left justify-center gap-4 py-8 md:py-10">
                <Card className="max-w-[810px]">
                    <CardHeader className="flex gap-3">
                        <p className="text-md font-bold">Assistant.e Communication Digitale</p>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                    <Link
                            className={buttonStyles({
                            color: "secondary",
                            radius: "sm",
                            variant: "shadow",
                            })}
                            href="/recrutement/job1"
                        >
                        Détails
                        </Link>
                    </CardBody>
                </Card>

                <Card className="max-w-[810px]">
                    <CardHeader className="flex gap-3">
                        <p className="text-md font-bold">Assistant.e Commercial et Administratif</p>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                    <Link
                            className={buttonStyles({
                            color: "secondary",
                            radius: "sm",
                            variant: "shadow",
                            })}
                            href="/recrutement/job2"
                        >
                        Détails
                        </Link>
                    </CardBody>
                </Card>


                <Card className="max-w-[810px]">
                    <CardHeader className="flex gap-3">
                        <p className="text-md font-bold">Professionnel.le du Yoga formé.e De Gasquet</p>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Link
                            className={buttonStyles({
                            color: "secondary",
                            radius: "sm",
                            variant: "shadow",
                            })}
                            href="mailto:hello@infinifemmes.com"
                        >
                        Contactez-nous
                        </Link>
                    </CardBody>
                </Card>

                <Card className="max-w-[810px]">
                    <CardHeader className="flex gap-3">
                        <p className="text-md font-bold">Professionnel.le du Sport formé.e Activité Physique Adaptée</p>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Link
                            className={buttonStyles({
                            color: "secondary",
                            radius: "sm",
                            variant: "shadow",
                            })}
                            href="mailto:hello@infinifemmes.com"
                        >
                        Contactez-nous
                        </Link>
                    </CardBody>
                </Card>


            </section>
        </div>
    );
}
