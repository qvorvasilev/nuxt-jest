import { IDynamicObject } from '~/types/shared'

export type IRemoveProp = (obj: IDynamicObject, propToDelete: string) => Object
export type IErrorHandler = (error: any, $notification: any, $sentry: any, i18n: any, $config: any) => void
export type IFriendlyNumber = (number: any, decPlaces: number, hideAbbrev: boolean) => number
export type IThousandsSeparator = (x: number) => string|number
export type IComputeDate = (input: any) => string
export type IFindCountry = (code: string) => string|undefined
export type IGetCurrency = (code: string) => string
export type IUtil = {
  removeProp?: IRemoveProp
  errorHandler?: (error: any) => void
  friendlyNumber?: IFriendlyNumber
  thousandsSeparator?: IThousandsSeparator
  monthsMap: string[]
  computeDate: IComputeDate
  findCountry?: IFindCountry
  entityPreviousStep?: () => void
  getCurrency?: IGetCurrency
  checkForDefaultValues(query: IDynamicObject, searchFields: IDynamicObject): any
  parseQuery(searchParams: IDynamicObject): object
}
