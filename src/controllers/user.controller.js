const userData = require('../data/users')

const getUsers = (req, res, next) => {
  res.json(userData)
}

const getUser = (req, res, next) => {
  const user = userData.find((u) => u.id == req.params.userId)
  if (user === undefined){
    return res.status(404).json()
  }
  res.json(user)
}

const createUser = (req, res, next) => {
  const user = req.body
  userData.push(user)
  res.json(user)
}

const updateUser = (req, res, next) => {
  const userIndex = userData.findIndex((u) => u.id == req.params.userId)
  const user = req.body
  if (userIndex === undefined){
    return res.status(404).json()
  }
  userData[userIndex] = user
  res.json(user)
}

const deleteUser = (req, res, next) => {
  const userIndex = userData.findIndex((u) => u.id == req.params.userId)
  if (userIndex === undefined){
    return res.status(404).json()
  }
  userData.splice(userIndex, 1)
  res.status(204).json()
}

module.exports.getUsers = getUsers
module.exports.getUser = getUser
module.exports.createUser = createUser
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

