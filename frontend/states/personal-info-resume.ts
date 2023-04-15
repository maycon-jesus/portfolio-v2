import { defineStore } from 'pinia';
import { personalInfo } from '~~/assets/data/personal-info';
import { IPersonalInfo, IPersonalInfoAddress } from '~~/types/personalInfo';

export const usePersonalInfoResumeStore = defineStore('personal-info-resume', {
    state: (): IPersonalInfo => {
        return personalInfo;
    },
    getters: {
        contactsForResume(state) {
            return state.contacts
                .filter((c) => c.visibility.includes('resume'))
                .sort((_a, _b) => {
                    let a = _a.displayOrder?.resume || 0;
                    let b = _b.displayOrder?.resume || 0;
                    return a - b;
                });
        },
        skillsForResume(state) {
            return state.skills.filter((c) => c.visibility.includes('resume'));
        },
    },
    actions: {
        toggleSkillVisibility(skillId: string) {
            const skill = this.skills.find((s) => s.id === skillId);
            if (!skill) return;
            if (skill.visibility.includes('resume')) {
                skill.visibility = skill.visibility.filter(
                    (s) => s !== 'resume',
                );
            } else {
                skill.visibility.push('resume');
            }
        },
        setRole(role: string) {
            this.role = role;
        },
        setAddressCity(city: string) {
            this.address.city = city;
        },
        setAddressState(state: string) {
            this.address.state = state;
        },
        setAddressUrl(url: string) {
            this.address.url = url;
        },
        setAboutMe(str: string) {
            this.aboutMe = str;
        },
    },
});
