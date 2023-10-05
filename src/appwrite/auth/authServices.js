import { Account, Client, ID } from "appwrite";
import envConfig from "../../envconfig/envConfig";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(envConfig.appwriteUrl);
        this.client.setProject(envConfig.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async getUser() {
        try {
            const user = await this.account.get();
            if (user) {
                console.log(user);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async createUser({ email, password, name }) {
        try {
            const response = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (response) {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async loginUser({ email, password }) {
        try {
            const response = await this.account.createEmailSession(email, password);
            if (response) {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async logoutUser(sessionId) {
        try {
            const response = await this.account.deleteSession(sessionId);
            if (response) {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const authService = new AuthService();

export default authService;
