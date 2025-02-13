import { Bienvenue } from "../02/Bienvenue";


function transform(valeur: number, index: number){
    return(
        <div key={index}>chiffre: {valeur}</div>
    )
}

function transform2(nom: string, index:number){
  return(
    // <div key={index}>Nom: {nom}</div>
    <Bienvenue key={index} name={nom}/>
  )
}

export function App03(){  
  const data =[5,10,30,50];
  const listEtudiant= data.map(transform);
  const data2 = ["Moriac", "Arnauld", "Prodige", "Chandler"]
  const Bienvenue =data2.map(transform2);

  return (
    <div>
      {listEtudiant}
      <hr />
      {Bienvenue}
    </div> 
 // <hr /> est utilisé pour séparer les parties du code html
  )
}
export default App03;