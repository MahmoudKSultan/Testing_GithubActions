export function getTokenExpDate(token) {
    const {access_Token} = token;
    const decodedToken = access_Token.split(".")[1];
    const tokenPayload = JSON.parse(window.atob(decodedToken));
    const expirationDate = new Date(tokenPayload.exp * 1000);
    return expirationDate;
}