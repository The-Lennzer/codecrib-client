import {create} from 'zustand'

interface User {
    name: string;
    username: string;
    email: string;
}

interface Auth {
    user: User | null;
    isLoggedIn: boolean;
    hydrated: boolean;
    login: (user: User) => void;
    logout: () => void;
    setHydrated: () => void; // add setHydrate
}

const authStore = create<Auth>((set) => ({
    user: null,
    isLoggedIn: false,
    hydrated: false,
    login: (user) => set(() => ({user, isLoggedIn: true})),
    logout: () => set(() => ({user: null, isLoggedIn: false})),
    setHydrated: () => set(() => ({hydrated: true}))
}));

export default authStore;