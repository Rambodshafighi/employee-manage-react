import { Button, Form, Input, InputNumber, Select } from "antd";
import { useGetDepartmentsQuery } from "../store/slice/department.slice";
import { useCreateEmployeeMutation } from "../store/slice/employee.slice";
import type { IEmloyeePostRequestApi } from "../types/employee.api";

function CreateEmployeeForm() {
  const [mutate] = useCreateEmployeeMutation();
  const { data: department } = useGetDepartmentsQuery();
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={mutate}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<IEmloyeePostRequestApi>
        label="firstname"
        name="firstName"
        rules={[{ required: true, message: "Please input your firstname!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<IEmloyeePostRequestApi>
        label="lastName"
        name="lastName"
        rules={[{ required: true, message: "Please input your lastname!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<IEmloyeePostRequestApi>
        label="phone"
        name="phone"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<IEmloyeePostRequestApi>
        label="position"
        name="position"
        rules={[{ required: true, message: "Please input your position!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<IEmloyeePostRequestApi>
        label="salary"
        name="salary"
        rules={[{ required: true, message: "Please input your salary!" }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item<IEmloyeePostRequestApi>
        label="department"
        name="department"
        rules={[{ required: true, message: "Please select your department!" }]}
      >
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

export default CreateEmployeeForm;
