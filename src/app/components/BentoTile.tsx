"use client";

import { ReactNode } from "react";
import { useCardLight } from "@/lib/use-card-light";

interface BentoTileProps {
    children: ReactNode;
    className?: string; // Standard Col/Row spans are passed here
    innerClassName?: string; // Classes for the inner rounded shell
}

export default function BentoTile({ children, className = "", innerClassName = "" }: BentoTileProps) {
    const { ref, onPointerMove } = useCardLight();

    return (
        <div className={`p-2 w-full ${className}`}>
            {/* The inner card handles the design shell */}
            <div
                ref={ref}
                onPointerMove={onPointerMove}
                className={`w-full h-full bg-white dark:bg-[#0d1117] rounded-4xl ring-2 ring-transparent dark:ring-gray-700 overflow-hidden relative transition-shadow duration-400 ${innerClassName}`}
            >
                {children}
            </div>
        </div>
    );
}
