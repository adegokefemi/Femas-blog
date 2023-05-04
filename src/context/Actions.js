export const LoginStart = () => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});

export const Logout = () => ({
    type: "LOGOUT",
});

// update user profile in the settings page.
export const updateStart = () => ({
    type: "LOGIN_START",
});

export const updateSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const updateFailure = () => ({
    type: "LOGIN_FAILURE",
});