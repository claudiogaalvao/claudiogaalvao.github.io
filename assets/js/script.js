/**
* Template Name: iPortfolio - v1.4.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
const portfolio = [
    {
        id: '001',
        title: "PicMe Usuário",
        description: [
            "O PicMe Usuário foi um aplicativo desenvolvido em grupo (composto por quatro integrantes) para o Trabalho de Conclusão de Curso (TCC) no ano de 2019 do curso de Sistemas de Informação pela PUC-Campinas. O desenvolvimento durou 1 ano letivo, onde decidimos utilizar tecnologias em alta no mercado na época, como o React Native e o Firebase.",
            "A ideia do aplicativo consiste em dois aplicativos que se complementam no processo. Este em questão, é o aplicativo do usuário, que pode encontrar fotógrafos online próximos a ele dentro de um raio pré-definido, e então solicitar o serviço que deverá ocorrer nos próximos minutos. A proposta aqui é que o aplicativo seja utilizado em locais turísticos, onde os fotógrafos se posicionariam estratégicamente para atender as solicitações."
        ],
        features: [
            "Utilização de localização via GPS para promover o encontro de cliente e fotógrafos",
            "Solicitar um novo fotógrafo selecionando dispositivo e quantidade de fotos",
            "Visualizar histórico de sessões realizadas",
            "Adicionar saldo na carteira",
        ],
        images: [
            "assets/img/portfolio/001/1602670059625.png", "assets/img/portfolio/001/1602670066352.png", 
            "assets/img/portfolio/001/1602670074134.png", "assets/img/portfolio/001/1602670079079.png", 
            "assets/img/portfolio/001/1602670084004.png", "assets/img/portfolio/001/1602671498277.png", 
            "assets/img/portfolio/001/1602671522837.png", "assets/img/portfolio/001/1602671527663.png",
            "assets/img/portfolio/001/1609427335475.png", "assets/img/portfolio/001/1609427353928.png", 
            "assets/img/portfolio/001/1609427371928.png"
        ],
        tags: ["React Native", "Redux", "Firebase"],
        filterType: 'app',
    },
    {
        id: '002',
        title: "PicMe Fotógrafo",
        description: ['Alguma descrição aqui...'],
        features: [
            "Utilização de localização via GPS para promover o encontro de clientes e fotógrafo",
            "Gerenciar fotos do perfil para portfólio",
            "Realizar o envio das fotos da sessão",
            "Visualizar histórico de sessões concluídas",
            "Gerenciar equipamentos",
            "Aceitar, iniciar e finalizar sessão",
            "Acompanhar ganhos",
        ],
        images: [
            "assets/img/portfolio/002/1609443411937.png", "assets/img/portfolio/002/1609443421674.png", 
            "assets/img/portfolio/002/1609443427406.png", "assets/img/portfolio/002/1609443433973.png", 
            "assets/img/portfolio/002/1609443439201.png", "assets/img/portfolio/002/1609443449912.png", 
            "assets/img/portfolio/002/1609443457170.png", "assets/img/portfolio/002/1609443463118.png",
            "assets/img/portfolio/002/1609443468368.png", "assets/img/portfolio/002/1609444016676.png", 
            "assets/img/portfolio/002/1609444032012.png", "assets/img/portfolio/002/1609444040680.png", 
            "assets/img/portfolio/002/1609444052853.png"
        ],
        tags: ["React Native", "Redux", "Firebase"],
        filterType: 'app',
    },
    {
        id: '003',
        title: "PicMe Admin",
        description: ['Alguma descrição aqui...'],
        features: [
            "Aprovar/Reprovar novos cadastros de fotógrafos na plataforma",
            "Gerenciar equipamentos que a plataforma permite",
            "Gerenciar as categorias, preço e quantidade mínima de fotos por categoria",
        ],
        images: [
            "assets/img/portfolio/003/Screenshot_0.png", "assets/img/portfolio/003/Screenshot_1.png", 
            "assets/img/portfolio/003/Screenshot_2.png", "assets/img/portfolio/003/Screenshot_3.png", 
            "assets/img/portfolio/003/Screenshot_4.png", "assets/img/portfolio/003/Screenshot_5.png", 
            "assets/img/portfolio/003/Screenshot_6.png", "assets/img/portfolio/003/Screenshot_7.png",
            "assets/img/portfolio/003/Screenshot_8.png", "assets/img/portfolio/003/Screenshot_9.png",
        ],
        tags: ["React", "Redux", "Firebase"],
        filterType: 'web',
    },
    {
        id: '004',
        title: "App Agência de Viagens",
        description: ['Alguma descrição aqui...'],
        features: [
            "Listagem de destinos disponíveis",
            "Visualizar detalhes do destino",
            "Realizar a compra para o destino selecionado",
        ],
        images: [
            "assets/img/portfolio/004/1609600393522.png", "assets/img/portfolio/004/1609600398695.png", 
            "assets/img/portfolio/004/1609600404230.png", "assets/img/portfolio/004/1609600408609.png",
        ],
        tags: ["Android", "Java", "RecyclerView"],
        filterType: 'app',
    },
    {
        id: '005',
        title: "Gerenciador de Finanças",
        description: ['Alguma descrição aqui...'],
        features: [
            "Visualizar histórico de receitas, despesas e saldo atual",
            "Adicionar uma nova receita",
            "Adicionar uma nova despesa",
            "Remover uma transação"
        ],
        images: [
            "assets/img/portfolio/005/1609600413808.png", "assets/img/portfolio/005/1609600418484.png", 
            "assets/img/portfolio/005/1609600422463.png", "assets/img/portfolio/005/1609600426546.png",
        ],
        tags: ["Android", "Kotlin"],
        filterType: 'app',
    },
];

async function sendForm(event) {
    event.preventDefault();

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    const templateParams = {
        from_name: name,
        reply_to: email,
        subject: subject,
        message: message,
    };

    const parameters = {
        "user_id": "user_WKYCPkkYVOm0cRZJCqPhG",
        "service_id": "service_9r8lkrj",
        "template_id": "template_qrsr57l",
        "template_params": templateParams,
    }

    const rawResponse = await sendEmail(parameters);
    return false;
}

async function sendEmail(parameters) {
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(parameters)
    });
}

function initializeMainPage() {
    setCurrentAge();
    buildPortfolioList();
}

function setCurrentAge() {
    const ageElement = document.getElementById('currentAge');
    const currentAge = document.createTextNode(calculateAge());
    ageElement.appendChild(currentAge);
}

function calculateAge() { // birthday is a date
    const birthday = new Date(1996, 11, 10);
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function buildPortfolioList() {
    const porfolioList = document.getElementById('portfolio-list');

    portfolio.forEach((item) => {
        const container = document.createElement('div');
        container.setAttribute('class', `col-lg-4 col-md-6 portfolio-item filter-${item.filterType}`);
        
        const content = document.createElement('div');
        content.setAttribute('class', 'portfolio-wrap');

        const srcImage = `assets/img/portfolio/${item.id}/main-photo.png`;
        const image = document.createElement('img');
        image.setAttribute('src', srcImage);
        image.setAttribute('class', 'img-fluid');

        const resumeContent = document.createElement('div');
        resumeContent.setAttribute('class', 'portfolio-resume');

        const projectTitle = document.createElement('h3');
        projectTitle.innerHTML = item.title;

        const projectDescription = document.createElement('p');
        projectDescription.innerHTML = item.description[0];
        
        const projectTagList = document.createElement('ul');
        item.tags.forEach((tag) => {
            const projectTag = document.createElement('li');
            projectTag.innerHTML = tag;
            projectTagList.appendChild(projectTag);
        });

        const projectLink = document.createElement('a')
        projectLink.setAttribute('href', `portfolio-details.html?id=${item.id}`)
        projectLink.innerHTML = 'Ver detalhes';

        resumeContent.appendChild(projectTitle);
        resumeContent.appendChild(projectDescription);
        resumeContent.appendChild(projectTagList);
        resumeContent.appendChild(projectLink);

        content.appendChild(image);
        content.appendChild(resumeContent);

        container.appendChild(content);

        porfolioList.appendChild(container);      
    });

}

function buildPortfolioPage() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var idProject = url.searchParams.get("id");

    portfolio.forEach((project) => {
        if(project.id === idProject) {
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

                let screenshotTemplateStyle = 'screenshot-template'
                if(project.filterType === 'web') {
                    screenshotTemplateStyle = 'screenshot-template-web';
                }
                newImage.setAttribute("class", screenshotTemplateStyle);
                projectImageList.appendChild(newImage);
            }
        }
    });
};
