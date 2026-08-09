import Image from "next/image";
import { NamesDiv, PassageDiv, ValidateDiv } from "./components/LateralBar_Names";
import Affichage from "./components/affichageCatPassage";
import MobileBottomBar from "./components/bottomBar";
import Categories from "./class/categories"
import Athlete from "./class/athlete";



export const dynamic = 'force-static';

let class65 = new Categories("-65kg");
let q = new Athlete("Quentin RIGGI", 63.4, 150, 100, 200, 9);
let j = new Athlete("Joris DEGROOTE", 64.9, 175, 105, 180, 5);
let s = new Athlete("Sebastien ??", 62, 100, 80, 150, 6);
class65.addAthlete(q);
class65.addAthlete(j);
class65.addAthlete(s);

export default function Home() {
  
  console.log(class65);
  

  return (
    <main className="flex flex-row h-screen w-screen overscroll-none bg-SBD-red overflow-hidden pb-16 sm:pb-0">
      
      {/* left-bar */}
      <div className="hidden bg-SBD-black h-screen flex-col justify-between sm:flex w-full min-w-65">        
        <div className="bg-gray-200 text-black min-h-6 shrink-0">Resultats</div>
      </div>
      
      {/* Main screen */}
      <div className="bg-SBD-black w-full h-full flex flex-col justify-start md:max-w-250 md:px-10">
        <div className="flex flex-col justify-start mx-5 mb-10 mt-4 bg-white p-1 rounded-md">
          <Affichage Nom={"PASSAGE"}/>
          <PassageDiv Athlete={class65.getAthlete(0)} Mouvement={class65.getMouvement()}/>
        </div>

        <div className="flex flex-col justify-start mx-5 mb-10 bg-white p-1 rounded-md">
          <Affichage Nom={"VALIDATION NOUVEAU POIDS"}/>
          <ValidateDiv class={class65}/>
        </div>

        <div className="flex flex-col justify-start mx-5 mb-8 bg-white p-1 rounded-md flex-1 min-h-0">
          <Affichage Nom={"OTHERS"}/>
          <NamesDiv class={class65}/>
        </div>
      <MobileBottomBar />
      </div>

      {/* Bottom bar */}
    </main>
  );
}
