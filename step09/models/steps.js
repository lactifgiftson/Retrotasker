"use strict";

module.exports = function(sequelize, DataTypes) {
  var stepdata = sequelize.define('stepdata', {
    stepnumber: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
    stepdata: {type: DataTypes.STRING, allowNull: false}
  });

  return stepdata;
};