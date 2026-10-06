import { soltar } from "../actions";
export default function PokemonCard({ pokemon }) {
    return (
        <div className="card">
            <img src={pokemon.image} alt={pokemon.nome} width={96} height={96} />
            <p className="nome">{pokemon.nome}</p>
            <span className="tipo">{pokemon.tipo}</span>
            <form action={soltar}>
                <input type='hidden' name='id' value={pokemon.id} />
                <button type='submit' className='soltar'>Soltar</button>
            </form>
        </div>
    )
}