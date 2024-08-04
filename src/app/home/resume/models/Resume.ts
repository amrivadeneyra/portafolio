export interface Resume {
    title: string;
    content: ResumeContent[]
}

export interface ResumeContent {
    institution: string;
    year: string;
    description: string;

    stop?: boolean;
}