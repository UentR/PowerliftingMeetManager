export default function ButtonLight() {
    return (
        <label className="inline-block cursor-pointer">
        <input type="checkbox" className="peer hidden" />
        
        <div className="w-6 h-6 rounded-full flex items-center justify-center transition-colors bg-red-600 text-white peer-checked:bg-white peer-checked:text-red-600"></div>
        </label>
    );
}