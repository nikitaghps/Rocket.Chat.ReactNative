const random = require('./helpers/random');
const value = random(20);
const data = {
    server: 'https://unstable.rocket.chat',
    alternateServer: 'https://stable.rocket.chat',
    user: `user${ value }`,
    password: `password${ value }`,
    email: `detoxrn+${ value }@rocket.chat`,
    random: value
}
module.exports = data;