import { IPersonalInfoTraining } from '~/types/personalInfo';

export const trainings: IPersonalInfoTraining[] = [
    {
        id: 1,
        school: {
            name: 'IFMG',
            logoUrl: 'https://www.ifmg.edu.br/portal/comunicacao/logo/logo-ifmg/ifmg-vertical.png',
            url: 'https://www.ifmg.edu.br/conselheirolafaiete',
        },
        local: 'Conselheiro Lafaiete',
        title: 'Ensino médio e curso técnico',
        description: 'Técnico em eletrotécnica',
        startDate: '2019',
        endDate: '2021',
    },
];
