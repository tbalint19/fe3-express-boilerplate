const errorHandlerMiddleware = (err, req, res, next) => {
    console.log("error happened")
    console.log(err)
    res.sendStatus(500)
}

module.exports = errorHandlerMiddleware