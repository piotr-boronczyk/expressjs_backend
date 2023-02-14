import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import { ApiError } from '../utils/ApiError'
import { R, Status } from '../utils/response'

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const {message, statusCode} = err
    res.status(statusCode).json(new R({}).changeCode(statusCode).changeMessage(message).changeStatus(Status.ERROR))
}

export const errorConverter = (err: Error, _req: Request, _res: Response, next: NextFunction) => {
    if (!(err instanceof ApiError)) {
        next(new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
    }
    next(err) 
}