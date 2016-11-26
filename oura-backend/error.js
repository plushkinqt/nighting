function createError (err, info) {
    var errObj = {};

    if (!err || !err.message || !err.status) {
        return {status: 'error'};
    }

    errObj = {
        success : false,
        error: err
    };

    if (info) {
        errObj.info = info;
    }

    return errObj;
}

module.exports.createError = createError;
