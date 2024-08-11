/// <reference types="vite/client" />
declare namespace NodeJS {
    interface ProcessEnv {
        VITE_SUPABASE_URL: string;
        VITE_SUPABASE_KEY: string;
    }
}