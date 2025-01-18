import { database_ } from "@/firebase_config";
import { ref, get } from "firebase/database";
import { NextResponse } from "next/server";
/**
 * 
 * @param {Request} req - Objecto de requesicao HTTP
 * @returns {Response} - Resposta JSON com status apropiado
 */

export async function GET(req) {
    try {
        // referencia a colecao novidadade 
        const dbRef = ref(database_, "novidades");

        //obter referencia do snapshot dos dadso da referencia
        const snapshop = await get(dbRef);

        //verifica se a colecao existe e contem dados
        if (!snapshop.exists()) 
        {
            return NextResponse.json(
                {mensagem: "Nenhum dado encontrado na colecao 'novidades'!"},
                {status: 404}
            );
        }

        //extrair os dados do snapshot
        const dados = snapshop.val();
        return NextResponse.json(
            {dados: dados},
            {status: 201}
        )

    } catch (error) {
        console.error("Erro ao obter documento", error);
        return NextResponse.json(
            {error: "Erro interno ao obter novidade!"},
            {status: 500}
        );
    }
}