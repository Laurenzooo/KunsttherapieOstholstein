import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

interface GDPRMapProps {
    /** Height of the map container */
    height?: string;
    /** Optional class name for styling */
    className?: string;
}

/**
 * GDPR-compliant Google Maps embed with Two-Click Solution.
 * No requests to Google are made until the user explicitly consents by clicking the button.
 */
export function GDPRMap({ height = "400px", className = "" }: GDPRMapProps) {
    const [mapLoaded, setMapLoaded] = useState(false);
    const CONSENT_KEY = "gdpr_google_maps_consent";

    useEffect(() => {
        const consent = localStorage.getItem(CONSENT_KEY);
        if (consent === "true") {
            setMapLoaded(true);
        }
    }, []);

    // Google Maps API key from environment variable
    const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;

    // Place query for "Mikela Blanck Kunsttherapie, Eutin, Germany"
    const placeQuery = encodeURIComponent("Mikela Blanck Kunsttherapie, Eutin, Germany");

    // Google Maps Embed API URL with place query
    const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${placeQuery}&language=de`;

    const handleLoadMap = () => {
        setMapLoaded(true);
        localStorage.setItem(CONSENT_KEY, "true");
    };

    return (
        <div
            className={`gdpr-map-wrapper ${className}`}
            style={{ height, minHeight: "300px" }}
        >
            {!mapLoaded ? (
                <div className="gdpr-map-placeholder">
                    <div className="gdpr-map-placeholder-content">
                        <div className="gdpr-map-icon">
                            <MapPin size={48} strokeWidth={1.5} />
                        </div>
                        <button
                            type="button"
                            className="gdpr-map-button"
                            onClick={handleLoadMap}
                        >
                            Karte laden
                        </button>
                        <p className="gdpr-map-disclaimer">
                            Mit dem Laden der Karte akzeptieren Sie die{" "}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Datenschutzerklärung von Google
                            </a>
                            .<br />
                            Dabei werden Daten in die USA übertragen.
                        </p>
                    </div>
                </div>
            ) : (
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps - Mikela Blanck Kunsttherapie, Eutin"
                />
            )}
        </div>
    );
}
