module.exports = function(sequelize, DataTypes) {
  var Siterecord = sequelize.define('Siterecord', {
    siteURL: {type: DataTypes.STRING, allowNull: false},
    cololectedData: {type: DataTypes.STRING, allowNull: true},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 'PENDING'}
  });

  return Siterecord;
};