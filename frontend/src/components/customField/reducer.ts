import { ActionKind, PreviewAction, PreviewState } from './interface';

export const previewReducer = (state: PreviewState, action: PreviewAction):PreviewState => {
  switch (action.type) {
    case ActionKind.PREVIEWHANDLE:
      return {
        ...state,
        previewVisible: true,
        previewImage: action.payload.url || action.payload.preview,
        previewTitle: action.payload.name || action.payload.url.substring(action.payload.url.lastIndexOf('/') + 1),
      };
    case ActionKind.CANCELPREVIEW:
      return {
        ...state,
        previewVisible: false,
      };
    default:
      throw new Error();
  }
};
