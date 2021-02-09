import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Members } from 'components/Pages/Members'
import { getUsers, UserState } from 'features/user'
import { User } from 'domains/github/models/user'

export const EnhancedMembers = () => {
  const dispatch = useDispatch()
  const users = useSelector<UserState, User[]>((state) => state.users)
  const isLoading = useSelector<UserState, boolean>((state) => state.isLoading)
  const error = useSelector<UserState, any>((state) => state.error)

  useEffect(() => {
    dispatch(getUsers('applle'))
  }, [dispatch])

  return <Members users={users} isLoading={isLoading} error={error} />
}
