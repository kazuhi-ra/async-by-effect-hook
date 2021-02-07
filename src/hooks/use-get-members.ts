import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { UserState, userSlice } from 'features/user'
import { getMembers } from 'domains/github/services/get-members'
import { User } from 'domains/github/models/user'
import { OrgCode } from 'data/org-codes'

export const useGetMembers = (orgCode: OrgCode): [User[], boolean] => {
  const dispatch = useDispatch()
  const users = useSelector<UserState, User[]>((state) => state.users)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isUnmounted = false
    const { membersGotten } = userSlice.actions

    const load = async () => {
      setIsLoading(true)
      try {
        const usersData = await getMembers(orgCode)
        if (!isUnmounted) {
          dispatch(membersGotten({ users: usersData }))
        }
      } catch (error) {
        throw new Error(`organization ${orgCode} not exists`)
      } finally {
        setIsLoading(false)
      }
    }

    load()

    return () => {
      isUnmounted = true
    }
  }, [dispatch, orgCode])

  return [users, isLoading]
}
