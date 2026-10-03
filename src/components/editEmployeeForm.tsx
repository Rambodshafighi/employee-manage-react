import { Button, Form, Input, InputNumber, Select, Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useGetDepartmentsQuery } from "../store/slice/department.slice";
import {
  useEditEmployeeMutation,
  useGetEmployeeByIdQuery,
} from "../store/slice/employee.slice";
import type { IEmloyeePostRequestApi } from "../types/employee.api";

function EditEmployeeForm({ id }: { id: string }) {
  const [mutate, edit] = useEditEmployeeMutation();
  const { data: department } = useGetDepartmentsQuery();
  const { data: employee, isLoading } = useGetEmployeeByIdQuery(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (edit.isSuccess) {
      navigate("/");
    }
  }, [edit.isSuccess, navigate]);
  if (isLoading) {
    return <Spin description="Loading" size="small" />;
  }
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={(ev) => mutate({ id, payload: ev })}
      autoComplete="off"
      initialValues={{
        firstName: employee?.data.firstName,
        lastName: employee?.data.lastName,
        phone: employee?.data.phone,
        position: employee?.data.position,
        salary: employee?.data.salary,
        department: employee?.data.department._id,
      }}
    >
      <Form.Item<IEmloyeePostRequestApi> label="firstname" name="firstName">
        <Input />
      </Form.Item>
      <Form.Item<IEmloyeePostRequestApi> label="lastName" name="lastName">
        <Input />
      </Form.Item>

      <Form.Item<IEmloyeePostRequestApi> label="phone" name="phone">
        <Input />
      </Form.Item>
      <Form.Item<IEmloyeePostRequestApi> label="position" name="position">
        <Input />
      </Form.Item>
      <Form.Item<IEmloyeePostRequestApi> label="salary" name="salary">
        <InputNumber />
      </Form.Item>
      <Form.Item<IEmloyeePostRequestApi> label="department" name="department">
        <Select
          options={department?.data.map((d) => ({
            value: d._id,
            label: d.name,
          }))}
        />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditEmployeeForm;
