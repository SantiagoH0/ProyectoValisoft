const { Router } = require('express')

const userRoute = Router()

const { getUser, postUser, putUser, deleteUser} = require('../controllers/user')



userRoute.get('/', getUser)

userRoute.post('/', postUser)

userRoute.put('/', putUser)

userRoute.delete('/', deleteUser)

module.exports = userRoute