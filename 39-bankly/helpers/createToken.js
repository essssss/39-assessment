const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

/** return signed JWT for payload {username, admin}. */

function createToken(username, admin = false) {
    let payload = { username, admin };
    return jwt.sign(payload, SECRET_KEY);
}
function createBadToken(username, admin = false) {
    let payload = { username, admin };
    return jwt.sign(payload, "notsecret");
}

module.exports = createToken;
