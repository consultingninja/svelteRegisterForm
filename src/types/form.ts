


export interface registerFormData {
    weakPassword:boolean,
    urlTaken: boolean,
    emailUsed: boolean,
    error:boolean,
    message: string,
    firstName: FormDataEntryValue,
    lastName: FormDataEntryValue,
    email: FormDataEntryValue,
    password: FormDataEntryValue,
    urlChoice:FormDataEntryValue,
    [key:string]: any

}

export interface loginFormData {
    email: FormDataEntryValue,
    error:boolean,
    message: string,
    [key:string]: any
}