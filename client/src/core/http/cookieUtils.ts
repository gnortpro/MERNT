import { IncomingMessage } from 'http';

const listCookieStorageName = {
    access_token: 'access_token',
    token_type: 'token_type',
};

const setCookie = (cookieName: string, cookieValue: string, timeStamp?: number): void => {
    const d = new Date(timeStamp * 1000);
    d.setTime(d.getTime());
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = timeStamp
        ? `${cookieName}=${cookieValue};${expires};path=/`
        : `${cookieName}=${cookieValue};path=/`;
};

// NEED OPTIMIZE NAMING
const getCookie = (cookieName: string) => {
    const name = `${cookieName}=`;
    const ca = document.cookie.split(';');
    const getLenthCa = ca.length;
    for (let i = 0; i < getLenthCa; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
};

const checkCookie = (cookieName: string): boolean => {
    const user = getCookie(cookieName);
    return Boolean(user);
};

const deleteCookie = (cookieName: string): void => {
    document.cookie = `${cookieName}=; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
};

const deleteCookieFunc = () => {
    Object.keys(listCookieStorageName).forEach(item => {
        deleteCookie(item);
    });
};

const parseCookie = (cookie: string): Record<string, string> => {
    if (!cookie) return;

    return cookie
        .split(';')
        .map(pair => pair.split('='))
        .reduce((object, [key, value]) => ({ ...object, [key.trim()]: value.trim() }), {});
};

const getTokenFromCookie = (req: IncomingMessage): string => {
    const { token: cookieToken } = parseCookie(req.headers.cookie) || {};
    const { token } = JSON.parse(decodeURIComponent(cookieToken)) || {};
    return token;
};

export {
    parseCookie,
    setCookie,
    getCookie,
    deleteCookie,
    checkCookie,
    listCookieStorageName,
    deleteCookieFunc,
    getTokenFromCookie,
};
