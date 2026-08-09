export default function MobileBottomBar() {
    return (
        <div className="fixed bottom-0 left-0 w-full h-16 bg-SBD-black border-t border-SBD-red flex sm:hidden flex-row items-center justify-around z-50">
            
            <button className="flex flex-col items-center">
                <span>📊</span>
                <span className="text-xs">Passage</span>
            </button>
            
            <button className="flex flex-col items-center">
                <span>⚖️</span>
                <span className="text-xs">Poids</span>
            </button>
            
            <button className="flex flex-col items-center">
                <span>⚙️</span>
                <span className="text-xs">Others</span>
            </button>
            
        </div>
    );
}