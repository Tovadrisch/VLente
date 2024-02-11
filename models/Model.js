import { SettingsModel } from "./SettingsModel";

export default class Model {

    static getHashByKey(array, key) {
        return array.reduce((hash, item) => {
            hash[item[key]] = item;
            return hash;
        }, {});
    };

    static getNewId(array) {
        let l = array.length;
        if (!l) return 1;
        return array[l - 1].id + 1;
    }

    static async createNewUser(login, password) {
        let users = await SettingsModel.getUsers();
        let newUser = {
            id: this.getNewId(users),
            login: login,
            password: password,
            name: "",
            location: "",
            age: ""
        };
        users.push(newUser);

        await SettingsModel.setUsers(users);

        return 1;
    };

    static async findUserByKeyValue(key, value) {
        let users = await SettingsModel.getUsers();
        return users.find((user) => user[key] === value);
    };

    static async auth(login, password) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("готово!"), 1000);
        });
        let result = await promise;
        console.log(result);
        let user = await this.findUserByKeyValue("login", login);

        if (!user) return "wrongLogin";
        if (user.password !== password) return "wrongPassword";

        return 1;
    };

    static async editUserInfo(editableUser) {
        let users = await SettingsModel.getUsers();
        let userIndex = users.findIndex((user) => user.id === editableUser.id);
        if (userIndex === -1) return -1;

        users[userIndex] = editableUser;

        await SettingsModel.setUsers(users);

        return 1;
    };
}
