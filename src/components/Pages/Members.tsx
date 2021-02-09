import { OrgCode } from 'data/org-codes'
import { User } from 'domains/github/models/user'

type Props = {
  orgCode?: OrgCode
  users?: User[]
  isLoading?: boolean
  error: any
}

export const Members: React.FC<Props> = ({
  orgCode = 'airbnb',
  users = [],
  isLoading = false,
  error = undefined,
}) => {
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={user.html_url}>
                <div>{user.login}</div>
                <img src={user.avatar_url} width='200' alt='avatar' />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
