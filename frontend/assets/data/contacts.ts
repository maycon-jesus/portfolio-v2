import { IPersonalInfoContact } from '~~/types/personalInfo';

export const contacts: IPersonalInfoContact[] = [
    {
        name: 'Email',
        icon: 'material-symbols:mail-outline',
        url: 'mailto:email@mayconjesus.dev',
        label: 'email@mayconjesus.dev',
        visibility: ['home', 'resume'],
        displayOrder: {
            resume: 2,
        },
    },
    {
        name: 'LinkedIn',
        icon: 'ph:linkedin-logo-bold',
        url: 'https://www.linkedin.com/in/maycon-jesus-20b3a6216',
        label: 'Conecte-se comigo',
        visibility: ['home'],
    },
    {
        name: 'Whatsapp',
        icon: 'ic:baseline-whatsapp',
        url: 'https://api.whatsapp.com/send?phone=5531997466833',
        label: '+55 31 99746-6833',
        visibility: ['home', 'resume'],
        displayOrder: {
            resume: 3,
        },
    },
    {
        id: 'github',
        name: 'GitHub',
        icon: 'mdi:github',
        url: 'https://github.com/maycon-jesus',
        label: 'Veja meus projetos',
        visibility: ['home'],
    },
    {
        name: 'Blog',
        icon: 'simple-icons:devto',
        url: 'https://dev.to/mayconjesus',
        label: 'Veja meus posts',
        visibility: ['home'],
    },
    {
        name: 'Youtube',
        icon: 'ph:youtube-logo',
        url: 'https://www.youtube.com/channel/UCDCIXV4PHlrz_wRA1fmQWaw',
        label: 'Veja meus videos',
        visibility: ['home'],
    },
];
