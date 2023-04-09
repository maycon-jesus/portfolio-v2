import { IPersonalInfo } from '~~/types/personalInfo';
import { contacts } from './contacts';

export const personalInfo: IPersonalInfo = {
    name: 'Maycon Jesus Pinto',
    role: 'Desenvolvedor WEB front-end',
    address: {
        city: 'Conselheiro Lafaiete',
        state: 'Minas Gerais',
        country: 'Brasil',
        url: 'https://goo.gl/maps/nyZ6DMYfc1p9YKYNA',
    },
    contacts: contacts,
};
