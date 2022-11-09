export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectUserToken = state => state.auth.token;

export const selectUserError = state => state.auth.error;

export const selectUserIsLoading = state => state.auth.isLoading;

export const selectUserIsLoggedIn = state => state.auth.isLoggedIn;
