import * as z from 'zod';
import {
    revisionContentSchema,
    revisionLevelSchema,
    revisionSessionSchema,
    revisionSubjectSchema,
    studentSchema,
    supportAssistantSchema,
    teacherSchema
} from '../../api/models';

export type StudentT = z.infer<typeof studentSchema>;

export type TeacherT = z.infer<typeof teacherSchema>;

export type SupportAssistantT = z.infer<typeof supportAssistantSchema>;

export type RevisionContentT = z.infer<typeof revisionContentSchema>;

export type RevisionSessionT = z.infer<typeof revisionSessionSchema>;

export type RevisionLevelT = z.infer<typeof revisionLevelSchema>;

export type RevisionSubjectT = z.infer<typeof revisionSubjectSchema>;
