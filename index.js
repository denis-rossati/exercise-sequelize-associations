const bodyParser = require('body-parser');

const express = require('express');

const { Patients, Plans } = require('./models');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});