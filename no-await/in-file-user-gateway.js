import * as fs from 'fs';

export default class InFileUserGateway {
    ban(userId) {
        const fileName = userId.toString()
        fs.writeFile(fileName, 'helloWorld', () => {})
    }

    isBanned(userId) {
        const fileName = userId.toString()
        return fs.existsSync(fileName);
    }
}