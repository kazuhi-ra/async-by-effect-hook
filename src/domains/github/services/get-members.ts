import ky, { Options } from 'ky'

import { OrgCode } from 'data/org-codes'
import { User, isUsers } from '../models/user'
import { DEFAULT_API_OPTIONS } from './default-api-options'

export const getMembers = async (
  orgCode: OrgCode,
  options?: Options
): Promise<User[]> => {
  const mergeOptions: Options = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  }
  const response = await ky.get(`orgs/${orgCode}/members`, mergeOptions)
  const members = (await response.json()) as unknown[]

  if (!isUsers(members)) {
    throw new Error('API type error')
  }

  return members
}
