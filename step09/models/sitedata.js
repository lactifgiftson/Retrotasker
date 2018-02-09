module.exports = function(sequelize, DataTypes) {
  var site = sequelize.define('site', {
    siteURL: {type: DataTypes.STRING, allowNull: false},
    cololectedData: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 'PENDING'}
  });

  return site;
};