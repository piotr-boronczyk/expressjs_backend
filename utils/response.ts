/* eslint-disable no-unused-vars */
export class R{
    data: unknown
    meta: Meta
    constructor(data: unknown){
        this.data = data
        this.meta = new Meta()
    }

    changeMeta(meta: Meta){
        this.meta = meta
        return this
    }
    changeStatus(status: Status){
        this.meta.changeStatus(status)
        return this
    }
    changeCode(code: number){
        this.meta.changeCode(code)
        return this
    }
    changeMessage(message: string){
        this.meta.changeMessage(message)
        return this
    }
    toJson(){
        return JSON.stringify(this)
    }

}

export class Meta{
    code = 200
    message: string
    status: Status
    constructor(code = 200, message = '', status = Status.SUCCESS){
        this.code = code
        this.message = message
        this.status = status
    }

    changeStatus(status: Status){
        this.status = status
        return this
    }
    changeCode(code: number){
        this.code = code
        return this
    }
    changeMessage(message: string){
        this.message = message
        return this
    }
}

export enum Status {
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}