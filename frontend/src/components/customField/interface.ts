/* eslint-disable no-unused-vars */
import { UploadFile } from 'antd/lib/upload/interface';

export interface OptionProp {
    value: string | boolean | number;
    label: string;
}

export interface CustomSelectProps {
    value: string | string[];
    multiple?: boolean;
    options: OptionProp[];
    size?: 'large' | 'middle' | 'small';
    onChange: (val: string | string[], option?: string[]) => void
}

export interface PreviewState {
    previewVisible: boolean;
    previewImage: string;
    previewTitle: string;
}
export interface PreviewAction {
    type: ActionKind,
    payload?: any,
}

export enum ActionKind {
    PREVIEWHANDLE = 'PREVIEWHANDLE',
    CANCELPREVIEW = 'CANCELPREVIEW',
}
export interface PicturesWallProps {
    maxCount?: number;
    multiple?: boolean;
    onChange: (val: UploadFile[]) => void
}
