import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import { ApiError } from '../utils/ApiError'

export const errorHandler = (err: ApiError, _req: Request, res: Response) => {
    const {message, statusCode} = err
    res.status(statusCode).json({
        success: false,
        meta: {
            code: statusCode,
            errorText: httpStatus[statusCode],
            message: message
        },
        data: {}
    })
}

export const errorConverter = (err: Error, _req: Request, _res: Response, next: NextFunction) => {
    if (!(err instanceof ApiError)) {
        next(new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
    }
    next(err) 
}