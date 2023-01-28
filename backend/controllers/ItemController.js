const { Items, Sequelize } = require("../models");
const { Op } = require("sequelize");

//create items

const createItem = async (req, res) => {
  const data = req.body;
  

  if (data) {
    const isItemUnique = await Items.findAll({
      where: {
        name: data.name,
      },
    });

    if (isItemUnique.length === 0) {
      if (isItemUnique.length === 0 && data.status === "incoming") {
        await Items.create(data)
          res.json({ message: "New Data is created" });
      } else if (isItemUnique.length === 0 && data.status === "outgoing") {
        res.json({ error: "No data present in Inventory" });
      }
    } else {
      const isZeroStock = await Items.findAll({
        where: {
          name: data.name,
          stock: {
            [Op.gt]: 0,
          },
        },
        raw: true
      });
      if (isZeroStock.length === 0) {
        if (isZeroStock.length === 0 && data.status === "incoming") {
          // res.json({ message: "data is not in stock" })
          await Items.update(
            { stock: data.stock + 1 },
            {
              where: {
                name: data.name,
              },
            }
          )
          res.json({ message: "Stock is updated" });
        } else if (isZeroStock.length === 0 && data.status === "outgoing") {
          res.json({ error: "not any stock available" });
        }
      } else {
        //*update stock according to the amount send
        if (isZeroStock.length > 0 && data.status === "incoming") {
         await Items.increment('stock', { by: data.stock, where: { name: data.name } })
          res.json({ message: "stock added with particular amount", stock:data.stock, name:data.name})

        } else if (isZeroStock.length > 0 && data.status === "outgoing") {
           await Items.decrement('stock', { by: data.stock, where: { name: data.name } })
            res.json({ message: "Product is issued and stock is decreased" })
        
        }
      }
    }
  }


};

const getItem = async (req, res) => {
  const getItemData = await Items.findAll();
  res.json(getItemData);
};

module.exports = {
  createItem,
  getItem,
};
