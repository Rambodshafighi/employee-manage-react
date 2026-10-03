import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IEmloyeePostRequestApi,
  IEmloyeePutRequestApi,
  IEmloyeePutResponseApi,
  IEmployeeDeleteResponseApi,
  IEmployeeGetResponseApi,
  IEmployeesGetResponseApi,
} from "../../types/employee.api";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  tagTypes: ["Employee"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    headers: {
      "content-type": "application/json",
    },
  }),
  endpoints: (build) => {
    return {
      getEmployees: build.query<IEmployeesGetResponseApi, void>({
        query: () => ({ url: "/employees" }),
        providesTags: () => [{ type: "Employee", id: "LIST" }],
      }),
      getEmployeeById: build.query<IEmployeeGetResponseApi, string>({
        query: (id) => ({ url: `/employees/${id}` }),
      }),
      createEmployee: build.mutation({
        query: (payload: IEmloyeePostRequestApi) => ({
          url: "/employees",
          body: JSON.stringify(payload),
          method: "POST",
        }),
        invalidatesTags: () => [{ type: "Employee", id: "LIST" }],
      }),
      editEmployee: build.mutation<
        IEmloyeePutResponseApi,
        { id: string; payload: IEmloyeePutRequestApi }
      >({
        query: ({
          id,
          payload,
        }: {
          id: string;
          payload: IEmloyeePutRequestApi;
        }) => ({
          url: `/employees/${id}`,
          body: JSON.stringify(payload),
          method: "PUT",
        }),
        invalidatesTags: () => [{ type: "Employee", id: "LIST" }],
      }),
      deleteEmployee: build.mutation<IEmployeeDeleteResponseApi, string>({
        query: (id) => ({
          url: `/employees/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: () => [{ type: "Employee", id: "LIST" }],
      }),
    };
  },
});

// put id data

export const {
  useCreateEmployeeMutation,
  useGetEmployeesQuery,
  useEditEmployeeMutation,
  useGetEmployeeByIdQuery,
  useDeleteEmployeeMutation,
} = employeeApi;
