const loggerMiddleware = (logLevel) => {

    const actualMiddleware = (req, res, next) => {
        console.log(new Date().toLocaleTimeString())
        console.log(req.path)

        if (logLevel === "INFO")
            console.log(req.ip)

        next()
    }

    return actualMiddleware
}


module.exports = loggerMiddleware