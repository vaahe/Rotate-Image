import { actionTypes } from "@customtypes/reducerTypes";

const initialState: Record<string, any> = {
  rotateLeft: false,
  rotateRight: false,
};

export enum ActionEnum {
  ROTATE = "rotate",
}

export const rotateAction = (payload: boolean) => ({
  type: ActionEnum.ROTATE,
  payload,
});

const Reducer = (state = initialState, action: actionTypes): any => {
  switch (action.type) {
    case ActionEnum.ROTATE:
      return action.payload;
    default:
      return state;
  }
};

export default Reducer;
