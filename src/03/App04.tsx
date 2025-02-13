import { Etudiants } from "../02/Etudiants";
// variable tableau
const listEtudiants = [  
    
    {
        Nom: "KPANGAM",
        Prenom: "Moriac",
        Age: 24
     } ,

     {
        Nom: "John",
        Prenom : "DOE",
        Age: 21
     } 
];

export function App04(){
    const EtudiantsList= listEtudiants.map(function(e, index){
        return (
            <Etudiants key={index}
                Nom={e.Nom} 
                Prenom={e.Prenom}
                Age={e.Age}
            />  // Etudiants est une fonction qui prend en parametre des props et renvoie un composant React
        )
    });

    return (
        <div>
            <h1>Liste des Etudiants</h1>            
            {EtudiantsList}
        </div>
    )
}

export default App04;
