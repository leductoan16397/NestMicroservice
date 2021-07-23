export interface RecruiterManagerInterface {
    email: string;
    company: string;
}

export type onFinishHandler = (values: any) => void;
export type onFinishFailedHandler = (errors: any) => void;
