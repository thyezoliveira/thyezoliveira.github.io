
/* Configuração de um novo projeto */

/**
 * 
 * 
 * {
        titulo: "O titulo do projeto",
        imagem: "O linke da captura de tela",
        imagemAlt: "Uma descrição breve do que tem na captura",
        descricao: "Uma descrição resumida do projeto.",
        data: "A data da criação do projeto",
        linkGithub: "O link do projeto no github",
        linkDemo: "O link da demo caso haja um",
        acessivel: "Descrição do tipo de projeto se ele é um Projeto no Github / Estudo [Ou pessoal] ou Demo acessível [jogável no caso de jogos]",
        tipo: "demo" //Quando for do tipo demo o link será o linkDemo, quado não for o link será o linkGithub
    } 
 * 
 * 
 */

export const projects = [
    {
        titulo: "Card Game - Super Trunfo",
        imagem: "https://github.com/thyezoliveira/cardGame_SuperTrunfo/raw/main/assets/captura1.png",
        imagemAlt: "Captura de tela do jogo Super Trunfo, feito por Thyéz Oliveira.",
        descricao: "Um mini jogo de cartas, no estilo Super Trunfo. Desenvolvido em Javascript.",
        data: "01/04/2021",
        linkGithub: "https://github.com/thyezoliveira/cardGame_SuperTrunfo",
        linkDemo: "https://codepen.io/thyezoliveiramonteiro/full/vYgydYx",
        acessivel: "Demo jogável no CodePen",
        tipo: "demo"
    },
    {
        titulo: "To-do",
        imagem: "https://github.com/thyezoliveira/projetoDeEstudo_listaDeTarefas/raw/main/assets/captura_tablet.png",
        imagemAlt: "Interface do aplicativo To-do.",
        descricao: "O To-do, é um app de lista de tarefas com objetivo simples de adicionar e remover tarefas de uma lista.",
        data: "05/03/2021",
        linkGithub: "https://github.com/thyezoliveira/projetoDeEstudo_listaDeTarefas",
        linkDemo: "",
        acessivel: "Projeto no Github / Estudo",
        tipo: "github"
    },   
    {
        titulo: "Clone Club House",
        imagem: "https://github.com/thyezoliveira/Treinamento_Clone_CH/raw/main/assets/meuApp_wImages.png",
        imagemAlt: "Interface do aplicativo club house.",
        descricao: "Um clone da interface do aplicativo club house, usando TailwindCSS.",
        data: "24/02/2021",
        linkGithub: "https://github.com/thyezoliveira/Treinamento_Clone_CH",
        linkDemo: "",
        acessivel: "Projeto no Github / Estudo",
        tipo:"github"
    }
]