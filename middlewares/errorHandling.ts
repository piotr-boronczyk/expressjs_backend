import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'

export const errorConverter = (err: Error, _req: Request, _res: Response, next: NextFunction) => {
    if (!(err instanceof ApiError)) {
        next(new ApiError(httpStatus.BAD_REQUEST, err.message))
    }
    next(err) 
}