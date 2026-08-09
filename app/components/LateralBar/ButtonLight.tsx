'use client';

interface ButtonLightProps {
    isWhite?: boolean;
    isLocked?: boolean;
    onClick?: () => void;
}

export default function ButtonLight({isWhite = false, isLocked = false, onClick} : ButtonLightProps) {
    return (
        <button
            type="button"
            disabled={isLocked}
            onClick={() => {
                if (!isLocked && onClick) {
                    onClick();
                }
            }}
            className={`w-6 h-6 rounded-full transition-colors border shadow-sm
                ${isWhite
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