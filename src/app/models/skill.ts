export class Skill {
    id: number;
    skillName: string;
    isPrimary: boolean;

    constructor(id, skillName, isPrimary) {
        this.id = id;
        this.skillName = skillName;
        this.isPrimary = isPrimary;
    }
}