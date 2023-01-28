module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("Items", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    stock: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
  });

  return Items;
};


