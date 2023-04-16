import { IPersonalInfoWork } from '~/types/personalInfo';

export const works: IPersonalInfoWork[] = [
    {
        id: 4,
        org: {
            name: 'MOVA S.E.P.',
            url: 'https://mova.vc/',
            logoUrl: 'https://mova.vc/img/footer_logo_mova.svg',
        },
        local: 'Remoto',
        role: 'Desenvolvedor front-end pleno',
        startDate: '2022',
        endDate: 'Agora',
        skills: ['HTML5', 'CSS3', 'Vue', 'Vuetify', 'Javascript', 'Typescript', 'Cypress', 'Playwright', 'Jest'],
        meta: {
            orgNameGender: 'female',
        },
    },
    {
        id: 3,
        org: {
            name: 'MOVA S.E.P.',
            logoUrl: 'https://mova.vc/img/footer_logo_mova.svg',
            url: 'https://mova.vc/',
        },
        local: 'Remoto',
        role: 'Desenvolvedor front-end júnior',
        startDate: '2022',
        endDate: '2022',
        skills: ['HTML5', 'CSS3', 'Vue', 'Vuetify', 'Javascript', 'Cypress', 'Jest'],
        meta: {
            orgNameGender: 'female',
        },
    },
    {
        id: 2,
        org: {
            name: 'Exército Brasileiro | TG 04-032',
        },
        local: 'Conselheiro Lafaiete, MG',
        role: 'Atirador',
        startDate: 'mar-2022',
        endDate: 'nov-2022',
        description:
            'Foi um ótimo lugar onde tive a oportunidade aprimorar minhas soft skills de comunicação, liderança e trabalho em equipe.',
        skills: [],
        meta: {
            orgNameGender: 'female',
            military: true,
        },
    },
    {
        id: 1,
        org: {
            name: 'Freelancer',
        },
        local: 'Remoto',
        role: 'Desenvolvedor full-stack',
        startDate: '2021',
        endDate: '2022',
        skills: ['HTML5', 'CSS3', 'Vue', 'Vuetify', 'Javascript', 'Typescript', 'MySQL', 'Gulp'],
        meta: {
            orgNameGender: 'female',
        },
    },
];
