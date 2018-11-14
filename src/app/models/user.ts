import { Skill } from '@app/models/skill';

export class UserSubmission {
    id: number;
    challenge: number;

    constructor(
        id: number,
        challenge: number
    ) {
        this.id = id;
        this.challenge = challenge;
    }
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    updatedAt: Date;
    createdAt: Date;
    avatar: string;
    username: string;
    birthdate: Date;
    hometown: string;
    phoneNumber: string;
    facebookId: string;
    twitterId: string;
    skills: Skill[];
    activitiesAndInterest: string;
    organizationTeamClubs: string;
    privacySetting: number;
    submissions: UserSubmission[];

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        updatedAt: Date,
        createdAt: Date,
        avatar: string,
        username: string,
        birthdate: Date,
        hometown: string,
        phoneNumber: string,
        facebookId: string,
        twitterId: string,
        skills: Skill[],
        activitiesAndInterest: string,
        organizationTeamClubs: string,
        privacySetting: number,
        submissions: UserSubmission[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
        this.avatar = avatar;
        this.username = username;
        this.birthdate = birthdate;
        this.hometown = hometown;
        this.phoneNumber = phoneNumber;
        this.facebookId = facebookId;
        this.twitterId = twitterId;
        this.skills = skills;
        this.activitiesAndInterest = activitiesAndInterest;
        this.organizationTeamClubs = organizationTeamClubs;
        this.privacySetting = privacySetting;
        this.submissions = submissions;
    }
}