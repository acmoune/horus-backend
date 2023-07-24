'use strict';

/**
 * trade-session service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trade-session.trade-session');
