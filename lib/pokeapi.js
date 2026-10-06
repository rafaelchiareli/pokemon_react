//buscar um pokemon pelo nome e devolver so o que precisamos
export async function buscarPokemon(nome){
    const url = `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase().trim()}`;
    const resposta = await fetch(url);
    if (!resposta.ok) return null;

    const dados = await resposta.json();
    return {
        pokeId : dados.id,
        nome: dados.nome,
        imagem : dados.sprites.front_default ?? "",
        tipo: dados.types[0].type.name,
    }
}