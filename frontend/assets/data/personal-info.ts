import { IPersonalInfo } from '~~/types/personalInfo';
import { contacts } from './contacts';
import { skills } from './skills';
import { works } from './works';
import { trainings } from './trainings';

export const personalInfo: IPersonalInfo = {
    name: 'Maycon Jesus Pinto',
    role: 'Desenvolvedor WEB front-end',
    aboutMe:
        'Olá sou um desenvolvedor front-end com foco em frameworks reativos como o Vue.js e React. Meu foco é oferecer um trabalho de qualidade que visa o sucesso do produto como um todo.',
    address: {
        city: 'Conselheiro Lafaiete',
        state: 'Minas Gerais',
        country: 'Brasil',
        url: 'https://goo.gl/maps/nyZ6DMYfc1p9YKYNA',
    },
    contacts: contacts,
    skills: skills,
    works: works,
    trainings: trainings,
};
