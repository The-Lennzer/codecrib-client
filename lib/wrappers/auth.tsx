"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { ComponentType } from "react";

import authStore from "@/stores/authStore";
    const withAuth = (WrappedComponent: ComponentType) => {
        function ProtectedPage(props: any){
            const router = useRouter();
            const loggedIn = authStore((state) => state.isLoggedIn);
            const hydrated = authStore((state) => state.hydrated);
            console.log("Protected Page: ", loggedIn);
            useEffect(() => {
                if (hydrated &&!loggedIn) {
                    router.push("/auth/login");
                }
            }, [loggedIn]);

            return loggedIn ? <WrappedComponent {...props} /> : null;
        };
        return ProtectedPage;
    };

export default withAuth;