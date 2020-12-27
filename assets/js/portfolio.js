/**
* Template Name: iPortfolio - v1.4.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
const portfolio = [
    {
        id: 001,
        title: "PicMe Usuário",
        description: [
            "O PicMe Fotógrafo foi um aplicativo desenvolvido em grupo (composto por quatro integrantes) para o Trabalho de Conclusão de Curso (TCC) no ano de 2019 do curso de Sistemas de Informação pela PUC-Campinas. O desenvolvimento durou 1 ano letivo, onde decidimos utilizar tecnologias em alta no mercado na época, como o React Native e o Firebase.",
            "A ideia do aplicativo consiste em dois aplicativos que se complementam no processo. Este em questão, é o aplicativo do usuário, que pode encontrar fotógrafos online próximos a ele dentro de um raio pré-definido, e então solicitar o serviço que deverá ocorrer nos próximos minutos. A proposta aqui é que o aplicativo seja utilizado em locais turísticos, onde os fotógrafos se posicionariam estratégicamente para atender as solicitações."
        ],
        features: [
            "Utilização de localização via GPS para promover o encontro de clientes e fotógrafos",
            "Solicitar um novo fotógrafo selecionando dispositivo e quantidade de fotos",
            "Visualizar histórico de sessões realizadas",
            "Adicionar saldo na carteira",
        ],
        images: [
            "assets/img/portfolio/001/1602670059625.png", "assets/img/portfolio/001/1602670066352.png", 
            "assets/img/portfolio/001/1602670074134.png", "assets/img/portfolio/001/1602670079079.png", 
            "assets/img/portfolio/001/1602670084004.png", "assets/img/portfolio/001/1602671498277.png", 
            "assets/img/portfolio/001/1602671522837.png", "assets/img/portfolio/001/1602671527663.png"
        ],
        tags: ["React Native", "Redux", "Firebase"],
    },
    {
        id: 002,
        title: "Outro projeto",
        description: [],
        features: [],
        images: [],
        tags: []
    },
];

function getPortfolio() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var idProject = url.searchParams.get("id");

    console.log(portfolio);

    const project = portfolio.find(proj => proj.id = idProject);

    const projectTags = document.getElementById("projectTags");
    for(let i = 0; i < project.tags.length; i++) {
        const newTag = document.createElement("a");
        const newContent = document.createElement("h5");
        const tagUrl = `https://www.google.com/search?q=${project.tags[i]}`;
        newTag.setAttribute("href", tagUrl);
        newTag.setAttribute("target", "_blank");
        const content = document.createTextNode(project.tags[i]);
        newContent.setAttribute("class", "tag-element");
        newContent.appendChild(content);
        newTag.appendChild(newContent);
        projectTags.appendChild(newTag);
    }

    const projectTitle = document.getElementById("projectTitle");
    projectTitle.innerHTML = project.title;

    const projectDescription = document.getElementById("projectDescription");
    for(let i = 0; i < project.description.length; i++) {
        const newParagraph = document.createElement("p");
        const content = document.createTextNode(project.description[i]);
        newParagraph.appendChild(content);
        projectDescription.appendChild(newParagraph);
    }

    const projectFeatures = document.getElementById("projectFeatureList");
    for(let i = 0; i < project.features.length; i++) {
        const newItemList = document.createElement("li");
        const icon = document.createElement("i");
        icon.setAttribute("class", "icofont-rounded-right");

        const content = document.createTextNode(project.features[i]);

        newItemList.appendChild(icon);
        newItemList.appendChild(content);

        projectFeatures.appendChild(newItemList);
    }

    const projectImageList = document.getElementById("projectImageList");
    for(let i = 0; i < project.images.length; i++) {
        const newImage = document.createElement("img");
        newImage.setAttribute("src", project.images[i]);
        newImage.setAttribute("class", "screenshot-template");
        projectImageList.appendChild(newImage);
    }
};
