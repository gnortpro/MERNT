import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { APIConfig } = publicRuntimeConfig;
const env = APIConfig.ENV;

export const envName = {
    dev: 'dev',
    qc: 'qc',
    uat: 'uat',
    production: 'production',
};

export const API_DOMAIN_CONFIG = {
    [envName.dev]: {
        API_SERVER: 'https://api-qc.vinid.dev/ads-merchant',
        UPLOAD: '/document/upload',
        DOWNLOAD: '/document/download',
    },
    [envName.qc]: {
        API_SERVER: 'https://api-qc.vinid.dev/ads-merchant',
        UPLOAD: '/document/upload',
        DOWNLOAD: '/document/download',
    },
    [envName.uat]: {
        API_SERVER: 'https://api-uat.vinid.dev/ads-merchant',
        UPLOAD: '/document/upload',
        DOWNLOAD: '/document/download',
    },
    [envName.production]: {
        API_SERVER: 'https://apex.vinid.net/ads-merchant',
        UPLOAD: '/document/upload',
        DOWNLOAD: '/document/download',
    },
};

const homepage = {
    [envName.dev]: 'http://localhost:3001/',
    [envName.qc]: 'https://crm-merchant-qc.vinid.dev/',
    [envName.uat]: 'https://crm-merchant-uat.vinid.dev/',
    [envName.production]: 'https://merchant.vinid.net/',
};

export const Config = API_DOMAIN_CONFIG[env];
export const Homepage = homepage[env];
export default env;
