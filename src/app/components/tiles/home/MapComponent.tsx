import { mapEmbedUrl, siteConfig } from "@/site-config";

export default function MapComponent() {
    return (
        <div className="w-full h-full relative">
            <iframe
                title={`${siteConfig.location.full} 地图`}
                src={mapEmbedUrl}
                className="w-full h-full border-0 filter transition duration-500 dark:[filter:grayscale(100%)_invert(92%)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            />
        </div>
    );
}
