import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IDepartmentGetApiResponse } from "../../types/department.api";

export const departmentApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (build) => ({
    getDepartments: build.query<IDepartmentGetApiResponse, void>({
      query: () => ({
        url: "/departments",
      }),
    }),
  }),
});

export const { useGetDepartmentsQuery } = departmentApi;
