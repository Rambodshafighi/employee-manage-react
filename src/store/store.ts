import { configureStore } from "@reduxjs/toolkit";
import { departmentApi } from "./slice/department.slice";
import { employeeApi } from "./slice/employee.slice";
export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
  },
  middleware: (list) => {
    return list()
      .concat(employeeApi.middleware)
      .concat(departmentApi.middleware);
  },
});
