// Busca um Pokémon na PokéAPI e devolve só o que vamos usar
export async function buscarPokemon(nome) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase().trim()}`;
    const resposta = await fetch(url);
    // Se o Pokémon não existir, a API responde com erro
    if (!resposta.ok) return null;
    const dados = await resposta.json();
    return {
        pokeId: dados.id,
        nome: dados.name,
        imagem: dados.sprites.front_default ?? "",
        tipo: dados.types[0].type.name,
    };
}