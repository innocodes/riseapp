const BASE_URL = 'https://rise-rn-test-api-gb2v6.ondigitalocean.app';
const API_VERSION = '/api/v1';

// POST API CALLS
export const SIGN_UP_URL = `${BASE_URL}${API_VERSION}/users`;
export const SIGN_IN_URL = `${BASE_URL}${API_VERSION}/sessions`;
export const CREATE_PLAN_URL = `${BASE_URL}${API_VERSION}/plans`;

// GET API CALLS
export const GET_SESSION_URL = `${BASE_URL}${API_VERSION}/sessions`;
export const GET_PLANS_URL = `${BASE_URL}${API_VERSION}/plans`;
export const GET_PLAN_PROJECTION_URL = `${BASE_URL}${API_VERSION}/plans/projection?monthly_investment=<naira>&target_amount=<naira>`

