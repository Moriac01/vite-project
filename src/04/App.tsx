import { useState } from "react";


export function App(){
    const [compteur, setCompteur] = useState(0);

    // incrémentation valeur de +1
    function augmenter (){
        setCompteur(compteur + 1);
    }


    // décrémentation valeur de -1
    function diminuer(){
        if(compteur > 0){
            setCompteur(compteur - 1);
        }
    }
    return(
        <div>

        <h1>Compteur de clics</h1>
        {/* Boutton augmentation valeur */}
        <button onClick={augmenter}>+ </button>

        {/* Bouton décrémentation valeur */}
        <button onClick={diminuer}>- </button>

        <div>Compteur: {compteur}</div>
      </div>
    )
}

export default App;