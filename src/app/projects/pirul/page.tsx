import Image from "next/image";
import { notFound } from "next/navigation";
import projectsData from "@/data/projectsData";

export default function Page() {
    // Find the project by title, case-insensitively
    const project = projectsData.find(
        (p) => p.title.toLowerCase() === "pirul".toLowerCase()
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="">
            <div className="flex flex-col items-center">
                {project.imageLinks && project.imageLinks.length > 0 ? (
                    project.imageLinks.map((link, index) => (
                        <div key={link} className="relative w-full">
                            <Image
                                src={link}
                                alt={`${project.title} - Image ${index + 1}`}
                                width={1200}
                                height={800}
                                className="shadow-lg w-full h-auto"
                            />
                        </div>
                    ))
                ) : (
                    <p>No images available for this project.</p>
                )}
            </div>
        </main>
    );
}


