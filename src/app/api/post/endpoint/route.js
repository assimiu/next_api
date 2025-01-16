import { database_ } from "@/firebase_config";
import { ref, push, set } from "firebase/database";
import { NextResponse } from "next/server";

/**
 * @param {Request} req - Objecto de requisicao HTTP
 * @returns {Response} - Resposta JSON com status apropriado
 */

export async function POST(req) {

    try {
        //Lendo e validado corpo de request
        const dados = await req.json();
        if (!dados || typeof dados !== "object") {
            return NextResponse.json({erro: "Dados inválidos!"}, {status: 400});
        }

        const {titulo, descricao, foto} = dados;
        
        if ( !titulo || !descricao || !foto)
        {
            return NextResponse.json({error: "Ddaos inválidos! Campoa obrigatórios: titulo, descricao, hora, foto"},
                {status: 400}
            );
        }

        //Adicionar os dados ao DataBase
        const dbRef = ref(database_, "novidades");
        const newNovidade = push(dbRef);
        const data = new Date().toISOString();
        await set(newNovidade, {titulo, descricao, foto, data})

        return NextResponse.json(
            {message: "Novidade adicionado com sucesso!", data: data},
            {status: 201}
        );
    } catch (error) {
        console.error("Erro ao adicionar documento:", error);
        return NextResponse.json(
            {error: "Erro interno ao adicionar novidade"},
            {status: 500}
        );
    }


}

