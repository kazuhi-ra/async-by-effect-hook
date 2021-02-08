import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Members } from 'components/Pages/Members'
import { getMembersStarted } from 'features/user/user-actions'
import { UserState } from 'features/user/user-reducer'
import { User } from 'domains/github/models/user'

const orgCode = 'apple'

export const EnhancedMembers = () => {
  const dispatch = useDispatch()
  const users = useSelector<UserState, User[]>((state) => state.users)
  const isLoading = useSelector<UserState, boolean>((state) => state.isLoading)

  useEffect(() => {
    dispatch(getMembersStarted(orgCode))
  }, [dispatch])
  
  return (
    <Members users={users} isLoading={isLoading} />
  )
}