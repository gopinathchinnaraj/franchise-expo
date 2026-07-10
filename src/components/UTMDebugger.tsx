// src/components/UTMDebugger.tsx

"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getStoredUTMData, getUTMParams, UTMData, hasUTMData } from '@/lib/utmTracker';

export function UTMDebugger() {
    const [utmData, setUtmData] = useState<UTMData>({});
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let data = getStoredUTMData();
        if (!hasUTMData(data) && typeof window !== 'undefined') {
            const urlData = getUTMParams();
            if (hasUTMData(urlData)) {
                data = { ...data, ...urlData };
            }
        }

        setUtmData(data);
        setIsVisible(hasUTMData(data));

        const handleUTMUpdate = (event: Event) => {
            const detail = (event as CustomEvent).detail as UTMData;
            setUtmData(detail || getStoredUTMData());
            if (detail && hasUTMData(detail)) {
                setIsVisible(true);
            }
        };

        const handleStorageChange = () => {
            const newData = getStoredUTMData();
            setUtmData(newData);
            if (Object.keys(newData).length > 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener('utm_data_updated', handleUTMUpdate);
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('utm_data_updated', handleUTMUpdate);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [pathname]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="hidden xl:block fixed bottom-4 right-4 z-[9999] bg-gray-900 text-white p-4 rounded-lg shadow-xl max-w-sm text-xs border border-gray-700 font-mono">
            <div className="flex justify-between items-center mb-2 border-b border-gray-800 pb-1">
                <span className="font-bold">📊 UTM Parameters Debugger</span>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-white cursor-pointer ml-4 font-bold"
                >
                    ✕
                </button>
            </div>
            <div className="space-y-1">
                {utmData.utm_source && (
                    <div><span className="text-gray-400 font-semibold">Source:</span> {utmData.utm_source}</div>
                )}
                {utmData.utm_medium && (
                    <div><span className="text-gray-400 font-semibold">Medium:</span> {utmData.utm_medium}</div>
                )}
                {utmData.utm_campaign && (
                    <div><span className="text-gray-400 font-semibold">Campaign:</span> {utmData.utm_campaign}</div>
                )}
                {utmData.utm_term && (
                    <div><span className="text-gray-400 font-semibold">Term:</span> {utmData.utm_term}</div>
                )}
                {utmData.utm_content && (
                    <div><span className="text-gray-400 font-semibold">Content:</span> {utmData.utm_content}</div>
                )}
                {utmData.utm_id && (
                    <div><span className="text-gray-400 font-semibold">Campaign ID:</span> {utmData.utm_id}</div>
                )}
                {utmData.referrer && (
                    <div className="truncate"><span className="text-gray-400 font-semibold">Referrer:</span> {utmData.referrer}</div>
                )}
                {utmData.landingPage && (
                    <div className="truncate"><span className="text-gray-400 font-semibold">Landing:</span> {utmData.landingPage}</div>
                )}
                {Object.keys(utmData).length === 0 && (
                    <div className="text-gray-400">No UTM data detected</div>
                )}
            </div>
        </div>
    );
}
