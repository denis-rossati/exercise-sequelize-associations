const bodyParser = require('body-parser');

const express = require('express');

const { Patients, Plans, Surgeries, PatientSurgeries } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//lista todos pacientes que estão cadastrados em certo plano
app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const plans = await Patients.findAll(
      { where: { 'plan_id': id } }
    )
    res.status(200).json(plans);
  } catch (e) {
    console.log(e.message);
    res.send('): ...');
  }
});

// lista pacientes e suas cirurgias
app.get('/patients/surgeries', async (req, res) => {
  try {
    const PatientsSurgeries = await Patients.findAll({
      include: { model: Surgeries, as: 'Surgeries', through: { attributes: [] } },
    });
    return res.status(200).json(PatientsSurgeries);
  } catch (e) {
    console.log(e.message);
    res.send('): ...');
  }
});

// lista pacientes e seus planos
app.get('/patients' , async (req, res) => {
  try {
    const patients = await Patients.findAll({
      include: { model: Plans, as: 'plan' },
    });
    return res.status(200).json(patients);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'ops...' });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});