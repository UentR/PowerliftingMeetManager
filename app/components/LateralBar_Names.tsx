import IndividualNameDiv from "./LateralBar/LateralBar_IndividualName"

export default function NamesDiv() {
    return (
        <div className="w-auto min-h-3/4 max-h-3/4 flex flex-col overflow-hidden">
            <div className="w-full h-2 bg-black shrink-0"></div>
            <div className="w-auto flex-1 min-h-0 bg-white flex flex-col overflow-x-hidden overflow-y-auto no-scrollbar">
                <IndividualNameDiv/>
                <IndividualNameDiv/>

            </div>
        </div>
    );
}