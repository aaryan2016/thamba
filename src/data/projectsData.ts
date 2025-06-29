export interface Project {
    id: number;
    title: string;
    description: string;
    tag: string;
    imageLinks: string[];
}

const projectsData: Project[] = [
    {
        id : 1,
        title : "OASIS",
        description : "",
        tag : "",
        imageLinks : [
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-01.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-02.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-03.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-04.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-05.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-06.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-07.webp","https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-08.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-09.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-10.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-11.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-12.webp",
        ]
    },
    {
        id : 2,
        title : "HOLA",
        description : "",
        tag : "",
        imageLinks : [
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image1.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image2.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image3.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image4.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image5.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image6.webp",
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image7.webp"
        ]
    },
    
]

export default projectsData;