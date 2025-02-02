//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

module.exports = router

require('./routes/v1.js')(router);

require('./routes/v3.js')(router);

require('./routes/v4.js')(router);

require('./routes/v5.js')(router);

require('./routes/v6.js')(router);