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

statusText = ((response) => {

    var str = ''

    response.on('data', (chunk) => {
        str += chunk
    });

    response.on('end', () => {

        let tweets = JSON.parse(str)

        console.log(tweets.statuses.forEach(statuses => {
            console.log(colors.yellow(statuses.text+'\n'))
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
    statusText: statusText
}