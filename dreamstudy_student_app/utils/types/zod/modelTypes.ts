import * as z from 'zod';
import {
  RevisionContentSchema,
  RevisionLevelSchema,
  RevisionSubjectSchema,
  StudentSchema,
  SupportAssistantSchema,
  TeacherSchema
} from './models';

export type StudentT = z.infer<typeof StudentSchema>;

export type TeacherT = z.infer<typeof TeacherSchema>;

export type SupportAssistantT = z.infer<typeof SupportAssistantSchema>;

export type RevisionContentT = z.infer<typeof RevisionContentSchema>;

export type RevisionLevelT = z.infer<typeof RevisionLevelSchema>;

export type RevisionSubjectT = z.infer<typeof RevisionSubjectSchema>;
