export type pagesVariationsContact = 'home' | 'resume';
export type pagesVariationsSkill = 'page-skills' | 'resume';

export interface IPersonalInfoContact {
    id?: string;
    name: string;
    icon: string;
    url: string;
    label: string;

    visibility: pagesVariationsContact[];
    labelVariants?: Partial<Record<pagesVariationsContact, string>>;
    displayOrder?: Partial<Record<pagesVariationsContact, number>>;
}

export interface IPersonalInfoAddress {
    city: string;
    state: string;
    country: string;
    url: string;
}

export interface IPersonalInfoSkill {
    id: string;
    label: string;
    icon: string;
    xpLevel: 1 | 2 | 3;
    docsUrl: string;
    colors: {
        label: string;
        progress: string;
    };
    category: 'server-side' | 'client-side' | 'tests' | 'others';
    visibility: pagesVariationsSkill[];
}

export interface IPersonalInfoWork {
    org: {
        name: string;
        url?: string;
        logoUrl?: string;
    };
    role: string;
    local: string;
    startDate: string;
    endDate: string;
    description?: string;
    skills: string[];
}

export interface IPersonalInfo {
    name: string;
    role: string;
    aboutMe: string;
    address: IPersonalInfoAddress;
    contacts: IPersonalInfoContact[];
    skills: IPersonalInfoSkill[];
    works: IPersonalInfoWork[];
}
