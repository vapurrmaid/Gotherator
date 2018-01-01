/* eslint-env mocha */

/**
 * Unit Tests for models/room
 * @author Grey <vapurrmaid@gmail.com>
 * @requires assert
 * @requires models/room
 * @requires models/user
 */
const assert = require('assert')

describe('models/room', function () {
  before(function () {
    return require('../../models').sequelize.sync({ force: true })
  })

  beforeEach(function () {
    this.Room = require('../../models').Room
    this.User = require('../../models').User
  })

  afterEach(async function () {
    await this.Room.truncate({ cascade: true })
    await this.User.truncate({ cascade: true })
  })

  describe('Room CRUD', function () {
    it('Creates a Room', async function () {
      const isPrivate = true
      const chatRoom = await this.Room.create({ isPrivate })
      assert(chatRoom.get('isPrivate') === isPrivate)
    })

    it('Reads A Room', async function () {
      const isPrivate = true
      await this.Room.create({ isPrivate })
      const ReadRoom = await this.Room.findOne({where: { isPrivate }})
      assert(ReadRoom.get('isPrivate') === isPrivate)
    })

    it('Updates A Room', async function () {
      let isPrivate = false
      const chatRoom = await this.Room.create({ isPrivate })
      isPrivate = true
      await chatRoom.update({ isPrivate })
      assert(chatRoom.get('isPrivate') === true)
    })

    it('Deletes A Room', async function () {
      const isPrivate = true
      const chatRoom = await this.Room.create({ isPrivate })
      await chatRoom.destroy()
      const roomDidDelete = await this.Room.findOne({where: { isPrivate }})
      assert(roomDidDelete === null)
    })
  })

  describe('Room Associations', function () {
    it('HasMany Users', async function () {
      const isPrivate = true
      const displayName = 'Joe'
      const Joe = await this.User.create({ displayName })
      const Jane = await this.User.create({ displayName: 'Jane' })
      const chatRoom = await this.Room.create({ isPrivate })
      await chatRoom.addUser(Joe)
      await chatRoom.addUser(Jane)
      await chatRoom.reload()
      const users = await chatRoom.getUsers()
      assert(users[0].get('displayName') === displayName)
      assert(users[1].get('displayName') === 'Jane')
    })
  })
})
