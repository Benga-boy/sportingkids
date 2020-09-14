const dbURI = process.env.DBURI
const port = process.env.PORT || 8000
const secret = process.env.SECRET

module.exports = {
  dbURI,
  port,
  secret
}