const Admin = require("../models/admin");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");

function getAll() {
  return Admin.find();
}
function getById(adminId) {
  return Admin.findById(adminId);
}

function create(adminData) {
  return Admin.create(adminData);
}

function remove(adminId) {
  return Admin.findByIdAndDelete(adminId);
}

function update(adminId, newAdminData) {
  return Admin.findByIdAndUpdate(adminId, newAdminData);
}

async function signUp(adminData) {
  const { password, mail } = adminData;
  const adminByEmail = await Admin.findOne({ mail })
  if (adminByEmail) {
    throw new Error ('email ya utilizado')
  }
  const encriptedPassword = await bcrypt.hash(password);
  return Admin.create({
    ...adminData,
    password: encriptedPassword,
  });
}

async function login(mail, password) {
  const adminByEmail = await Admin.findOne({ mail });
  if (!adminByEmail) {
    throw new Error ('Login error: correo no registrado')
  } 
  const isValid =  await bcrypt.compare (password, adminByEmail.password)
  console.log(isValid, mail, password, adminByEmail)
  if (!isValid) {
    throw new Error ('Login Error: password incorrecto')
  }
  return jwt.sign ({id: adminByEmail._id})
}

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  signUp,
  login
};