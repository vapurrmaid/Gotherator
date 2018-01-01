/**
 * Controller for routes related to Authentication
 * @author Grey <vapurrmaid@gmail.com>
 * @todo - implement & test
 */

module.exports = {

  /**
   * @todo
   */
  test (req, res, next) {
    const { user } = req
    return res.json(user.dataValues) // db vals
  }
}
