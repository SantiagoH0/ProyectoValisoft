const { Router } = require('express')

const warnRoute = Router()

const { getWarn, postWarn, putWarn, deletWarn} = require('../controllers/warn')



warnRoute.get('/', getWarn)

warnRoute.post('/', postWarn)

warnRoute.put('/',  putWarn)

warnRoute.delete('/', deletWarn)

module.exports = warnRoute