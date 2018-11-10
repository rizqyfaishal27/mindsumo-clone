import { Challenge } from '@app/models/challenge';
import { User } from '@app/models/user';

export class Submission {
    challenge: number;
    submissionUser: number;
    submissionTitle: string;
    submissionText: string;
    submissionFile: string;
    createdAt: Date;
    updatedAt: Date;
}
 