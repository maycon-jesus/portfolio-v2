import { defineStore } from 'pinia';
import { personalInfo } from '~~/assets/data/personal-info';
import { IPersonalInfo, pagesVariationsContact } from '~~/types/personalInfo';

export const usePersonalInfoStore = defineStore('personal-info', {
    state: (): IPersonalInfo => {
        return personalInfo;
    },
    getters: {
        contactsForPage(state) {
            return (page: pagesVariationsContact) => {
                return state.contacts
                    .filter((c) => c.visibility.includes(page))
                    .sort((_a, _b) => {
                        let a = _a.displayOrder?.resume || 0;
                        let b = _b.displayOrder?.resume || 0;
                        return a - b;
                    });
            };
        },
    },
});
