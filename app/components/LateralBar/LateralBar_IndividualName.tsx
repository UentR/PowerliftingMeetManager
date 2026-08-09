'use client';

import { useState } from 'react';
import ButtonLight from './ButtonLight';


interface Props {
    Nom: string,
    Poids: number
}

interface PropsPassage extends Props {
    onValidate: (arg0: number) => void;
}

interface PropsValidate extends Props {
    Res: number
    onValidate: (arg0:string, arg1:number) => void;
}


function finalizeLift(cls: number) {}


export function IndividualNameDiv(args: Props) {
    let W = args.Poids.toString() + "kg";
    return (
        <div className="max-w-full min-h-16 shrink-0 w-full bg-pink-700 flex flex-row items-center justify-around">
            <div className="m-2 max-w-1/4 max-h-20 overflow-hidden">{args.Nom}</div>
            <div className="flex flex-col">
                <div className="text-center">{W}</div>
                <div className="h-full flex flex-row justify-between items-center w-auto">
                    <ButtonLight />
                    <ButtonLight />
                    <ButtonLight />
                </div>
            </div>
            <input type="number" className="max-w-1/5 bg-white text-black text-center" />
            <button>✅</button>
        </div>
    );
}

export function IndividualPassageDiv({Nom, Poids, onValidate}: PropsPassage) {
    let W = Poids.toString() + "kg";

    const [lights, setLights] = useState(0);

    function updateLights(idx: number) {
        let mask = 1 << idx;
        setLights(prevLights => prevLights ^ mask); 
    }
    
    function finalClick() {
        onValidate(lights);
        setLights(0); 
    }

    const isLeftWhite = Boolean((lights >> 2) & 1);
    const isMiddleWhite = Boolean((lights >> 1) & 1);
    const isRightWhite = Boolean(lights & 1);

    return (
        <div className="max-w-full min-h-16 shrink-0 w-full bg-pink-700 flex flex-row items-center justify-between px-4">
            <div className="flex-1 flex justify-start overflow-hidden">
                <div className="m-2 max-w-full max-h-20 truncate text-2xl">{Nom}</div>
            </div>

            <div className="flex flex-row items-center justify-between min-w-1/3 bg-gray-800 rounded-md px-3 shrink-0">
                <div className="text-center bg-SBD-black p-4 rounded-sm text-2xl">{W}</div>
                <div className="h-full flex flex-row flex-grow justify-around items-center w-auto max-w-25">
                    <ButtonLight isLocked={false} isWhite={isLeftWhite}     onClick={() => updateLights(2)}/>
                    <ButtonLight isLocked={false} isWhite={isMiddleWhite}   onClick={() => updateLights(1)}/>
                    <ButtonLight isLocked={false} isWhite={isRightWhite}    onClick={() => updateLights(0)}/>
                </div>
            </div>

            <div className="flex-1 flex justify-end">
                <button 
                    onClick={finalClick}
                    className="w-12 h-12 bg-green-400 hover:bg-green-500 rounded-md flex items-center justify-center border-b-4 border-green-600 active:border-b-0 active:translate-y-1 transition-all"
                    aria-label="Valider"
                >
                    <span className="text-4xl text-white font-bold leading-none">✓</span>
                </button>
            </div>
        </div>
    );
}

export function IndividualValidateDiv({Nom, Poids, Res, onValidate}: PropsValidate) {
    const [inputValue, setInputValue] = useState<string>("");

    const isLeftWhite = Boolean((Res >> 2) & 1);
    const isMiddleWhite = Boolean((Res >> 1) & 1);
    const isRightWhite = Boolean(Res & 1);

    return (
        <div className="w-full min-h-16 shrink-0 bg-pink-700 flex flex-row items-center justify-between px-4 gap-4">
            
            <div className="max-w-1/4 w-1/4 overflow-hidden text-white flex justify-start shrink-0">
                <div className="truncate text-2xl font-medium">
                    {Nom}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-gray-800 rounded-md px-4 py-2 shrink-0">
                <div className="text-white text-center font-bold mb-1">{Poids}</div>
                <div className="flex flex-row justify-between items-center gap-2">
                    <ButtonLight isLocked={true} isWhite={isLeftWhite} />
                    <ButtonLight isLocked={true} isWhite={isMiddleWhite} />
                    <ButtonLight isLocked={true} isWhite={isRightWhite} />
                </div>
            </div>

            <div className="shrink-0">
                <input 
                    type="number" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-32 h-10 bg-white text-black text-center rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>

            <div className="shrink-0">
                <button 
                    className="w-12 h-12 bg-green-400 hover:bg-green-500 rounded-md flex items-center justify-center border-b-4 border-green-600 active:border-b-0 active:translate-y-1 transition-all"
                    onClick={() => {
                        const numericWeight = Number(inputValue);
                        onValidate(Nom, numericWeight);
                        setInputValue("");
                        }
                    }
                >
                    <span className="text-4xl text-white font-bold leading-none">✓</span>
                </button>
            </div>
            
        </div>
    );
}