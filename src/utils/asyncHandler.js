//todo with promise
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) =>
            next(err)
        );
    };
};

export { asyncHandler };

//todo with try catch
// const asyncHandler = () => {};
// const asyncHandler = () => {() => {}};
// const asyncHandler = () => () => {};
// const asyncHandler = (fn) => async () => {};

// //! This is a higher order function that returns a function
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (e) {
//     res.status(e.code || 500).json({ success: false, message: e.message });
//   }
// };

// export { asyncHandler };
