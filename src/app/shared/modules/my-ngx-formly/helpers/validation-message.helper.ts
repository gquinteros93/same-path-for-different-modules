export const validationMessages = [
    { name: 'required', message: 'This field is required.' },
    { name: 'email', message: 'The email inserted is wrong.' },
    { name: 'minlength', message: minlengthValidationMessage },
    { name: 'maxlength', message: maxlengthValidationMessage },
    { name: 'min', message: minValidationMessage },
    { name: 'max', message: maxValidationMessage },
    { name: 'pattern', message: 'The value inserted is wrong.'}
];

export function minlengthValidationMessage(err, field) {
    return `This field must have at least ${field.templateOptions.minLength} characters`;
}
export function maxlengthValidationMessage(err, field) {
    return `This field must have a maximum of ${field.templateOptions.maxLength} characters`;
}
export function minValidationMessage(err, field) {
    return `This field must be greater than ${field.templateOptions.min}`;
}
export function maxValidationMessage(err, field) {
    return `This field must be lower than ${field.templateOptions.max}`;
}