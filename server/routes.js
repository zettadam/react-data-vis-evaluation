module.exports = [
  {
    path: '/us-house-price-index',
    method: 'GET',
    handler: (reques, reply) => {
      reply('data/us-house-price-index_1987-2015.json')
    }
  }
]
