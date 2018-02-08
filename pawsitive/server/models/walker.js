'use strict';
module.exports = (sequelize, DataTypes) => {

  var Walker = sequelize.define('walker', {
    userName: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
    
  });

  Walker.sync({force: true}).then(() => {
    //table created
    return Walker.create({
      userName: 'user1',
      password: 'pwd'
    });
  });

  return Walker;

};