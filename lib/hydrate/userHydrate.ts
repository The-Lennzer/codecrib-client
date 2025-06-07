import Api from "@/utils/Api";
import authStore from "@/stores/authStore";
export default async function hydrateUser(){
    try{
        const response = await Api.getUser();
        console.log("Hydration response: ", response);

        console.log("Hydration status: ", response.status);

        if(response.status === 401){
            authStore.setState({user: null, isLoggedIn: false});
            console.log("[Hydration failed] Invalid Token");
        }

        if(response.status === 404){
            authStore.setState({user: null, isLoggedIn: false});
            console.log("[Hydration failed] User not found!");
            console.log("CAUTION: Valid token transaction for non existent user!");
        }

        if(response.status === 500){
            authStore.setState({user: null, isLoggedIn: false});
            console.log("[Hydration failed] Server error!");
        }

        const userDetails = await response.data.user;
        const user = {name: userDetails.name, username: userDetails.username, email: userDetails.email};
        console.log("user hydtrated: ", user);
        authStore.getState().login(user);
        authStore.getState().setHydrated();
    } catch (error) {
        console.error('Error hydrating user:', error);
        authStore.setState({user: null, isLoggedIn: false}); 
    }
} 