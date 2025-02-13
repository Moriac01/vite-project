import {Country} from './Country';

interface CountryType{
    Pays: string
    Capitale: string
    Population: string
    Flag: string
} 




const countryList:Array<CountryType> = [
    {
        Pays: "Republique Centrafricaine",
        Capitale: "Bangui",
        Population: "5 million",
        Flag: "./img/central-african-republic.png",
    },

    
    {
        Pays: "Canada",
        Capitale: "Ottawa",
        Population: "40.1 million",
        Flag: "/img/world.png",
    },

    {
        Pays: "Etats Unis",
        Capitale: "Washington, D.C",
        Population: "334.9 million",
        Flag: "/img/united-states-of-america.png" 
    }

];


export function CountryApp(){
    const countries = countryList.map(function(e, index) {
        return(
            <Country
                key = {index} 
                Pays = {e.Pays }
                Capitale = {e.Capitale}
                Population = {e.Population}
                Flag = {e.Flag}
            />
        )
    });


    return(
        <div>
            <h1>Liste des pays</h1>
            {countries}
        </div>
    )
}
export default CountryApp