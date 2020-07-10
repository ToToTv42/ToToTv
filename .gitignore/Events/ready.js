module.exports = async(client) => {

    client.user.setPresence({
        activity: {
            name: "Bot en dev"
        }
    })
};