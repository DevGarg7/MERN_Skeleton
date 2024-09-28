import express from "express";

const getErrorMessage = function(err) {
    let message = '';

    // Handle MongoDB duplicate key error
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Duplicate key error: A record with this value already exists.';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        // Loop through validation errors from Mongoose
        for (let errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    
    return message;
};

export default { getErrorMessage };

const getUniqueErrorMessage = (err) => {
    let output;

    try {
        let fieldName = err.message.substring(
            err.message.lastIndexOf('.$') + 2,
            err.message.lastIndexOf('_1')
        );

        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';
    } catch (ex) {
        output = 'Unique field already exists';
    }

    return output;
};