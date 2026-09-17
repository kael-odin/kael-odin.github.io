import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { siteConfig, qqChatUrl } from "@/site-config";
import { copyText } from "@/lib/copy-text";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type ContactRow = {
    id: string;
    label: string;
    value: string;
    /** 有 href 时右侧多一个跳转按钮 */
    href?: string;
    hrefLabel?: string;
};

const CONTACT_ROWS: ContactRow[] = [
    { id: "qq", label: "QQ", value: siteConfig.qq, href: qqChatUrl, hrefLabel: "发起会话" },
    { id: "wechat", label: "微信", value: siteConfig.wechat },
    { id: "email", label: "邮箱", value: siteConfig.email, href: `mailto:${siteConfig.email}`, hrefLabel: "写邮件" },
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isRendered, setIsRendered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [copyFailedId, setCopyFailedId] = useState<string | null>(null);

    // Handle mounting and exact transition timing
    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
            setTimeout(() => setIsVisible(true), 10);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => {
                setIsRendered(false);
                setCopiedId(null); // reset on close
            }, 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isRendered) return null;

    const handleCopy = async (id: string, value: string) => {
        const succeeded = await copyText(value);

        setCopiedId(succeeded ? id : null);
        setCopyFailedId(succeeded ? null : id);

        window.setTimeout(() => {
            setCopiedId((current) => (current === id ? null : current));
            setCopyFailedId((current) => (current === id ? null : current));
        }, 1800);
    };

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-auto h-[100dvh]">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Modal Dialog */}
            <div
                className={`relative w-full max-w-xl max-h-[95vh] overflow-y-auto rounded-4xl border border-gray-200 bg-[#f8fafc] p-6 sm:p-8 shadow-2xl dark:border-gray-700 dark:bg-[#0d1117] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 sm:top-6 sm:right-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-[#151f2b] transition-colors"
                    aria-label="关闭"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="mb-6 mt-1">
                    <h3 className="text-[26px] font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        联系方式
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300">
                        想聊项目、聊技术，或者只是打个招呼，都可以直接找我。
                    </p>
                </div>

                <div className="space-y-3">
                    {CONTACT_ROWS.map((row) => (
                        <div
                            key={row.id}
                            className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3.5 shadow-sm dark:border-gray-700 dark:bg-[#111821]"
                        >
                            <div className="min-w-0 flex-1">
                                <p className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
                                    {row.label}
                                </p>
                                <p className="mt-0.5 truncate text-[15px] font-bold text-gray-900 dark:text-white">
                                    {row.value}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => handleCopy(row.id, row.value)}
                                className="shrink-0 rounded-full border border-gray-200 px-3.5 py-1.5 text-[12px] font-semibold text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-[#1a2532]"
                            >
                                {copiedId === row.id
                                    ? "已复制"
                                    : copyFailedId === row.id
                                      ? "复制失败"
                                      : "复制"}
                            </button>

                            {row.href ? (
                                <a
                                    href={row.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 rounded-full bg-gradient-to-r from-[#6f5ef5] to-[#ff6e40] px-4 py-1.5 text-[12px] font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
                                >
                                    {row.hrefLabel}
                                </a>
                            ) : null}
                        </div>
                    ))}
                </div>

                <p className="mt-5 text-center text-[12px] text-gray-400 dark:text-gray-500">
                    微信需要先加好友；QQ 可直接发起会话。
                </p>
            </div>
        </div>
    );

    if (typeof document === 'undefined') return null;
    return createPortal(modalContent, document.body);
}
