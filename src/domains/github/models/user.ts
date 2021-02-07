export type User = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export const isUser = (arg: unknown): arg is User => {
  const u = arg as User

  return (
    typeof u?.login === 'string' &&
    typeof u?.id === 'number' &&
    typeof u?.node_id === 'string' &&
    typeof u?.avatar_url === 'string' &&
    typeof u?.gravatar_id === 'string' &&
    typeof u?.url === 'string' &&
    typeof u?.html_url === 'string' &&
    typeof u?.followers_url === 'string' &&
    typeof u?.following_url === 'string' &&
    typeof u?.gists_url === 'string' &&
    typeof u?.starred_url === 'string' &&
    typeof u?.subscriptions_url === 'string' &&
    typeof u?.organizations_url === 'string' &&
    typeof u?.repos_url === 'string' &&
    typeof u?.events_url === 'string' &&
    typeof u?.received_events_url === 'string' &&
    typeof u?.type === 'string' &&
    typeof u?.site_admin === 'boolean'
  )
}

export const isUsers = (arg: unknown[]): arg is User[] => {
  return !arg.some((element) => !isUser(element))
}
