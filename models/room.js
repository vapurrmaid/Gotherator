/**
 * Sequelize model definition for Room Object
 * @author Grey <vapurrmaid@gmail.com>
 */

'use strict'
module.exports = (sequelize, DataTypes) => {
  var Room = sequelize.define('Room', {
    isPrivate: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function (models) {
        Room.hasMany(models.User)
      }
    }
  })
  return Room
}
