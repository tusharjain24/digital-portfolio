export const PROJECT_TITLE = "Tushar Jain Digital Portfolio" as const;
export const RESUME_URL = "/Tushar Jain CV.pdf" as const;

export const USER_DETAILS = {
  firstName: `Tushar`,
  lastName: `Jain`,
  WorkExperience: `1+ Years`,
  CompletedProjects: `10+ Projects`,
  email: process.env.PERSONAL_EMAIL,
  linkedin: process.env.LINKEDIN_URL,
  github: process.env.GITHUB_URL
} as const;