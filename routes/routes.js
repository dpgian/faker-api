var faker = require('faker')

var appRouter = function (app) {

    app.get('/', function(req, res) {
        res.status(200).send('Simple API with Faker.js')
    })

    app.get('/user', function(req, res) {
        var data = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            jobTitle: faker.name.jobTitle(),
            phoneNumber: faker.phone.phoneNumber(),
            email: faker.internet.email()
        }
        res.status(200).send(data)
    })

    app.get('/users/:num', function(req, res) {
        var users = []
        var num = req.params.num

        if(isFinite(num) && num > 0) {
            for (i = 0; i < num; i++) {
                users.push({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    jobTitle: faker.name.jobTitle(),
                    phoneNumber: faker.phone.phoneNumber(),
                    email: faker.internet.email()
                })
            }
        
        res.status(200).send(users)

        } else {
            res.status(400).send({ message: 'Enter a valid number' })
        }
        
    })
}

module.exports = appRouter