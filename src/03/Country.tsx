interface Props{
    Pays: string
    Capitale: string
    Population: string
    Flag: string
}


export function Country(props: Props){
    return(
        <div>
            Pays: {props.Pays}<br />
            Capitale: {props.Capitale}<br />
            Population: {props.Population}<br />
            Flag: <img src={props.Flag} width={20} alt=""/><br />
        </div>
    )
}
export default Country;