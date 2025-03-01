module.exports = (sequelize, _DataTypes) => {
  const PatientSurgeries = sequelize.define('PatientSurgeries',
    {},
    {
      timestamps: false,
      tableName: 'Patient_surgeries'
      
    },
  );

  PatientSurgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });

    models.Patients.belongsToMany(models.Surgeries, {
      as: 'Surgeries',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return PatientSurgeries;
};