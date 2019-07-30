var appRouter = function (app) {

    app.get('/', function(req, res) {
        res.status(200).send('Simple API with Faker.js')
    })

}

module.exports = appRouter