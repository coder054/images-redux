const ROOT_URL = "https://api.imgur.com"
var CLIENT_ID
var DOMAIN_NAME

if (process.env.NODE_ENV === "production") {
    CLIENT_ID = "something"
    DOMAIN_NAME = "http://anhdt-images-redux.herokuapp.com"
} else {
    CLIENT_ID = "a3d9d687b0edbbf"
    
    DOMAIN_NAME = "localhost:3000"
}



export const config = {
    clientId: CLIENT_ID,
    clientSecret: '21bd93253387d3feb9bb3686f6bbb53cc901fa09',
    rootUrl: ROOT_URL,
    domain: DOMAIN_NAME
}