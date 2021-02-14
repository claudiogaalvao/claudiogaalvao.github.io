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
            `O PicMe Usuário é um aplicativo que foi desenvolvido em grupo (composto por quatro integrantes) para o Trabalho de Conclusão de Curso (TCC) no ano de 2019 do curso de 
            Sistemas de Informação pela PUC-Campinas. O desenvolvimento durou 1 ano letivo, onde decidimos utilizar tecnologias em alta no mercado, como o React Native e o Firebase.`,
            `A ideia do aplicativo consiste em dois aplicativos que se complementam no processo. Este em questão, é o aplicativo do usuário, que pode encontrar fotógrafos online 
            próximos a ele dentro de um raio pré-definido, e então solicitar o serviço que deverá ocorrer nos próximos minutos. A proposta aqui é que o aplicativo seja utilizado 
            em locais turísticos, onde os fotógrafos se posicionariam estratégicamente para atender as solicitações.`
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
        description: [
            `O PicMe Fotógrafo é um aplicativo que foi desenvolvido em grupo (composto por quatro integrantes) para o Trabalho de Conclusão de Curso (TCC) no ano de 2019 do curso de 
            Sistemas de Informação pela PUC-Campinas. O desenvolvimento durou 1 ano letivo, onde decidimos utilizar tecnologias em alta no mercado, como o React Native e o Firebase.`,
            `Este é um aplicativo complementar a outro disponível no portfólio, o PicMe Usuário. O PicMe Fotógrafo tem como objetivo permitir que o fotógrafo fique online para 
            atender às solicitações dos usuários e, após realizar o serviço, deverá enviar as fotos da sessão para então receber o valor do serviço. Além disso, ele pode também 
            realizar uma série de outras interações no app como gerenciar fotos do portfólio no seu perfil, gerenciar equipamentos que usará na prestação dos serviços e 
            visualizar histórico de sessões realizadas.`
        ],
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
        description: [
            `Assim como o PicMe Fotógrafo e o PicMe Usuário, o PicMe Admin foi um aplicativo desenvolvido para complementá-los, desenvolvido em grupo 
            (composto por quatro integrantes) para o Trabalho de Conclusão de Curso (TCC) no ano de 2019 do curso de Sistemas de Informação pela PUC-Campinas.`,
            `O objetivo desta aplicação web desenvolvida em React e integrada ao Firebase, é servir como um administrador da plataforma, que irá analisar o cadastro de novos 
            fotógrafos, verificando os dados enviados juntamente com a foto do documento que é enviada. Somente com a aprovação do admin, o fotógrafo poderá utilizar a plataforma. 
            O admin pode também gerenciar os equipamentos que a plataforma aceita, além de gerenciar as categorias em que os fotógrafos podem se encaixar para realizar os 
            atendimentos, definindo quantidade mínima de fotos por sessão e o preço por foto.`
        ],
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
        description: [
            `O App Agência de Viagens é um aplicativo que foi desenvolvido de forma nativa para Android com Java, afim de aplicar o uso de RecyclerView que traz 
            um enorme ganho de performance para as aplicações Android e veio para substituir views menos performáticas como o ListView e o GridView.`
        ],
        features: [
            "Listagem de destinos disponíveis",
            "Visualizar detalhes do destino",
            "Realizar a compra para o destino selecionado",
        ],
        images: [
            "assets/img/portfolio/004/1609600393522.png", "assets/img/portfolio/004/1609600398695.png", 
            "assets/img/portfolio/004/1609600404230.png", "assets/img/portfolio/004/1609600408609.png",
        ],
        tags: ["Android", "Java"],
        filterType: 'app',
    },
    {
        id: '005',
        title: "Gerenciador de Finanças",
        description: [
            `O App Gerenciador de Finanças é um aplicativo que foi desenvolvido de forma nativa para Android com Kotlin. Nele é possível realizar um controle financeiro 
            separando as receitas e despesas por categoria, de forma a acompanhar o saldo conforme atualiza o app com as transações realizadas.`
        ],
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

!(function($) {
    "use strict";

    $('form.contact-form').submit(function(e) {
        e.preventDefault();
        
        var templateParams = {
            from_name: '',
            reply_to: '',
            subject: '',
            message: '',
        };

        var f = $(this).find('.form-group'),
            ferror = false,
            emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

        f.children('input').each(function() { // run all inputs
    
            var i = $(this); // current input
            var rule = i.attr('data-rule');
            templateParams[i.attr('data-template')] = i.val();
            
            if (rule !== undefined) {
                var ierror = false; // error flag for current input
                var pos = rule.indexOf(':', 0);
                if (pos >= 0) {
                    var exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }
        
                switch (rule) {
                case 'required':
                    if (i.val() === '') {
                    ferror = ierror = true;
                    }
                    break;
        
                case 'minlen':
                    if (i.val().length < parseInt(exp)) {
                    ferror = ierror = true;
                    }
                    break;
        
                case 'email':
                    if (!emailExp.test(i.val())) {
                    ferror = ierror = true;
                    }
                    break;
        
                case 'checked':
                    if (! i.is(':checked')) {
                    ferror = ierror = true;
                    }
                    break;
        
                case 'regexp':
                    exp = new RegExp(exp);
                    if (!exp.test(i.val())) {
                    ferror = ierror = true;
                    }
                    break;
                }
                i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
            }
        });
        f.children('textarea').each(function() { // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');
            templateParams[i.attr('data-template')] = i.val();
            
            if (rule !== undefined) {
              var ierror = false; // error flag for current input
              var pos = rule.indexOf(':', 0);
              if (pos >= 0) {
                var exp = rule.substr(pos + 1, rule.length);
                rule = rule.substr(0, pos);
              } else {
                rule = rule.substr(pos + 1, rule.length);
              }
      
              switch (rule) {
                case 'required':
                  if (i.val() === '') {
                    ferror = ierror = true;
                  }
                  break;
      
                case 'minlen':
                  if (i.val().length < parseInt(exp)) {
                    ferror = ierror = true;
                  }
                  break;
              }
              i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
            }
        });
        if (ferror) return false;

        var this_form = $(this);
        
        this_form.find('.sent-message').slideUp();
        this_form.find('.error-message').slideUp();
        this_form.find('.loading').slideDown();

        sendEmail(this_form, templateParams);

        return true;
    });

    function sendEmail (this_form, templateParams) {
        const parameters = {
            "user_id": "user_WKYCPkkYVOm0cRZJCqPhG",
            "service_id": "service_9r8lkrj",
            "template_id": "template_qrsr57l",
            "template_params": templateParams,
        }

        $.ajax({
            type: 'POST',
            url: 'https://api.emailjs.com/api/v1.0/email/send',
            data: JSON.stringify(parameters),
            contentType: "application/json",
            dataType: 'json',
            timeout: 6000
        })
        .always(function(res) {
            console.log(res);
            console.log(res.status);
            if(res.status === 200) {
                this_form.find('.loading').slideUp();
                this_form.find('.sent-message').slideDown();
                this_form.find("input:not(input[type=submit]), textarea").val('');
            } else {
                this_form.find('.loading').slideUp();
                if(!msg) {
                    msg = 'Submissão do formulário falhou';
                }
                this_form.find('.error-message').slideDown().html(msg);
            }
        });
    }

})(jQuery);

function initializeMainPage() {
    console.log('iniciado');
    setCurrentAge();
    buildPortfolioList();
}

function setCurrentAge() {
    const ageElement = document.getElementById('currentAge');
    const currentAge = document.createTextNode(calculateAge());
    ageElement.appendChild(currentAge);
}

function setMobileExperienceTime() {
    const startDate = new Date(2020, 3, 16);
    const today = new Date();
    const diffMonths = today.getMonth() - startDate.getMonth() + (12 * (today.getFullYear() - startDate.getFullYear()));
    var textMobileExperienceTime = '';
    if(diffMonths > 12) {
        const years = parseInt(diffMonths / 12);
        const months = diffMonths % 12;
        const yearsText = years > 1 ? `${years} anos` : '1 ano';
        const monthsText = months > 1 ? `${months} meses` : '1 mês';

        textMobileExperienceTime = `${yearsText} e ${monthsText}`;
    } else {
        textMobileExperienceTime = `${diffMonths} meses`;
    }

    document.getElementById('mobileExperienceTime').innerText = textMobileExperienceTime;
}

function calculateAge() { // birthday is a date
    const birthday = new Date(1996, 11, 10);
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function buildPortfolioList() {
    const portfolioList = document.getElementById('portfolio-list');

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

        portfolioList.appendChild(container);      
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
            document.title = project.title;
        
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
