export type pagesVariationsContact = 'home' | 'resume';

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

export interface IPersonalInfo {
    name: string;
    role: string;
    aboutMe: string;
    address: IPersonalInfoAddress;
    contacts: IPersonalInfoContact[];
}
