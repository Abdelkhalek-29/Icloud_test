export const isValid = (schema) => {
  return (req, res, next) => {
    const copyReq = { ...req.body, ...req.params, ...req.query };
    const validationResult = schema.validation(copyReq, { abortEarly: false });
    if (validationResult.error) {
      return res.json({
        message: "Validation error",
        validationError: validationResult.error.details,
      });
    }
    return next;
  };
};
