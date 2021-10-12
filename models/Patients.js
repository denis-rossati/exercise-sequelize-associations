module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    patient_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fullname: { type: DataTypes.STRING },
    plan_id: {
      type: DataTypes.STRING,
      foreignKey: true,
    }
  },
  {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  }); 
  Patients.associate = (models) => {
    Patients.hasOne(models.Plans,
      { foreignKey: 'plan_id', as: 'plans' });
  };
  return Patients;
}