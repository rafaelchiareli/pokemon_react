"use server";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
// Salva um Pokémon no banco
export async function capturar(formData) {
    await prisma.pokemon.create({
        data: {
            pokeId: Number(formData.get("pokeId")),
            nome: formData.get("nome"),
            imagem: formData.get("imagem"),
            tipo: formData.get("tipo"),
        },
    });
    revalidatePath("/");
}
// Remove um Pokémon do banco
export async function soltar(formData) {
    const id = Number(formData.get("id"));
    await prisma.pokemon.delete({ where: { id } });
    revalidatePath("/");
}

// Salva um Pokémon no banco
