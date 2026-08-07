import Image from "next/image";
import NamesDiv from "./components/LateralBar_Names";



export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen overscroll-none bg-blue-600 overflow-hidden">
      
      {/* left-bar */}
      <div className="max-w-1/4 min-w-65 h-screen flex flex-col justify-between">
        <div className="flex flex-col justify-between h-full flex-1 min-h-0">
          <div></div>
          <NamesDiv/>
        </div>
        
        <div className="bg-gray-200 text-black min-h-6 shrink-0">Resultats</div>
      </div>
      
      {/* Main screen */}
      <div className="bg-white w-full h-full">

      </div>
    </main>
  );
}
