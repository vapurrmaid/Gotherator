/**
 * Sequelize Model Definition for MatchCriteria Object
 * @author Grey <vapurrmaid@gmail.com>
 */

'use strict'
module.exports = (sequelize, DataTypes) => {
  var MatchCriteria = sequelize.define('MatchCriteria',
    {
      text: DataTypes.STRING,
      image: DataTypes.STRING,
      responses: DataTypes.JSONB
    },
    {
      classMethods: {
        associate: function (models) {
          MatchCriteria.hasMany(models.User)
        }
      }
    })

  return MatchCriteria
}
