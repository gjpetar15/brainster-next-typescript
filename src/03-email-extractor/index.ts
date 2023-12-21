type User = {
  id: number
  name: string
  email: string
}

export function extractEmails(users: User[]): string[] {
  const extractedEmails: string[] = []

  for (const user of users) {
    if (user && user.email && !extractedEmails.includes(user.email)) {
      extractedEmails.push(user.email)
    }
  }

  return extractedEmails
}
