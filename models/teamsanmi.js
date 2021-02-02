'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teamsanmi = sequelize.define('Teamsanmi', {
    name: DataTypes.STRING
  });

  Teamsanmi.associate = function (models) {
    models.Teamsanmi.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Teamsanmi;
};
