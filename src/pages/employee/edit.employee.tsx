import { useParams } from "react-router";
import EditEmployeeForm from "../../components/editEmployeeForm";

function EditEmployee() {
  const { id } = useParams();
  if (!id) {
    return;
  }
  return (
    <div>
      <EditEmployeeForm id={id} />
    </div>
  );
}

export default EditEmployee;
