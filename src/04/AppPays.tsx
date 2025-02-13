import { useState } from "react";


export function AppPays(){
    const [flag,setflag] = useState("./img/central-afrfica-republic.png");
    const [pays, setpays] = useState("République Centrafricaine");
    const [capitale, setcapitale] = useState("Bangui");

    function setRCA(){
        setflag("./img/central-african-republic.png");
        setpays("République Centrafricaine");
        setcapitale("Bangui");
    }
    
    function setUSA(){
        setflag("./img/united-states-of-america.png");
        setpays("États-Unis d'Amérique");
        setcapitale("Washington D.C.");
    }

    return (
        <div>
            <h1>Détail du pays</h1>
            <img src={flag} alt={pays} width={200}/>
            <h2>{pays}</h2>
            <p>Capitale : {capitale}</p>
            <button onClick={setRCA}>République Centrafricaine</button>
            <button onClick={setUSA}>États-Unis d'Amérique</button>
        </div>
    )


}