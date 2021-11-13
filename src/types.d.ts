export type UserType = {
    id?: number | string;
    name: string;
    email: string;
    phone: string;
    country?: string;
  };
  
  export interface ActionType<T, J> {
    type: T;
    payload: J;
  }
  