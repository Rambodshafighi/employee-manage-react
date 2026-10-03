import type { IEmployee } from "./employee";

interface IEmployeeResponseApi {
  success: boolean;
  message: string;
}

export interface IEmployeesGetResponseApi extends IEmployeeResponseApi {
  data: IEmployee[];
}
export interface IEmployeeGetResponseApi extends IEmployeeResponseApi {
  data: IEmployee;
}

export interface IEmloyeePostRequestApi extends Omit<
  IEmployee,
  | "isDeleted"
  | "createdAt"
  | "updatedAt"
  | "hireDate"
  | "status"
  | "_id"
  | "fullName"
> {
  hireDate?: string;
  status?: string;
}
export interface IEmloyeePostResponseApi extends IEmployeeResponseApi {
  data: IEmployee;
}

export interface IEmloyeePutRequestApi extends Partial<IEmloyeePostRequestApi> {}
export interface IEmloyeePutResponseApi extends IEmployeeResponseApi {
  data: IEmployee;
}

export interface IEmployeeDeleteResponseApi extends IEmployeeResponseApi {
  data: {
    id: string;
    permanent: boolean;
  };
}
