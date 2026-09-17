import Image from "next/image";
import Link from "next/link";

interface Project {
    name: string;
    description: string;
    image: string;
    tech: { name: string; image: string }[];
    view?: string | boolean;
    github: string | boolean;
    personal?: boolean;
    workStatus?: boolean;
    date?: string;
    demo?: boolean;
    // [key: string]: any;
}

export default function ProjectTile({ project }: { project: Project }) {
    // Ensure image src is a valid path or fallback
    let imageSrc = project.image;
    if (!imageSrc || typeof imageSrc !== "string" || (!imageSrc.startsWith("/") && !imageSrc.startsWith("http"))) {
        imageSrc = "/tech/placeholder.svg";
    }
    return (
        <div className="group flex flex-col h-full">
            <div className="flex flex-col md:flex-row w-full p-6 md:p-8 gap-4 items-center md:items-start overflow-hidden flex-1">
                {/* 1. Project Preview Image Placeholder */}
                <div className="w-full md:w-1/2 h-48 md:h-full bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0 overflow-hidden">
                    <Image src={imageSrc} alt={project.name} width={400} height={300} className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
                </div>
                {/* 2. Content Section */}
                <div className="flex flex-col justify-between w-full">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-md lg:text-xl font-black text-gray-800 dark:text-gray-100 mb-2 tracking-tight font-decorative">
                            {project.name}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-300 text-sm md:text-xs xl:text-sm leading-relaxed mb-3">
                            {project.description}
                        </p>
                        {/* Tech Stack Icons */}
                        <div className="flex gap-2 md:mb-8">
                            {Array.isArray(project.tech) && project.tech.map((tech: { name: string; image: string }, i: number) => (
                                <span
                                    key={i}
                                    title={tech.name}
                                    className="relative inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white ring-1 ring-black/5 dark:ring-white/10"
                                >
                                    <Image
                                        src={tech.image || "/tech/placeholder.svg"}
                                        alt={tech.name}
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Section: Action & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-8 py-1 rounded-b-2xl shadow-sm border-t border-gray-100 dark:border-gray-700 mt-auto bg-white dark:bg-gray-900">
                {/* Github & View Buttons */}
                <div className="flex items-center gap-2 h-10">
                    {project.view && typeof project.view === "string" && (
                        <Link href={project.view} target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors hover:ring-4 ring-gray-200 dark:ring-gray-400 hover:transition duration-700 ease-in-out">
                                <Image src="/arrow.svg" alt="查看项目" width={20} height={20} />
                            </div>
                        </Link>
                    )}
                    {project.github && typeof project.github === "string" && (
                        <Link href={project.github} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-white dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
                            <Image src="/github.svg" alt="GitHub" width={35} height={35} /> {/* View Icon Placeholder */}
                        </Link>
                    )}
                </div>
                {/* Status & Date Badges */}
                <div className="flex items-center gap-2">
                    {project.personal && (
                        <span className="px-2 bg-orange-50 dark:bg-orange-900 text-orange-700 dark:text-orange-200 rounded-full text-xs font-bold border border-orange-100/50 dark:border-orange-900/50">
                            个人项目
                        </span>
                    )}
                    {project.workStatus === true && (
                        <span className="px-2 bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200 rounded-full text-xs font-bold border border-emerald-100/50 dark:border-emerald-900/50 hidden md:inline-block">
                            持续维护
                        </span>
                    )}
                    {project.workStatus === false && (
                        <span className="px-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded-full text-xs font-bold border border-gray-200/60 dark:border-gray-700 hidden md:inline-block">
                            已归档
                        </span>
                    )}
                    {project.demo === true && (
                        <span className="px-2 bg-sky-50 dark:bg-sky-900 text-sky-700 dark:text-sky-200 rounded-full text-xs font-bold border border-sky-100/50 dark:border-sky-900/50">
                            在线体验
                        </span>
                    )}
                    {project.date && (
                        <span className="text-gray-400 dark:text-gray-300 text-xs font-medium ml-2">
                            {project.date}
                        </span>
                    )}
                </div>
            </div>
        </div>

    );
}