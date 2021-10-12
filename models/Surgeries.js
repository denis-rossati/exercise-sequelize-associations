module.exports = (sequelize, DataTypes) => {
  const Surgerie = sequelize.define('Surgeries', {
    surgery_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    speciality: { type: DataTypes.STRING },
    doctor: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'Surgeries',
    underscored: true,
  });

  return Surgerie;
}