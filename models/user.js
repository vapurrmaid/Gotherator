/**
 * Sequelize model definition for User Object
 * @author Grey <vapurrmaid@gmail.com>
 */

'use strict'
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User',
    {
      facebookProfile: DataTypes.STRING,
      googleProfile: DataTypes.STRING,
      displayName: DataTypes.STRING,
      isOnline: DataTypes.BOOLEAN,
      lastLogin: DataTypes.BOOLEAN,
      isMod: DataTypes.BOOLEAN
    },

    {
      classMethods: {
        associate: function (models) {
          User.belongsTo(models.Room)
        }
      }
    })
  return User
}
