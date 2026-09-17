"use client";

import { useEffect, useState } from "react";
import { FaQq, FaWeixin } from "react-icons/fa6";
import { qqChatUrl, siteConfig } from "@/site-config";
import { copyText } from "@/lib/copy-text";

type SocialSlide = {
	id: "qq" | "wechat";
	label: string;
	value: string;
	hint: string;
	bgClass: string;
	/** 有 href 的点击跳转，没有的点击复制 */
	href?: string;
};

const SLIDES: SocialSlide[] = [
	{
		id: "qq",
		label: "QQ",
		value: siteConfig.qq,
		hint: "点击发起 QQ 会话",
		bgClass: "bg-[#12B7F5]",
		href: qqChatUrl,
	},
	{
		id: "wechat",
		label: "微信",
		value: siteConfig.wechat,
		hint: "点击复制微信号",
		bgClass: "bg-[#07C160]",
	},
];

const CIRCLE_CLASS =
	"w-24 h-24 rounded-full bg-white/15 backdrop-blur-[2px] border border-white/25 flex flex-col items-center justify-center gap-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:scale-105 hover:bg-white/25 cursor-pointer";

export default function SocialTile() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [copyState, setCopyState] = useState<"idle" | "done" | "failed">("idle");

	useEffect(() => {
		const interval = window.setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % SLIDES.length);
		}, 3800);

		return () => window.clearInterval(interval);
	}, []);

	const handleCopy = async (value: string) => {
		const ok = await copyText(value);
		setCopyState(ok ? "done" : "failed");
		window.setTimeout(() => setCopyState("idle"), 1800);
	};

	return (
		<div className="w-full h-full relative overflow-hidden rounded-4xl ring-2 ring-transparent dark:ring-gray-700 transition-all duration-300">
			{SLIDES.map((slide, index) => {
				const isActive = activeIndex === index;
				const Icon = slide.id === "qq" ? FaQq : FaWeixin;

				const body = (
					<>
						<Icon className="w-10 h-10 text-white" aria-hidden />
						<span className="text-[11px] font-semibold leading-none text-white/95">
							{slide.value}
						</span>
					</>
				);

				return (
					<div
						key={slide.id}
						className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-[opacity,transform,background-color] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${slide.bgClass} ${isActive ? "opacity-100 scale-100 pointer-events-auto z-10" : "opacity-0 scale-[0.98] pointer-events-none z-0"}`}
						aria-hidden={!isActive}
					>
						{slide.href ? (
							<a
								href={slide.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${slide.label}：${slide.value}`}
								className={CIRCLE_CLASS}
							>
								{body}
							</a>
						) : (
							<button
								type="button"
								onClick={() => handleCopy(slide.value)}
								aria-label={`复制${slide.label}：${slide.value}`}
								className={CIRCLE_CLASS}
							>
								{body}
							</button>
						)}

						<span className="text-[11px] font-medium text-white/85">{slide.hint}</span>
					</div>
				);
			})}

			{copyState !== "idle" && (
				<div className="absolute top-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-white">
					{copyState === "done" ? "微信号已复制" : "复制失败，请手动输入"}
				</div>
			)}

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
				{SLIDES.map((slide, index) => (
					<span
						key={`${slide.id}-dot`}
						className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-white/90" : "w-2 bg-white/50"}`}
					/>
				))}
			</div>
		</div>
	);
}
