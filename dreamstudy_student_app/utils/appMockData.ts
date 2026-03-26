import { formatISO } from 'date-fns';
import { RevisionLevel, RevisionSubject } from './types/zod/models';
import { RevisionContentT, StudentT, TeacherT } from './types/zod/modelTypes';

export const studentMockData: StudentT[] = [
  {
    id: 123,
    studentFirstName: '',
    studentLastName: '',
    studentDateOfBirth: '',
    teachingGroup: 'D',
    revisionLevel: RevisionLevel.GCSE,
    supportType: '',
    supportRequired: true,
    studentYear: 9
  },
  {
    id: 123,
    studentFirstName: '',
    studentLastName: '',
    studentDateOfBirth: '',
    teachingGroup: 'D',
    revisionLevel: RevisionLevel.GCSE,
    supportType: '',
    supportRequired: true,
    studentYear: 9
  },
  {
    id: 123,
    studentFirstName: '',
    studentLastName: '',
    studentDateOfBirth: '',
    teachingGroup: 'D',
    revisionLevel: RevisionLevel.GCSE,
    supportType: '',
    supportRequired: true,
    studentYear: 9
  },
  {
    id: 123,
    studentFirstName: '',
    studentLastName: '',
    studentDateOfBirth: '',
    teachingGroup: 'D',
    revisionLevel: RevisionLevel.GCSE,
    supportType: '',
    supportRequired: true,
    studentYear: 9
  }
];

export const teacherMockData: TeacherT[] = [
  {
    id: 123,
    teacherFirstName: '',
    teacherLastName: '',
    teacherDateOfBirth: '',
    teachingGroup: 'E',
    students: studentMockData,
    revisionLevel: RevisionLevel.A_Level,
    revisionSubject: RevisionSubject.Biology,
    teachingYear: 12
  },
  {
    id: 123,
    teacherFirstName: '',
    teacherLastName: '',
    teacherDateOfBirth: '',
    teachingGroup: 'E',
    students: studentMockData,
    revisionLevel: RevisionLevel.A_Level,
    revisionSubject: RevisionSubject.Biology,
    teachingYear: 12
  },
  {
    id: 123,
    teacherFirstName: '',
    teacherLastName: '',
    teacherDateOfBirth: '',
    teachingGroup: 'E',
    students: studentMockData,
    revisionLevel: RevisionLevel.A_Level,
    revisionSubject: RevisionSubject.Biology,
    teachingYear: 12
  },
  {
    id: 123,
    teacherFirstName: '',
    teacherLastName: '',
    teacherDateOfBirth: '',
    teachingGroup: 'E',
    students: studentMockData,
    revisionLevel: RevisionLevel.A_Level,
    revisionSubject: RevisionSubject.Biology,
    teachingYear: 12
  }
];

// export const supportAssistantMockData: SupportAssistantT = {
//     {},
//     {},
//     {},
// {}
// }

export const revisionMockData: RevisionContentT[] = [
  {
    contentId: 123,
    revisionTitle: 'English Literature Revision Title',
    revisionDetails: 'Revision Details',
    isSupportAvailable: true,
    revisionSubject: RevisionSubject.English_Lit,
    revisionLevel: RevisionLevel.GCSE,
    dateUploaded: formatISO(new Date(2019, 8, 18, 19, 0, 52), {
      representation: 'date'
    }),
    revisionAuthor: teacherMockData[0],
    teachingYear: 2027
  },
  {
    contentId: 456,
    revisionTitle: 'Mathematics Revision Title',
    revisionDetails: 'Algebra Revision Details',
    isSupportAvailable: true,
    revisionSubject: RevisionSubject.Maths,
    revisionLevel: RevisionLevel.GCSE,
    dateUploaded: formatISO(new Date(2019, 8, 18, 19, 0, 52), {
      representation: 'date'
    }),
    revisionAuthor: {},
    teachingYear: 2027
  },
  {
    contentId: 789,
    revisionTitle: 'IT Revision Title',
    revisionDetails: 'Algorithms Revision Details',
    isSupportAvailable: true,
    revisionSubject: RevisionSubject.IT,
    revisionLevel: RevisionLevel.A_Level,
    dateUploaded: formatISO(new Date(2019, 8, 18, 19, 0, 52), {
      representation: 'date'
    }),
    revisionAuthor: {},
    teachingYear: 2027
  },
  {
    contentId: 101112,
    revisionTitle: 'Biology Revision Title',
    revisionDetails: 'Stem Cells Revision Details',
    isSupportAvailable: true,
    revisionSubject: RevisionSubject.Biology,
    revisionLevel: RevisionLevel.A_Level,
    dateUploaded: formatISO(new Date(2019, 8, 18, 19, 0, 52), {
      representation: 'date'
    }),
    revisionAuthor: {},
    teachingYear: 2027
  }
];
