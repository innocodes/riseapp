export interface SignUpRequestType {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  dateOfBirth: string;
  username?: string;
  phoneNumber?: string;
}

export interface SignInRequestType {
  emailAddress: string;
  password: string;
}

export interface CreatePlanRequestType {
  planName: string;
  targetAmount: string;
  maturityDate: string;
}
