export interface UserType {
  loginPin: string;
  firstName: string;
  lastName: string;
  phoneNo: string;
  country: string;
  avatar?: any;
  email: string;
  alias?: string;
  loggedInStatus?: boolean;
  userId?: string;
  token?: string;
  accountBalance?: number;
}

// types.ts
export interface User {
  first_name: string;
  last_name: string;
  email_address: string;
  password: string;
  date_of_birth: string;
}

