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
            const userData = await this.account.get();
            if (userData) {
                return userData;
            }
            return null;
        } catch (error) {
            console.log(error);
        }
    }

    async signupUser({ email, password, name }) {
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
            return error.message;
        }
    }

    async loginUser({ email, password }) {
        try {
            const session = await this.account.createEmailSession(email, password);
            if (session) {
                return session;
            }
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

    async logoutUser(sessionId) {
        try {
            await this.account.deleteSession(sessionId);
        } catch (error) {
            console.log(error);
        }
    }
}

const authService = new AuthService();

export default authService;
