'use strict';
import {LOGIN_PATTERN, PASSWORD_PATTERN, USER_NAME_PATTERN} from "../../constants";

const bcrypt =require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type:DataTypes.STRING,
      allowNull:false,
      is:USER_NAME_PATTERN
    },
    lastName: {
      type:DataTypes.STRING,
      is:USER_NAME_PATTERN,
      allowNull:false
    },
    login: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      is:LOGIN_PATTERN
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      field:'passwordHash',
      set(val) {
          this.setDataValue(('password'),bcrypt.hashSync(val,10));
      }
    },
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:true,
      isEmail:true
    }
  }, {});
  User.prototype.comparePassword=function(password){
    return bcrypt.compare(password,this.password).then(res=>res)
  };
  User.associate = function(models) {
    User.hasMany(models.Task,{
      as:"tasks"
    });
  };
  return User;
};