declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_MAPBOX_TOKEN: string;
            STRAPI_URL: string;
            STRAPI_TOKEN: string;
        }
    }
}

export {};
