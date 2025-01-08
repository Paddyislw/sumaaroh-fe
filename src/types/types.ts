export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CreateUserPayload {
  name: string;
  email: string;
}

export interface CreateUserResponse {
  success: boolean;
  data: User;
}

export interface PreferencePayload {
  guestCount: string;
  venueType: string;
}

export interface Preference {
  userId: string;
  guestCount: string;
  venueType: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PreferenceResponse {
  success: boolean;
  data: Preference;
}

export interface UserPreferences {
  guestCount: string;
  venueType: string;
}

