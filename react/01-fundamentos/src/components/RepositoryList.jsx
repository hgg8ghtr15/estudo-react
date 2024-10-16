import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"
import '../styles/repository.scss'

//https://api.github.com/users/hgg8ghtr15
//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
    const [repositories,setRepositories] = useState([])
    
    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    },[])

    return(
        <section className="repository-list">
            <h1>Minha lista de Repositorio:</h1>
            <ul>
                {
                    repositories.map( repository => {
                        return <RepositoryItem key={repository.name} repository={repository}/> 
                    })
                }            
            </ul>
        </section>
    )
}