export interface ISlide {
    id?: number,
    title: string,
    image: string
}

export interface IAction {
    payload: any;
    type: string,
}

export interface IReducer {
    (state: IState, action: IAction): IState
}

export interface IState {
    data: [] | ISlide[];
}