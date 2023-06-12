



const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.oninput = () => {
  content.innerHTML = "";

  items
    .filter((item) =>
      item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
};

function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(json=>console.log(json))
     //output
     [
        {
            id:1,
            title:'XboxConsole Microsoft Xbox Series S',
            price:'R$  2.399,99',
            category:'Console',
            description:'Xbox Series S, o menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital. Retrocompatibilidade com milhares de jogos. Prepare-se para tempos de carregamento mais rápidos, resolução mais alta, taxas de quadros mais estáveis e melhor latência de entrada em milhares de jogos Xbox One, Xbox 360 e Xbox Original.',
            image:'https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_gg.jpg'
        },
        /*...*/
        {
            id:2,
            title:'Teclado Mecânico Gamer Husky',
            price:'R$ 279,99',
            category:'teclado',
            description:'Teclado Mecânico Gamer Husky Gaming Blizzard 60%, RGB, Switch Gateron Red, ABNT2, Branco O Teclado Mecânico Gamer Husky Gaming Blizzard, 60%, RGB, Switch Gateron Red, ABNT2, Branco é perfeito para quem precisa de performance e precisão. Prepare-se para muitas horas de batalha intensa em seus gameplays! Switches com feedback audível e tátil Switch Gateron Red contam com um feedback audível e tátil. É versátil e aprimorado em relação a outros switches. Ele traz a tecnologia dos switches mecânicos e é um ícone para os jogos e longos períodos de digitação. Tem um clique único, suas teclas possuem um som “clicky” característico. Teclado Mecânico com Anti-Ghosting Cada tecla tem um conjunto de interruptor e mola próprio. Com Teclas 100% Anti-Ghosting garante o funcionamento de comandos mesmo quando várias teclas são acionadas simultaneamente. Praticidade e Durabilidade Cabo em nylon com USB C destacável e switches removíveis e a prova de poeira. 50 Milhões de toques por tecla sem perda de qualidade e agilidade ao serem acionadas. Backlight RGB É possível configurar o RGB através do software do próprio teclado. São 12 opções de iluminação. Formato 60% Ideal para setups minimalistas. Design compacto e toda funcionalidade dos teclados comuns. O teclado conta também com Layout ABNT2 para facilitar seu dia-a-dia.',
            image:'https://images.kabum.com.br/produtos/fotos/114587/teclado-mecanico-gamer-husky-blizzard-rgb-switch-gateron-red-abnt2-branco-tc-hbl-br_1619467058_gg.jpg'
        }
    ]