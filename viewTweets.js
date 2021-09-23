var colors = require('colors/safe');

/**
 * prints the entire status object to the console
 */
statuses = ((response) => {

    var str = ''

    response.on('data', (chunk) => {
        str += chunk
    });

    response.on('end', () => {

        let tweets = JSON.parse(str)

        console.log(tweets.statuses)

    });
});

/**
 * prints list of user screen names and the text of their tweet
 * to the console.
 */
statusTextAndUser = ((response) => {

    var str = ''

    response.on('data', (chunk) => {
        str += chunk
    });

    response.on('end', () => {

        let tweets = JSON.parse(str)

        console.log(tweets.statuses.forEach(statuses => {
            console.log('user: ' + statuses.user.screen_name + '\t' + 'tweet: ' + statuses.text)
        }))
    });
});

/**
 * prints a list of user screen names to the console
 */
users = ((response) => {

    var str = ''

    response.on('data', (chunk) => {
        str += chunk
    });

    response.on('end', () => {

        let tweets = JSON.parse(str)

        console.log(tweets.statuses.forEach(statuses => {
            console.log(colors.green(statuses.user.screen_name))
        }))
    });
});

module.exports = {
    statuses: statuses,
    users: users,
    statusTextAndUser: statusTextAndUser
}