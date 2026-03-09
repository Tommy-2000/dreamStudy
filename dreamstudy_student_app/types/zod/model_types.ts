import * as z from 'zod';

export enum StudyLevel {
  GCSE = 'GCSE',
  A_Level = 'A Level',
  AS_Level = 'AS Level'
}

export enum StudySubject {
  Art = 'Art',
  Biology = 'Biology',
  Chemistry = 'Chemistry',
  English_Lan = 'English Language',
  English_Lit = 'English Literature',
  French = 'French',
  German = 'German',
  History = 'History',
  Maths = 'Mathematics',
  Physics = 'Physics',
  Psych = 'Psychology',
  RE = 'Religious Education',
  Social_Studies = 'Social Studies',
  Sports = 'Sports'
}

export const StudentSchema = z.object({
  id: z.number(),
  studentFirstName: z.string(),
  studentLastName: z.string(),
  studentDateOfBirth: z.date(),
  classNumber: z.number(),
  teachingLevel: z.enum(StudyLevel),
  teacher: z.object(),
  supportType: z.string(),
  supportRequired: z.boolean(),
  classYear: z.number()
});

export type StudentT = z.infer<typeof StudentSchema>;

export const TeacherSchema = z.object({
  id: z.number(),
  teacherFirstName: z.string(),
  teacherLastName: z.string(),
  teacherDateOfBirth: z.date(),
  classNumber: z.number(),
  students: z.array(z.object()),
  teacherLevel: z.enum(StudyLevel),
  department: z.enum(StudySubject),
  classYear: z.number()
});

export type TeacherT = z.infer<typeof TeacherSchema>;

export const SupportAssistantSchema = z.object({
  id: z.number(),
  supportAssistantFirstName: z.string(),
  supportAssistantLastName: z.string(),
  supportAssistantDateOfBirth: z.date(),
  classNumber: z.number(),
  students: z.array(z.object()),
  teachingLevel: z.enum(StudyLevel),
  supportType: z.string(),
  classYear: z.number()
});

export type SupportAssistantT = z.infer<typeof SupportAssistantSchema>;

export const StudyContentSchema = z.object({
  studyId: z.string(),
  studyTitle: z.string(),
  studyDetails: z.string(),
  isSupportAvailable: z.boolean(),
  studySubject: z.enum(StudySubject),
  studyLevel: z.enum(StudyLevel),
  dateUploaded: z.date(),
  studyAuthor: z.object(),
  studyYear: z.number()
});

export type StudyContentT = z.infer<typeof StudyContentSchema>;

export const StudyLevelSchema = z.enum(StudyLevel);

export type StudyLevelT = z.infer<typeof StudyLevelSchema>;

export const StudySubjectSchema = z.enum(StudySubject);

export type StudySubjectT = z.infer<typeof StudySubjectSchema>;
