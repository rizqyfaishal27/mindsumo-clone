import { Skill } from "./skill";
import { User } from "./user";

export class Challenge {
    id: number;
    title: string;
    skills: Skill[];
    price: number;
    author: User;
    createdAt: Date;
    updatedAt: Date;
    dueDate: Date;
    isAnonymousAuthor: boolean;
    status: string;
    bannerImage: string;
    deliverables: string;
    description: string;
    nextChallengeId: number;
    nextChallengeTitle: string;
    constructor(
        id: number, 
        title: string,
        skills: Skill[],
        price: number,
        author: User,
        createdAt: Date,
        updatedAt: Date,
        status: string,
        bannerImage: string,
        deliverables: string,
        description: string,
        isAnonymousAuthor: boolean,
        nextChallengeId: number,
        nextChallengeTitle: string
    ) {
        this.id = id;
        this.title = title;
        this.skills = skills;
        this.price = price;
        this.author = author;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.bannerImage = bannerImage;
        this.deliverables = deliverables;
        this.description = description;
        this.isAnonymousAuthor = isAnonymousAuthor;
        this.nextChallengeId = nextChallengeId;
        this.nextChallengeTitle = nextChallengeTitle;
    }
}