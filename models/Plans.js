module.exports = (sequelize, DataTypes) => {
  const Plans = sequelize.define('Plans', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: { type: DataTypes.STRING },
    price: { type: DataTypes.DOUBLE },
  },
  {
    timestamps: false,
    tableName: 'Plans',
    underscored: true,
  }); 
  Plans.associate = (models) => {
    Plans.belongsTo(models.Patients,
      { foreignKey: 'plan_id', as: 'plans' });
  };
  return Plans;
}