'use client';

import React from "react";

import { IndividualNameDiv, IndividualPassageDiv, IndividualValidateDiv } from "./LateralBar/LateralBar_IndividualName"
import Athlete from '../class/athlete';
import Categories from "../class/categories";


interface Props {
    Class: Categories;
}

interface PropsNames extends Props {
    
}

interface PropsPassage {
    Athlete: Athlete;
    Mouvement: number;
    onValidate: (arg0: number) => void;
}

interface PropsValidate extends Props {
    onValidate: (arg0: string, arg1: number) => void;
}


export function NamesDiv({Class}: PropsNames) {
    let Athletes = Class.getAthletes().slice(1);

    let mouv = Class.getMouvement();


    return (
        <div className="w-auto flex flex-col overflow-hidden">
            <div className="w-auto h-full flex-1 min-h-0 bg-white flex flex-col overflow-x-hidden overflow-y-scroll no-scrollbar rounded-sm divide-y divide-gray-200">
                {Athletes.map((athlete, index) => (
                    <IndividualNameDiv key={index} Nom={athlete.getName()} Poids={athlete.getCurrentWeight(mouv)}/>
                ))}
            </div>
        </div>
    );
}

export function PassageDiv({Athlete, Mouvement, onValidate}: PropsPassage) {
    console.log(Athlete)

    return (
        <div className="w-auto flex flex-col overflow-hidden">
            <div className="w-auto h-full flex-1 min-h-0 bg-white flex flex-col overflow-x-hidden overflow-y-scroll no-scrollbar rounded-sm divide-y divide-gray-200">
                <IndividualPassageDiv 
                Nom={Athlete.getName()} 
                Poids={Athlete.getCurrentWeight(Mouvement)} 
                onValidate={onValidate}/>

            </div>
        </div>
    );
}

export function ValidateDiv({Class, onValidate}: PropsValidate) {
    let Athletes = Class.getWaitingForValidation();
    let mouv = Class.getMouvement();

    return (
        <div className="w-auto flex flex-col overflow-hidden">
            <div className="w-auto h-full flex-1 min-h-0 bg-white flex flex-col overflow-x-hidden overflow-y-scroll no-scrollbar rounded-sm divide-y divide-gray-200">
                {Athletes.map((athlete, index) => (
                    <IndividualValidateDiv key={index} Nom={athlete.getName()} Poids={athlete.getLastWeight(mouv)} Res={athlete.getLastLight(mouv)} onValidate={onValidate}/>
                ))}
            </div>
        </div>
    );
}