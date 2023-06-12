export default class InMemoryUserGateway {
  bannedUsers = {}

  ban(userId) {
    this.bannedUsers[userId] = true
  }

  isBanned(userId) {
    return this.bannedUsers[userId]
  }
}