/* eslint-env mocha */

/**
 * Simple model smoke test. Asserts all defined models
 * are able to be called.
 * @author Grey <vapurrmaid@gmail.com>
 * @requires assert
 * @requires models/index
 */

const assert = require('assert')

describe('models/index', function () {
  const models = require('../../models')
  it('returns User model', function () {
    assert(models.User !== null)
    assert(models.User instanceof Object)
  })

  it('returns MatchCriteria model', function () {
    assert(models.MatchCriteria !== null)
    assert(models.MatchCriteria instanceof Object)
  })

  it('returns Room model', function () {
    assert(models.Room !== null)
    assert(models.Room instanceof Object)
  })
})
