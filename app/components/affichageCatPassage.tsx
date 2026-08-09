
interface Props {
    Nom: string;
}


export default function Affichage(args: Props) {
    return (
        <div className="bg-SBD-red text-black min-h-6 shrink font-helvetica font-bold text-center mb-2 p-2 rounded-sm shrink-0">{args.Nom}</div>
    );
}