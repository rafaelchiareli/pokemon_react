export default function BuscaForm(){
    return (
        <form className="busca">
            <input name="nome" placeholder="Digite um pokemon" required />
            <button type="submit">Buscar</button>
        </form>
    )
}