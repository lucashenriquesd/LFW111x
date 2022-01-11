'use strict'
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return {id: 'G1', name: 'Diablo II', rrp: '179.90', info: 'Diablo II Remaster'}
  })
}