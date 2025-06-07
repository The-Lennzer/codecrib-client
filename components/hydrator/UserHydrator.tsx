"use client";

import { useEffect } from "react";
import hydrateUser from "@/lib/hydrate/userHydrate";
import authStore from "@/stores/authStore";

const UserHydrator = () => {
    useEffect(() => {
        async function load(){
            await hydrateUser();
            console.log("Hydration triggered");
            console.log("Store:", authStore.getState());

        }    
        load();
    }, []);

    return null;
}

export default UserHydrator;