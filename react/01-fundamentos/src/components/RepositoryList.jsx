import { RepositoryItem } from "./RepositoryItem"


export function RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Minha lista de Repositorio:</h1>
            <ul>
               <RepositoryItem repository="Projeto 1"/> 
               <RepositoryItem repository="Projeto 2"/> 
            
            </ul>
        </section>
    )
}