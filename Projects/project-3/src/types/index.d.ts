export interface ICoach {
  id: string;
  firstName: string;
  lastName: string;
  areas: string[];
  description: string;
  hourlyRate: number;
}

export interface IRequests {
  id: string;
  email: string;
  message: string;
}

export interface ICoachState {
  coaches: ICoach[];
}

export interface IRequestsState {
  requests: IRequests[];
}

export interface IFilters {
  [key: string]: string;
}
