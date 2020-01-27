'use strict';
const bcrypt =require('bcrypt');
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
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      field:'passwordHash',
      set(val) {
        bcrypt.hash(val,10).then(hash=>{
          this.setDataValue(('password'),hash);
        });
      }
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