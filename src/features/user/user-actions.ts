import { Dispatch } from 'redux'

import { getMembers } from 'domains/github/services/get-members'
import { User } from 'domains/github/models/user'

export const UserActionType = {
  getMembersInit: 'getMembersInit',
  getMembersStarted: 'getMembersStarted',
  getMembersSucceeded: 'getMembersSucceeded',
  getMembersFailed: 'getMembersFailed',
} as const

type ValueOf<T> = T[keyof T]

export type UserAction = {
  type: ValueOf<typeof UserActionType>
  isLoading: boolean
  orgCode?: string
  response?: User[]
  error?: Error
}

export const getMembersInit = (): UserAction => ({
  type: UserActionType.getMembersInit,
  isLoading: true,
})

export const getMembersSucceeded = (response: User[]): UserAction => ({
  type: UserActionType.getMembersSucceeded,
  isLoading: false,
  response,
})

export const getMembersFailed = (error: Error): UserAction => ({
  type: UserActionType.getMembersFailed,
  isLoading: false,
  error,
})

export const getMembersStarted = (orgCode: string) => async (
  dispatch: Dispatch
) => {
  dispatch(getMembersInit())
  try {
    const usersData = await getMembers(orgCode)
    dispatch(getMembersSucceeded(usersData))
  } catch (error) {
    dispatch(getMembersFailed(error))
  }
}
