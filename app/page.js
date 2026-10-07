import { prisma } from '../lib/prisma'
import { buscarPokemon } from '../lib/pokeapi'
import BuscaForm from './components/BuscaForm'
import PokemonEncontrado from './components/PokemonEncontrado'
import MinhaPokedex from './components/MinhaPokedex'

//sempre que abrir a página os dados sempre são renovados.

export default async function Home({ searchParams }) {
  const { nome } = await searchParams;

  //se buscou algo
  const encontrado = nome ? await buscarPokemon(nome) : null;

  //buscar os pokemons que já estão salvos.
  const meusPokemons = await prisma.pokemon.findMany();
  //montar a tela

  return (
    <main>
      <h1>Minha Pokedex </h1>
      <BuscaForm />
      {nome && !encontrado && (
        <p className="erro">Pokemon não encontrado com o nome {nome}</p>
      )}
      {encontrado && <PokemonEncontrado pokemon={encontrado} />}
      <h2>Meus Pokemons ({meusPokemons.length})</h2>
      <MinhaPokedex pokemons={meusPokemons} />
    </main>
  )
}
