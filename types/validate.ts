export type IValidate = {
  alpha(message: string): void,
  required(message: string): void,
  email(message: string): void,
  numeric(message: string): void,
  maxLength(max: string|number, message: string): void,
  minLength(min: string|number, message: string): void,
  minValue(min: number, message: string): void,
  maxValue(max: number, message: string): void,
  repeatPassword(pass: string, message: string): void,
  strongPassword(message: string): void,
  clearErrorMsg (errorsRefer: any, errorName: string): void,
  validRange (form:any, minFieldName: string, maxFieldName: string) : void,
  triggerValidFieldByRefer (refs: any, referName: string): void,
  requiredIf (formData: Array<any>, ref: string, consists: [string]): void,
}
