import { collection, addDoc } from "firebase/firestore";
import { firestore_ } from "../../../../../firebase_config";
import { NextResponse } from "next/server";

/**
 * Adiciona um novo documento à coleção "users" no Firestore.
 * @param {Request} req - Objeto de requisição HTTP.
 * @returns {Response} - Resposta JSON com status apropriado.
 */
export async function POST(req) {
  try {
    // Lendo e validando o corpo da requisição
    const data = await req.json();

    if (!data || typeof data !== "object" || !data.nome || !data.idade) {
      return NextResponse.json(
        { error: "Dados inválidos! Campos obrigatórios: nome, idade." },
        { status: 400 }
      );
    }

    // Adicionando os dados ao Firestore
    const docRef = await addDoc(collection(firestore_, "users"), data);

    return NextResponse.json(
      { message: "Usuário adicionado com sucesso!", id: docRef.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao adicionar documento:", error);
    return NextResponse.json(
      { error: "Erro interno ao adicionar usuário!" },
      { status: 500 }
    );
  }
}


/*
import { collection, addDoc, getDoc } from "firebase/firestore";
import {database_, firestore_} from "../../../firebase_config"



export default async function handler(req, res) {

    try {
        const [userId, nome, idade] = req.body;
        const docRef = await addDoc(collection(firestore_, "users"), {
            "nome": "Assimiu",
            idade: 26,
        });
        
        console.log("Documento adicionado", docRef.id);
    } catch (error) {
        console.error("Erro ao adicionar documento");
    }
}*/