export interface UserState {
  // Required
  first_name: string;
  last_name: string;
  email_address: string;
  password: string;
  date_of_birth: string;
  // Optional
  username?: string;
  phone_number?: string;
  login_pin?: string;
  country?: string;
  logged_in_status?: boolean;
  token?: string;
  id?: string;
  total_balance?: string;
  total_returns?: string;
}
