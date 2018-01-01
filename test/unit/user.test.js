/* eslint-env mocha */

/**
 * Unit Tests for models/user
 * @author Grey <vapurrmaid@gmail.com>
 * @requires assert
 * @requires models/user
 */
const assert = require('assert')

describe('models/user', function () {
  before(function () {
    return require('../../models').sequelize.sync({ force: true })
  })

  beforeEach(function () {
    this.User = require('../../models').User
  })

  afterEach(async function () {
    await this.User.truncate({ cascade: true })
  })

  describe('User CRUD', function () {
    it('Creates a User', async function () {
      const displayName = 'joe'
      const Joe = await this.User.create({ displayName })
      assert(Joe.get('displayName') === displayName)
    })

    it('Reads A User', async function () {
      const displayName = 'joe'
      await this.User.create({ displayName })
      const ReadJoe = await this.User.findOne({where: { displayName }})
      assert(ReadJoe.get('displayName') === displayName)
    })

    it('Updates A User', async function () {
      let displayName = 'j'
      const Joe = await this.User.create({ displayName })
      displayName = 'joe'
      await Joe.update({ displayName })
      assert(Joe.get('displayName') === 'joe')
    })

    it('Deletes A User', async function () {
      const displayName = 'joe'
      const Joe = await this.User.create({ displayName })
      await Joe.destroy()
      const JoeDidDelete = await this.User.findOne({where: { displayName }})
      assert(JoeDidDelete === null)
    })
  })
})
