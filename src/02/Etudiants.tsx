interface Props{
    Nom: string
    Prenom: string
    Age: number
}
export function Etudiants( props: Props){
    return (
        <div>
            Nom: <strong>{props.Nom}</strong><br />
            Prenom: <strong>{props.Prenom}</strong><br />
            Age: <strong>{props.Age}</strong>
        </div>
    )
}