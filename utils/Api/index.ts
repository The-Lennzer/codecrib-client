import Request from "@/lib/Request";
import { register } from "module";

export type User = {
    name: string;
    username: string;
    email: string;
    password: string;
}
const Api = {
    getResource: () =>Request.get('/resource'),
    registerUser: (data: User): Promise<any> => Request.post('/auth/register', data)
}

export default Api;