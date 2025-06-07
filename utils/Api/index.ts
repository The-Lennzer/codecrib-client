import Request from "@/lib/wrappers/Request";
import { register } from "module";
import { userRegister, userLogin } from "./typefaces";

const Api = {
    registerUser: (data: userRegister): Promise<any> => Request.post('/auth/register', data),
    loginUser: (data: userLogin): Promise<any> => Request.post('/auth/login', data),
    getUser: (): Promise<any> => Request.post('/auth/hydrate')
}

export default Api;