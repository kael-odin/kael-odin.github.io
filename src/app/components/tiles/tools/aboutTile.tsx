import Image from "next/image";

export default function aboutTile() {
    return (
        <div className="flex flex-col justify-center h-full px-10 lg:px-16 dark:bg-[#0d1117] group">
            <div className="flex items-center gap-6 mb-2">
                {/* 默认是敲键盘，悬停变成 AI 星火 */}
                <div className="relative w-24 h-24">
                    <Image
                        src="/avatar/avatar-laptop.svg"
                        alt="汤勇的头像（敲键盘）"
                        width={100}
                        height={100}
                        className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                    />
                    <Image
                        src="/avatar/avatar-spark.svg"
                        alt="汤勇的头像（AI 灵感）"
                        width={100}
                        height={100}
                        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    />
                </div>
            </div>
            <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed max-w-[500px]">
                这些是我日常真正在用的技术与工具：从 Next.js、Python 到本地大模型和 Docker。
                顺手是好工具的唯一标准，用着舒服才会一直留在工具箱里。 🚀
            </p>
        </div>
    );
}
