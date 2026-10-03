import type { IDepartment } from "./department";

interface IDepartmentApiResponse {
  success: boolean;
  message: string;
}
export interface IDepartmentGetApiResponse extends IDepartmentApiResponse {
  data: IDepartment[];
}
