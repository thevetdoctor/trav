export interface ISlide {
    id?: number,
    title: string,
    image: string
}

export interface IAction {
    type: string,
    data: {}
}

export interface IReducer {
    data: [], 
    action: IAction
}