import BanUserCommand from "./ban-user-command.js";
import GetUserStatusCommand from "./get-user-status-command.js";
import InFileUserGateway from "./in-file-user-gateway.js";

//const gateway = new InMemoryUserGateway()
const gateway = new InFileUserGateway()

const banUserCommand = new BanUserCommand(gateway)
const getUserStatusCommand = new GetUserStatusCommand(gateway)

function run() {
  banUserCommand.execute(2)
  console.log(getUserStatusCommand.execute(2))
}

run()