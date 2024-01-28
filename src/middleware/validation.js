const dataMethod = ["body", "params", "query", "headers", "file"]
export const validation = (schema) => {
    return (req, res,next) => {
        const validationError = []
        dataMethod.forEach(key => {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key], { abortEarly: false })

                if (validationResult.error) {
                    validationError.push(validationResult.error.details)
                }
            }
        });
        if (validationError.length) {
            return res.json({ message: "validation Errors", validationError })


        } next()

    }

}