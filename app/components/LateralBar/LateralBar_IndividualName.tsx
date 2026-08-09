import ButtonLight from './ButtonLight';


interface Props {
    Nom: string,
    Poids: number
}

interface PropsPassage extends Props {}

interface PropsValidate extends Props {
    Res: number
}

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

export function IndividualPassageDiv(args: PropsPassage) {
    let W = args.Poids.toString() + "kg";

    return (
        <div className="max-w-full min-h-16 shrink-0 w-full bg-pink-700 flex flex-row items-center justify-between px-4">
            <div className="flex-1 flex justify-start overflow-hidden">
                <div className="m-2 max-w-full max-h-20 truncate text-2xl">{args.Nom}</div>
            </div>

            <div className="flex flex-row items-center justify-between min-w-1/3 bg-gray-800 rounded-md px-3 shrink-0">
                <div className="text-center bg-SBD-black p-4 rounded-sm text-2xl">{W}</div>
                <div className="h-full flex flex-row flex-grow justify-around items-center w-auto max-w-25">
                    <ButtonLight />
                    <ButtonLight />
                    <ButtonLight />
                </div>
            </div>

            <div className="flex-1 flex justify-end">
                <button 
                    className="w-12 h-12 bg-green-400 hover:bg-green-500 rounded-md flex items-center justify-center border-b-4 border-green-600 active:border-b-0 active:translate-y-1 transition-all"
                    aria-label="Valider"
                >
                    <span className="text-4xl text-white font-bold leading-none">✓</span>
                </button>
            </div>
        </div>
    );
}

export function IndividualValidateDiv(args: PropsValidate) {
    const isLeftWhite = Boolean((args.Res >> 2) & 1);
    const isMiddleWhite = Boolean((args.Res >> 1) & 1);
    const isRightWhite = Boolean(args.Res & 1);

    return (
        <div className="w-full min-h-16 shrink-0 bg-pink-700 flex flex-row items-center justify-between px-4 gap-4">
            
            <div className="max-w-1/4 w-1/4 overflow-hidden text-white flex justify-start shrink-0">
                <div className="truncate text-2xl font-medium">
                    {args.Nom}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-gray-800 rounded-md px-4 py-2 shrink-0">
                <div className="text-white text-center font-bold mb-1">{args.Poids}</div>
                <div className="flex flex-row justify-between items-center gap-2">
                    <ButtonLight isWhite={isLeftWhite} />
                    <ButtonLight isWhite={isMiddleWhite} />
                    <ButtonLight isWhite={isRightWhite} />
                </div>
            </div>

            <div className="shrink-0">
                <input 
                    type="number" 
                    className="w-32 h-10 bg-white text-black text-center rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>

            <div className="shrink-0">
                <button className="w-12 h-12 bg-green-400 hover:bg-green-500 rounded-md flex items-center justify-center border-b-4 border-green-600 active:border-b-0 active:translate-y-1 transition-all">
                    <span className="text-4xl text-white font-bold leading-none">✓</span>
                </button>
            </div>
            
        </div>
    );
}