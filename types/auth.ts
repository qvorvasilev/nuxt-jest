export type AuthPayload = {
  Token: string,
  RefreshToken: string,
  AppUser?: UserDataPayload
}
export type UserDataPayload = {
  ID: number
  FirstName: string
  LastName: string
  Email: string
  EmailVerificationStatus: string
  DateOfBirth: string
  MobileNumber: number|string
  MobileVerificationStatus: string
  ProfileVerificationStatus: string
  AccreditedInvestorType: string
  AccountVerifiedShown: string
  Address: {
    AddressLine1: string
    AddressLine2: string
    City: string
    Country: string
    PostCode: string
    State: string
  }
  ActiveAccountID: number
  ActiveAccountType: string
  TFAEnabled: boolean
  ExpertLevel: string
  SizeOfInvestment: string
}
export type IOnboardingRouteGuard = {
  'onboarding': () => 'onboarding'
  'onboarding-investment-size': () => 'onboarding'|'onboarding-investment-size'
  'onboarding-summary': () => 'onboarding'|'onboarding-investment-size'|'onboarding-summary'
  'sign-up': () => 'onboarding'|'onboarding-investment-size'|'sign-up'
}
export type ISignUpRouteGuard = {
  'sign-up': () => string
  '/sign-up/waitlist': () => string
  '/sign-up/verify-phone': () => string
  '/sign-up/successful-verification': () => string
  '/sign-up/get-verified': () => string
  '/sign-up/proof-of-identity': () => string
}
export type IAuth = {
  isLoggedIn(): boolean,
  login(tokens: AuthPayload): void,
  setTokens(tokens: AuthPayload): void,
  setUserData(userData: UserDataPayload): void,
  setVerificationInfo(userData: UserDataPayload): void,
  clearLocalStorage(): void,
  logout(): void,
  getAccessLevel(): 'unauth'|'verified'|'unverified',
  signUpRedirectHandler(): void,
  onboardingRouteGuard: IOnboardingRouteGuard,
  signUpRouteGuard: ISignUpRouteGuard,
}
