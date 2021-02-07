export const orgCodes = [
  'airbnb',
  'apple',
  'facebook',
  'google',
  'microsoft',
  'mozilla',
  'netflix',
  'netlify',
] as const

export type OrgCode = typeof orgCodes[number]
