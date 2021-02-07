import { Members } from 'components/Pages/Members'
import { useGetMembers } from 'hooks/use-get-members'

const orgCode = 'facebook'

export const EnhancedMembers = () => {
  const [users, isLoading] = useGetMembers(orgCode)

  return <Members orgCode={orgCode} users={users} isLoading={isLoading} />
}
