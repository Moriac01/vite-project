interface Props{
    lang?: string
    name: string
}

export function Bienvenue(props: Props){
    if (props.lang == "en") {
    return (
    <p>Hello <strong/>{props.name} ! :)<strong/></p>
    )
    
}
    return (
    <p>Bonjour <strong/>{props.name}! :)<strong/></p>
    )}