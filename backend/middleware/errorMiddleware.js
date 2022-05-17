const errorHandler= (err, req, res, next) =>{
    const statusCode= res.statusCode ? res.StatusCode : 500

    res.status(statusCode)

    res.json({
        message:err.message,
        stack: err.stack
    })
}

module.exports= {
    errorHandler
}