import { useEffect, useState } from 'react'

import { getMembers } from 'domains/github/services/get-members'
import { User } from 'domains/github/models/user'
import { OrgCode } from 'data/org-codes'

export const useGetMembers = (orgCode: OrgCode): [User[], boolean] => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const load = async () => {
      setIsLoading(true)
      try {
        const usersData = await getMembers(orgCode)
        setUsers(usersData)
      } catch (error) {
        throw new Error(`organization ${orgCode} not exists`)
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [orgCode])

  return [users, isLoading]
}
