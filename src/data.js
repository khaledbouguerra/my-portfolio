export const products = [

    {
        id: 1,
        title:'BNP Paribas: Sunvision',
        desc:'A banking application that allows operators to match the regulators alerts list with the bank clients, if an alert is raised for a specific user the operators can analyse the matching data and apply a decision for the client account. Other Features : sso authentication with oidc, reporting users activity using charts (ngx-charts), notifications, users management ...' ,
        img: "assets/images/project_3.jpg",
        link: "http://google.com",
        stack:{
            front:' Front : Angular 15(strict mode), ngrx for state management, angular material.',
            api:'Api : springBoot',
            tools:'Tools : Eslint ,airbnb style guide husky, Prettier, Gitlab-ci, Jira'
        }
    },
    {
        id: 3,
        title:'France TV : Live',
        desc:'A multi-service application that allows journalists to create lives using an editor and retrieve different news from different resources (AFP,Twitter, Facebook...etc) and create llive threads using them, the application also allows end users to interact with journalists through comments or messages private. The application contains also a back office which allows users to configure the lives and the sharing strategies in different channels (France info, overseas, region, etc.).',
        img: "assets/images/project_3.jpg",
        link: "",
        stack:{
            front:'Front : ReactJs, Ejs',
            api:'Api : NodeJs, Express, MongoDB, ElasticSearch',
            tools:'Tools : Eslint, Prettier, Gitlab-ci, Jira'
        }
    },
    {
        id: 4,
        title:'Renault :Canopy',
        desc:'A web application that allows data scientists to generate sub-applications of different types (python fastApi, node angular, r-shiny, etc.) by creating the different components necessary for the application (creation of the repo in gitlab with a predefined template, creation of the CI/CD pipeline with the different jobs( build , test deploy in intra or GCP ) .it also controls access to the created applications using a reverse proxy created in backend and the user information (using authentication openid-connect code flow ) and using their role to enable/disable access , it displays also the status of applications and enables admins to modify them.',
        img: "assets/images/project_3.jpg",
        link: "",
        stack:{
            front:'Front : Angular, Bootstrap',
            api:'Api : NodeJs, Express, MongoDB, ElasticSearch',
            tools:'Tools :  Gitlab-ci, Jira,SonarQube, Docker'
        }
    },
    {
        id: 5,
        title:'Renault :Boost OAO',
        desc:'A web application that allows users to calculate, compare and generate reports on different performance indicators for different car models/brands (Renault, Nissan, Mitsubishi) and Estimate sales after combining and changing indicators values.',
        img: "assets/images/project_3.jpg",
        link: "http://google.com",
        stack:{
            front:'Front : Angular, Bootstrap',
            api:'Api : NodeJs, Express, Postgresql , sequelize',
            tools:'Tools : Gitlab-ci, Jira, Docker ,SonarQube'
        }
    },
    {
        id: 6,
        img: "assets/images/project_3.jpg",
        title:'Proxym-it : AGB',
        desc:'Conception and development of an e-Banking application',
        link: "http://google.com",
        stack:{
            front:'Front : Angular 4, Bootstrap',
            api:'Api : SpringBoot',
            tools:'Tools : Gitlab-ci, Jira, Docker, IBM mobile first'
        }
    },
    {
        id: 7,
        title:'SocialM',
        desc:'Social Media application build with nodeJS in the backend and reactJS in the front , the main focus\n' +
            '                    is to create an application that follows the clean architecture guide in the',
        img: "assets/images/social-app.png",
        link: "http://google.com",
        code:'https://github.com/khaledbouguerra/SocialM',
        stack:{
            front:' Front : ReactJS (using redux pattern)',
            api:'Api : nodejs,mongodb ,mongoose, joi...',
            tools:'Tools : Eslint , husky, Prettier'
        }
    },
];