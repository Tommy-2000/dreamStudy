import { SkColor, SkImage } from '@shopify/react-native-skia';
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
  studentNotes: ArrayBuffer;
}

export const studentSchema = z.object({
  id: z.number().nonoptional(),
  studentFirstName: z.string(),
  studentLastName: z.string(),
  studentDateOfBirth: z.string(),
  teachingGroup: z.string(),
  revisionLevel: z.enum(RevisionLevel),
  supportType: z.string(),
  supportRequired: z.boolean(),
  studentYear: z.number(),
  studentNotes: z.string()
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

export const teacherSchema = z.object({
  id: z.number().nonoptional(),
  teacherFirstName: z.string(),
  teacherLastName: z.string(),
  teacherDateOfBirth: z.string(),
  teachingGroup: z.string(),
  teachingYear: z.number(),
  students: z.array(studentSchema),
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
  students: string[];
  revisionLevel: RevisionLevel;
  supportType: string;
}

export const supportAssistantSchema = z.object({
  id: z.number().nonoptional(),
  supportAssistantFirstName: z.string(),
  supportAssistantLastName: z.string(),
  supportAssistantDateOfBirth: z.string(),
  teachingGroup: z.string(),
  teachingYear: z.number(),
  students: z.array(z.string()),
  revisionLevel: z.enum(RevisionLevel),
  supportType: z.string()
});

export interface RevisionContent {
  contentId: number;
  revisionTitle: string;
  revisionOverview: string;
  revisionContent: object;
  hasSupportAvailable: boolean;
  revisionSubject: RevisionSubject;
  revisionLevel: RevisionLevel;
  dateUploaded: string;
  revisionAuthor: string;
  teachingYear: number;
}

export const revisionContentSchema = z.object({
  contentId: z.number().nonoptional(),
  revisionTitle: z.string(),
  revisionOverview: z.string(),
  revisionContent: z.object(),
  hasSupportAvailable: z.boolean(),
  revisionSubject: z.enum(RevisionSubject),
  revisionLevel: z.enum(RevisionLevel),
  dateUploaded: z.string(),
  revisionAuthor: z.string(),
  teachingYear: z.number()
});

export interface RevisionSession {
  sessionId: number;
  sessionTitle: string;
  sessionOverview: string;
  revisionSubject: RevisionSubject;
  revisionLevel: RevisionLevel;
  sessionDate: string;
  sessionTime: string;
  revisionAuthor: string;
  teachingGroup: string;
  teachingYear: number;
}

export const revisionSessionSchema = z.object({
  sessionId: z.number().nonoptional(),
  sessionTitle: z.string(),
  sessionDetails: z.string(),
  revisionSubject: z.enum(RevisionSubject),
  revisionLevel: z.enum(RevisionLevel),
  sessionDate: z.string(),
  sessionTime: z.string(),
  revisionAuthor: z.string(),
  teachingGroup: z.string(),
  teachingYear: z.number()
});

export const revisionLevelSchema = z.enum(RevisionLevel);

export const revisionSubjectSchema = z.enum(RevisionSubject);

export interface Note {
  noteId: number;
  noteSnapshot: SkImage;
  noteBackgroundColor: SkColor;
  noteCreationDate: string;
}
