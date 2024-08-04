import { Resume } from "../models/Resume";

export const resume: Resume[] = [
    {
        title: 'Education',
        content: [
            {
                institution: 'Universidad Autónoma del Perú',
                year: '2019 - present',
                description: 'Currently in 8th cycle, studying Systems Engineering. I am focused on software development, specifically web technologies, and I have a passion for learning new programming languages and frameworks.',
                stop: true,
            },
           /*  {
                institution: 'Universidad de Guadalajara',
                year: '2017',
                description: 'Specialization in Software Engineering',
                stop: false,
            },
            {
                institution: 'Universidad Autónoma del Perú',
                year: '2019 - present',
                description: 'Currently in 8th cycle, studying Systems Engineering. I am focused on software development, specifically web technologies, and I have a passion for learning new programming languages and frameworks.',
                stop: true,
            }, */
        ]
    },
    {
        title: 'Experience',
        content: [
            {
                institution: 'Web Developer',
                year: 'February 2023 - Present',
                description: 'Developing user-centric solutions for the Insquid platform, utilizing technologies such as Angular, TypeScript, Go, and MongoDB. Employed agile Scrum methodology for effective task management.',
                stop: true,
            },
            /* {
                institution: 'Software Engineer',
                year: '2019 - 2020',
                description: 'Worked on a team to develop a new software solution for smart city applications',
                stop: true,
            } */
        ]
    }
]