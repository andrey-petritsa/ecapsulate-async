export default class BanUserCommand {
  userGateway

  constructor(userGateway) {
    this.userGateway = userGateway
  }

  execute(userId) {
    this.userGateway.ban(userId)
  }
}