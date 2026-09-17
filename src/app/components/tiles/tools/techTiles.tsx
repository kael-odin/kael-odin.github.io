import Image from "next/image";
import Link from "next/link";

interface TechTileProps {
    name: string;
    description: string;
    link: string;
    image: string;
}

export default function TechTiles({ name, description, link, image }: TechTileProps) {
    return (
        <div className="flex flex-col justify-center min-h-[280px] items-start relative group/tile">
            <div className="m-5 w-full">
                <div className="w-12 h-12 flex items-center justify-center absolute inset-x-0 top-0 ml-6 mt-6 transition-transform duration-300 ease-out group-hover/tile:scale-110 group-hover/tile:-rotate-6">
                    {/* 白色衬底：保证 GitHub / Next.js 等深色图标在深色模式下可见 */}
                    <div className="relative h-12 w-12 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.10)] ring-1 ring-black/5 dark:ring-white/10">
                        <Image src={image} alt={name} fill className="object-contain p-1.5" />
                    </div>
                </div>
                <div className="mt-4 text-left w-full mb-3 transition-transform duration-300 ease-out group-hover/tile:-translate-y-1">
                    <h2 className="text-2xl roboto-mono-500 text-gray-800 dark:text-white">
                        {name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        {description}
                    </p>
                </div>
                <Link href={link} target="_blank" aria-label={`打开 ${name} 官网`}>
                    <div className="bg-gray-300 dark:bg-gray-700 w-10 h-10 rounded-full absolute bottom-0 left-0 m-4 flex justify-center items-center hover:ring-4 ring-gray-200 dark:ring-gray-400 transition-all duration-300 group-hover/tile:bg-gray-400 dark:group-hover/tile:bg-gray-600">
                        <Image src="/arrow.svg" alt="" className="transition-transform duration-300 group-hover/tile:rotate-45" width={20} height={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
}
