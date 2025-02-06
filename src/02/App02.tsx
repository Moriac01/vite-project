import { Bienvenue } from "./Bienvenue";
import { Capitale } from "./Capitale";
import { Etudiants } from "./Etudiants";


export function App02(){
    return(
        <div>
            <h1>Capitale</h1>
            <Capitale pays="RCA" ville="Bangui"/>
            <Capitale pays="USA" ville="New York"/>
           <Capitale pays="FR" ville="Paris"/>
          <Capitale pays="ES" ville="Madrid"/>
          <Capitale pays="UK" ville="London"/>
          <Capitale pays="IT" ville="Rome"/>
          <Capitale pays="CH" ville="Berne"/>
          <Capitale pays="JP" ville="Tokyo"/>
         <Capitale pays="DE" ville="Berlin"/>
         <Capitale pays="GR" ville="Athens"/>
         <Capitale pays="BR" ville="Brasília"/>
         <Capitale pays="IN" ville="Mumbai"/>
          
          <h1>Etudiant</h1>
          <Etudiants Nom="KPANGAM" Prenom="Moriac" Age={35}/>

          <h1>Bienvenue</h1>
          <Bienvenue lang="en" name= "Moriac KPANGAM"/>
          <Bienvenue lang="fr" name= "Kim Pangam"/>
        
        </div>
       
    )
}

export default App02;