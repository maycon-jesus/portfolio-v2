import { defineStore } from 'pinia';
import { personalInfo } from '~~/assets/data/personal-info';
import { IPersonalInfo, IPersonalInfoTraining, IPersonalInfoWork } from '~~/types/personalInfo';

export const usePersonalInfoResumeStore = defineStore('personal-info-resume', {
    state: (): IPersonalInfo => {
        return Object.assign({}, personalInfo);
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
                skill.visibility = skill.visibility.filter((s) => s !== 'resume');
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
        removeWork(workId: number) {
            this.works = this.works.filter((w) => w.id !== workId);
        },
        addWork(work: IPersonalInfoWork) {
            this.works.push(work);
            this.works = this.works.sort((a, b) => b.id - a.id);
        },
        removeTraining(trainingId: number) {
            this.trainings = this.trainings.filter((t) => t.id !== trainingId);
        },
        addTraining(training: IPersonalInfoTraining) {
            this.trainings.push(training);
            this.trainings = this.trainings.sort((a, b) => b.id - a.id);
        },
    },
});
