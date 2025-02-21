import { serial, text, pgTable, pgSchema, varchar, integer,PgArray, boolean } from "drizzle-orm/pg-core";
import { arrayBuffer } from "stream/consumers";


export const AIOutput = pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt')
})




export const MockInterview=pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})

export const UserAnswer = pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:varchar('correctAns').notNull(),
    userAns:varchar('userAns'),
    feedback:varchar('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),

})

export const JsonForms = pgTable('jsonForms',{
    id:serial('id').primaryKey(),
    jsonform:text('jsonform'),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt'),
})

export const userResponses = pgTable('userResponses',{
    id:serial('id').primaryKey(),
    jsonResponse:text('jsonResponse').notNull(),
    createdBy:varchar('createdBy').default('anonymous'),
    createdAt:varchar('createdAt'),
    formRef:integer('formRef').references(()=>JsonForms?.id),
})

export const resumeInfomation = pgTable('resumeInfomation',{
    id:serial('id').primaryKey(),
    Jobtitle:varchar('Jobtitle'),
    firstName:varchar('firstName'),
    lastName:varchar('lastName'),
    title:varchar('title'),
    address:varchar('address'),
    phone:varchar('phone'),
    email:varchar('email'),
    summary:varchar('summary'),
    // positiontitle:varchar('positiontitle'),
    // companyName:varchar('companyName'),
    // city:varchar('city'),
    // state:varchar('state'),
    // startDate:varchar('startDate'),
    // endDate:varchar('endDate'),
    // experienceSummary:varchar('experienceSummary'),
    experience:varchar('experience'),
    // universityName:varchar('universityName'),
    // degree:varchar('degree'),
    // major:varchar('major'),
    // educationstartDate:varchar('educationstartDate'),
    // educationendDate:varchar('educationendDate'),
    // description:varchar('description'),
    education:varchar('education'),
    skills:varchar('skills'),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
})