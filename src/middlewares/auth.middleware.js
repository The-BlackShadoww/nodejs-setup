import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

//! The verifyJWT middleware verifies the user's JWT, checks if the user exists in the database,
//! and attaches the user to the request object.
export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        //todo get token
        // Extract token from cookies or Authorization header
        const token =
            req.cookies?.accessToken ||
            req.header("Authorization")?.replace("Bearer ", "");

        //todo verify token exists
        // Check if token is present
        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        //todo ask jwt to verify token
        // Verify the token using jwt and secret key
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // Find the user in the database using the decoded token's user ID
        const user = await User.findById(decodedToken?._id).select(
            "-password -refreshToken"
        );

        // Check if user exists
        if (!user) {
            // todo discuss about fronted
            throw new ApiError(401, "Invalid access token");
        }

        // Attach user to request object
        req.user = user;
        // Call next middleware
        next();
    } catch (error) {
        // Handle any errors and throw an ApiError
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});
