'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    lastName: {
      type:DataTypes.STRING,

      allowNull:false
    },
    login: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    passwordHash: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:true,
      isEmail:true
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Task,{
      as:"tasks"
    });
  };
  return User;
};