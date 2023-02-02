// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // Setup key relationships
  foreignKey: "category_id",
  onDelete: "cascade",
});

// Categories have many Products
Category.hasMany(Product, {
// Setup key relationships
foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
// Setup key relationships
foreignKey: "product_id",
through: ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
// Setup key relationships
foreignKey: "tag_id",
through: ProductTag,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
