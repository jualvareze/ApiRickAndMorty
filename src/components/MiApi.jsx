import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
const MiApi = (props) => {
    const [dataCharacters, setDataCharacters] = useState([])
    const {busqueda} = props

    useEffect(() => {
        obtenerJson()
    }, [])


    const obtenerJson = async () => {
        const url = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(url)
        const data = await response.json()
        setDataCharacters(data.results)
    }


const ordenarPorNombre = () =>{
    let dataCharactersOrdenado = []
    let abcdario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
    for(var i=0;i<abcdario.length;i++){
        for(var j=0;j<dataCharacters.length;j++){
            if(dataCharacters[j].name.toLowerCase()[0]===abcdario[i]){
                dataCharactersOrdenado.push(dataCharacters[j]) 
            }
        }
    }
    return dataCharactersOrdenado
}

    return (
        <>
        <div className="grid p-3">
            {
                ordenarPorNombre().map(function(element){
                    let nombremin = element.name.toLowerCase()
                    if(busqueda==="" || nombremin.includes(busqueda)){
                        return <Card key={element.id} genero={element.gender} imagen={element.image} nombre={element.name} especie={element.species} origen={element.origin.name}></Card>
                    }else{
                        return ""
                    }  
                })
            }
            </div>
            </>)
}

export default MiApi