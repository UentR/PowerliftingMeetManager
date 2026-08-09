'use client';
import { useState } from 'react';

interface ButtonLightProps {
    isWhite?: boolean; 
}

export default function ButtonLight({isWhite} : ButtonLightProps) {
    const isLocked = isWhite !== undefined;
    const [internalIsWhite, setInternalIsWhite] = useState(false);
    const displayWhite = isLocked ? isWhite : internalIsWhite;
    return (
        <button
            type="button"
            disabled={isLocked}
            onClick={() => {
                if (!isLocked) {
                    setInternalIsWhite(!internalIsWhite);
                }
            }}
            className={`w-6 h-6 rounded-full transition-colors border shadow-sm
                ${displayWhite 
                    ? 'bg-white border-gray-300' 
                    : 'bg-red-600 border-red-700'
                }
                ${isLocked 
                    ? 'cursor-not-allowed' 
                    : 'cursor-pointer hover:brightness-90'
                }
            `}
        />
    );
}