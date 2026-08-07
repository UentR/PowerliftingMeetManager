import ButtonLight from './ButtonLight';

export default function IndividualNameDiv() {
    return (
        <div className="max-w-full min-h-16 shrink-0 w-full bg-pink-700 flex flex-row items-center justify-around">
            <div className="m-2 max-w-1/4 max-h-20 overflow-hidden">Un nom bcp trop long</div>
            <div className="h-full flex flex-row justify-between items-center w-auto">
                <ButtonLight />
                <ButtonLight />
                <ButtonLight />
            </div>
            <input type="number" className="max-w-1/5 bg-white text-black text-center" />
            <button>✅</button>
        </div>
    );
}