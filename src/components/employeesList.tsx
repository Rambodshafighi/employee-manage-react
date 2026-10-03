import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Alert, Button, Listy, Spin } from "antd";
import { Link } from "react-router";
import {
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
} from "../store/slice/employee.slice";
import type { IEmployee } from "../types/employee";

function EmployeesList() {
  const { data: employees, isLoading, isError } = useGetEmployeesQuery();
  const [mutate] = useDeleteEmployeeMutation();
  if (isLoading) {
    return <Spin description="Loading" size="small" />;
  }
  if (isError) {
    return <Alert title={"Error"} type="error" />;
  }
  return (
    <Listy<IEmployee>
      items={employees?.data}
      height={400}
      rowKey="_id"
      itemRender={(item) => (
        <div className="flex items-center justify-between">
          <div>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to={`/employee/edit/${item._id}`}>
              <Button type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => mutate(item._id)} type="default">
              <DeleteOutlined />
            </Button>
          </div>
        </div>
      )}
    />
  );
}

// employee/edit/1

export default EmployeesList;
