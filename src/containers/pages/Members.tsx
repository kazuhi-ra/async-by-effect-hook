import { useEffect, useState } from 'react'

import { Members } from 'components/Pages/Members'

import { getMembers } from 'domains/github/services/get-members'
import { User } from 'domains/github/models/user'

const orgCode = 'facebook'

export const EnhancedMembers = () => {
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
  }, [])

  return <Members orgCode={orgCode} users={users} isLoading={isLoading} />
}
