export interface IEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string;
  department: {
    _id: string;
    name: string;
    code: string;
    location: string;
  };
  position: string;
  salary: number;
  hireDate: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  status: string;
}
