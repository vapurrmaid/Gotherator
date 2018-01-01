/* eslint-env mocha */

/**
 * Unit Tests for models/matchcriteria
 * @author Grey <vapurrmaid@gmail.com>
 * @requires assert
 * @requires models/matchcriteria
 */
const assert = require('assert')

describe('models/matchcritera', function () {
  before(function () {
    return require('../../models').sequelize.sync({ force: true })
  })

  beforeEach(function () {
    this.MatchCriteria = require('../../models').MatchCriteria
  })

  afterEach(async function () {
    await this.MatchCriteria.truncate({ cascade: true })
  })

  describe('MatchCriteria CRUD', function () {
    it('Creates a MatchCriteria', async function () {
      const text = 'text'
      const MC = await this.MatchCriteria.create({ text })
      assert(MC.get('text') === text)
    })

    it('Reads A MatchCriteria', async function () {
      const text = 'text'
      await this.MatchCriteria.create({ text })
      const ReadMC = await this.MatchCriteria.findOne({where: { text }})
      assert(ReadMC.get('text') === text)
    })

    it('Updates A MatchCriteria', async function () {
      let text = 't'
      const MC = await this.MatchCriteria.create({ text })
      text = 'text'
      await MC.update({ text })
      assert(MC.get('text') === 'text')
    })

    it('Deletes A MatchCriteria', async function () {
      const text = 'text'
      const MC = await this.MatchCriteria.create({ text })
      await MC.destroy()
      const MCdidDelete = await this.MatchCriteria.findOne({where: { text }})
      assert(MCdidDelete === null)
    })
  })
})
