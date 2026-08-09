import { IndividualNameDiv, IndividualPassageDiv, IndividualValidateDiv } from "./LateralBar/LateralBar_IndividualName"
import Athlete from '../class/athlete';
import Categories from "../class/categories";


interface Props {
    class: Categories;
}

interface PropsNames extends Props {
    
}

interface PropsPassage {
    Athlete: Athlete;
    Mouvement: number;
}

interface PropsValidate extends Props {
}


export function NamesDiv(args: PropsNames) {
    let Athletes = args.class.getAthletes();
    Athletes.shift();

    let mouv = args.class.getMouvement();


    return (
        <div className="w-auto flex flex-col overflow-hidden">
            <div className="w-auto h-full flex-1 min-h-0 bg-white flex flex-col overflow-x-hidden overflow-y-scroll no-scrollbar rounded-sm divide-y divide-gray-200">
                {Athletes.toReversed().map((athlete, index) => (
                    <IndividualNameDiv key={index} Nom={athlete.getName()} Poids={athlete.getCurrentWeight(mouv)}/>
                ))}
            </div>
        </div>
    );
}

export function PassageDiv(args: PropsPassage) {
    console.log(args.Athlete)
    return (
        <div className="w-auto flex flex-col overflow-hidden">
            <div className="w-auto h-full flex-1 min-h-0 bg-white flex flex-col overflow-x-hidden overflow-y-scroll no-scrollbar rounded-sm divide-y divide-gray-200">
                <IndividualPassageDiv Nom={args.Athlete.getName()} Poids={args.Athlete.getCurrentWeight(args.Mouvement)}/>

            </div>
        </div>
    );
}

export function ValidateDiv(args: PropsValidate) {
    let Athletes = args.class.getWaitingForValidation();
    let mouv = args.class.getMouvement();

    return (
        <div className="w-auto flex flex-col overflow-hidden">
            <div className="w-auto h-full flex-1 min-h-0 bg-white flex flex-col overflow-x-hidden overflow-y-scroll no-scrollbar rounded-sm divide-y divide-gray-200">
                {Athletes.toReversed().map((athlete, index) => (
                    <IndividualValidateDiv key={index} Nom={athlete.getName()} Poids={athlete.getCurrentWeight(mouv)} Res={athlete.getLastLight(mouv)}/>
                ))}
                
                
                
                {/* {Array.from({ length: args.nb }).map((_, index) => (
                    <IndividualValidateDiv key={index} Nom={args.Noms[index]} Poids={args.Poids[index]} Res={args.Res[index]}/>
                ))} */}

            </div>
        </div>
    );
}