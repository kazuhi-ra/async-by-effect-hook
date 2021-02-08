import { Reducer } from 'redux'

import { User } from 'domains/github/models/user'
import { UserActionType, UserAction } from './user-actions'

export type UserState = {
  users: User[]
  isLoading: boolean
  error?: Error | null
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
}

export const userReducer: Reducer<UserState, UserAction> = (
  state: UserState = initialState,
  action: UserAction
) => {
  switch (action.type) {
    case UserActionType.getMembersInit:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case UserActionType.getMembersSucceeded:
      return {
        ...state,
        users: action.response as User[],
        isLoading: action.isLoading,
      }
    case UserActionType.getMembersFailed:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
      }
    case UserActionType.getMembersStarted:
      return {
        ...state,
      }
    default: {
      const _: never = action.type
      return _
    }
  }
}
