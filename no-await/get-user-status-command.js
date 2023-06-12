export default class GetUserStatusCommand {
  userGateway

  constructor(userGateway) {
    this.userGateway = userGateway
  }

  execute(userId) {
    const isBanned = this.userGateway.isBanned(userId)
    if(isBanned) {
      return 'banned'
    }
    else {
      return 'good'
    }
  }
}