const Walker = sequelize.define('walker', {
  userName: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
  lastUpdated {
    type: Sequelize.DATE
  }
});

Walker.sync({force: true}).then(() => {
  //table created
  return Walker.create({
    userName: 'user1',
    password: 'pwd'
  });
});