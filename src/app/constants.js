export const LoginStatus = Object.freeze({
    REQUESTING: 0,
    LOGGED_IN: 1,
    LOGGED_OUT: 2
});

export const RequestStatus = Object.freeze({
    REQUESTING: 0,
    REQUESTED: 1
});

export const Size = Object.freeze({
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
});

export const Device = Object.freeze({
    mobileS: `(min-width: ${Size.mobileS})`,
    mobileM: `(min-width: ${Size.mobileM})`,
    mobileL: `(min-width: ${Size.mobileL})`,
    tablet: `(min-width: ${Size.tablet})`,
    laptop: `(min-width: ${Size.laptop})`,
    laptopL: `(min-width: ${Size.laptopL})`,
    desktop: `(min-width: ${Size.desktop})`,
    desktopL: `(min-width: ${Size.desktop})`
});
