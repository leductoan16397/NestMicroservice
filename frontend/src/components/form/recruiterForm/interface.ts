export interface RecruiterInterface {
    email: string;
    roles: string;
}

export type onFinishHandler = (values: any) => void;
export type onFinishFailedHandler = (errors: any) => void;
