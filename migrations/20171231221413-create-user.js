'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      facebookProfile: {
        type: Sequelize.STRING
      },
      googleProfile: {
        type: Sequelize.STRING
      },
      displayName: {
        type: Sequelize.STRING
      },
      isOnline: {
        type: Sequelize.BOOLEAN
      },
      lastLogin: {
        type: Sequelize.DATE
      },
      isMod: {
        type: Sequelize.BOOLEAN
      },
      RoomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
}
