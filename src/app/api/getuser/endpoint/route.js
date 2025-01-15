import { collection, getDocs } from "firebase/firestore";
import { firestore_ } from "../../../../firebase_config";
import { NextResponse } from "next/server";

/**
 * Retorna todos os usuários da coleção "users" no Firestore.
 * @returns {Response} - Resposta JSON com os usuários.
 */
export async function GET() {
  try {
    // Buscando a coleção no Firestore
    const ref = collection(firestore_, "users");
    const snapshot = await getDocs(ref);

    // Transformando documentos em um array serializável
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Retornando os dados em caso de sucesso
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar documentos:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar usuários!" },
      { status: 500 }
    );
  }
}
