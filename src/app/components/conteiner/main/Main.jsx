import "./main.css"
export default function Main() {

    const data = [
        {"id":"4", "cultura":"", "size":"big", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
        {"id":"1", "desporto":"", "size":"big", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
        {"id":"3", "politica":"", "size":"wide", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
        {"id":"2", "ciencia":"", "size":"wide", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
        {"id":"5", "fofoca":"", "size":"wide", "image": "/img/img.jpg", "descricao": "As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles. Elas podem indicar diversos tipos de relações, As preposições são palavras invariáveis que servem para ligar termos em uma oração, estabelecendo relações de dependência, sentido ou significado entre eles."},
    ];

    return (
        <div className="grid-wrapper">
                {data.map((item) => (
                    <div key={item["id"]} className={item["size"]}>
                        <img src={item["image"]} alt="" />
                        <h3>{item["titulo"]}</h3>
                        <p className="titulo">{item["descricao"]}</p>
                        <p className="tipo">Desporto</p>
                    </div>
                ))}
            </div>
        
    );
}








/*



export default function Main() {
  return (
    <div className="conteiner-main">
      <div className="destaque">
        <div className="destaque-item1">
          <Card
            imagem="/img/img.jpg"
            descricao="Destaque principal"
          />
        </div>

        <div className="destaque-item2">
          <div className="destaque-item2-1">
            <Card
              imagem="/img/img.jpg"
              descricao="Destaque superior"
            />
          </div>

          <div className="destaque-item2-2">
            <div>
              <Card
                imagem="/img/img.jpg"
                descricao="Primeiro card"
              />
            </div>
            <div>
              <Card
                imagem="/img/img.jpg"
                descricao="Segundo card"
              />
            </div>
          </div>
        </div>

        <div className="destaque-item3">
          <div className="destaque-item3-1">
            <Card
              imagem="/img/img.jpg"
              descricao="Destaque inferior esquerdo"
            />
          </div>

          <div className="destaque-item3-2">
            <Card
              imagem="/img/img.jpg"
              descricao="Destaque inferior direito"
            />
          </div>
        </div>
      </div>

      <div className="cultura">
        <Card
          imagem="/img/img.jpg"
          descricao="Cultura em destaque"
        />
      </div>

      <div className="venda">
        <Card
          imagem="/img/img.jpg"
          descricao="Promoções imperdíveis"
        />
      </div>
    </div>
  );
}
*/