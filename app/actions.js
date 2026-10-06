"use server";

import { prisma } from '../lib/prisma';
import { revalidatePath } from 'next/cache';

//salva o pokemon
export async function capturar(formData) {
    await prisma.pokemon.create({
        data: {
            pokeId: Number(formData.get("pokeId")),
            nome: formData.get("nome"),
            imagem: formData.get("imagem"),
            tipo: formData.get("tipo")
        }
    })
    revalidatePath("/");
}

export async function soltar(formData) {
    const id = Number(formData.get("id"));
    await prisma.pokemon.delete({ where: { id } });
    revalidatePath("/");
}