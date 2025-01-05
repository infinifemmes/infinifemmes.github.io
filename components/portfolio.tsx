"use client";
import { Image } from "@nextui-org/image";

const imagesList = [
    {
        id: 1,
        src: "pic08.jpg",
        alt: "Volatiana, professeure Yoga",
    },
    {
        id: 2,
        src: "pic03.jpg",
        alt: "Cours collectif Yoga",
    },
    {
        id: 3,
        src: "pic07.jpg",
        alt: "Cours collectif Yoga",
    },
    {
        id: 4,
        src: "pic05.jpg",
        alt: "Accompagnement personnalisé Yoga",
    },
];


export const Portfolio = () => {
    return (
        <div className="grid  gap-3 grid-cols-2" >
            {imagesList.map((image) => (
                <div key={image.id}>
                    <Image
                        width={200}
                        isZoomed

                        alt={image.alt}
                        src={image.src}
                    />
                </div>
            ))}
        </div>
    );
}