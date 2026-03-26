import z from 'zod';

export enum RevisionLevel {
  GCSE = 'GCSE',
  A_Level = 'A Level',
  AS_Level = 'AS Level'
}

export enum RevisionSubject {
  Art = 'Art',
  Biology = 'Biology',
  Chemistry = 'Chemistry',
  English_Lan = 'English Language',
  English_Lit = 'English Literature',
  French = 'French',
  German = 'German',
  History = 'History',
  IT = 'IT',
  Maths = 'Mathematics',
  Physics = 'Physics',
  Psych = 'Psychology',
  RE = 'Religious Education',
  Social_Studies = 'Social Studies',
  Sports = 'Sports'
}

export interface Student {
  id: number;
  studentFirstName: string;
  studentLastName: string;
  studentDateOfBirth: string;
  teachingGroup: string;
  revisionLevel: RevisionLevel;
  supportType: string;
  supportRequired: boolean;
  studentYear: number;
}

export const StudentSchema = z.object({
  id: z.number(),
  studentFirstName: z.string(),
  studentLastName: z.string(),
  studentDateOfBirth: z.string(),
  teachingGroup: z.string(),
  revisionLevel: z.enum(RevisionLevel),
  supportType: z.string(),
  supportRequired: z.boolean(),
  studentYear: z.number()
});

export interface Teacher {
  id: number;
  teacherFirstName: string;
  teacherLastName: string;
  teacherDateOfBirth: string;
  teachingGroup: string;
  teachingYear: number;
  students: Student[];
  revisionLevel: RevisionLevel;
  revisionSubject: RevisionSubject;
}

export const TeacherSchema = z.object({
  id: z.number(),
  teacherFirstName: z.string(),
  teacherLastName: z.string(),
  teacherDateOfBirth: z.string(),
  teachingGroup: z.string(),
  teachingYear: z.number(),
  students: z.array(StudentSchema),
  revisionLevel: z.enum(RevisionLevel),
  revisionSubject: z.enum(RevisionSubject)
});

export interface SupportAssistant {
  id: number;
  supportAssistantFirstName: string;
  supportAssistantLastName: string;
  supportAssistantDateOfBirth: string;
  teachingGroup: string;
  teachingYear: number;
  students: Student[];
  revisionLevel: RevisionLevel;
  supportType: string;
}

export const SupportAssistantSchema = z.object({
  id: z.number(),
  supportAssistantFirstName: z.string(),
  supportAssistantLastName: z.string(),
  supportAssistantDateOfBirth: z.string(),
  teachingGroup: z.string(),
  teachingYear: z.number(),
  students: z.array(z.object()),
  revisionLevel: z.enum(RevisionLevel),
  supportType: z.string()
});

export interface RevisionContent {
  contentId: number;
  revisionTitle: string;
  revisionDetails: string;
  isSupportAvailable: boolean;
  revisionSubject: RevisionSubject;
  revisionLevel: RevisionLevel;
  dateUploaded: string;
  revisionAuthor: Teacher;
  teachingYear: number;
}

export const RevisionContentSchema = z.object({
  contentId: z.number(),
  revisionTitle: z.string(),
  revisionDetails: z.string(),
  isSupportAvailable: z.boolean(),
  revisionSubject: z.enum(RevisionSubject),
  revisionLevel: z.enum(RevisionLevel),
  dateUploaded: z.string(),
  revisionAuthor: z.object(),
  teachingYear: z.number()
});

export interface RevisionSession {
  contentId: number;
  sessionTitle: string;
  sessionDetails: string;
  revisionSubject: RevisionSubject;
  revisionLevel: RevisionLevel;
  sessionDate: string;
  sessionTime: string;
  revisionAuthor: Teacher;
  teachingGroup: string;
  teachingYear: number;
}

export const RevisionSession = z.object({
  contentId: z.number(),
  sessionTitle: z.string(),
  sessionDetails: z.string(),
  revisionSubject: z.enum(RevisionSubject),
  revisionLevel: z.enum(RevisionLevel),
  sessionDate: z.string(),
  sessionTime: z.string(),
  revisionAuthor: z.object(),
  teachingGroup: z.string(),
  teachingYear: z.number()
});

export const RevisionLevelSchema = z.enum(RevisionLevel);

export const RevisionSubjectSchema = z.enum(RevisionSubject);
