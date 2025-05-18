import Intro from "../features/roles/Intro";
import RolesHeader from "../features/roles/RolesHeader";
import RolesTable from "../features/roles/RolesTable";

const Roles = () => {
  return (
    <div className="p-6">
      <Intro />
      <RolesHeader />
      <RolesTable />
    </div>
  );
};

export default Roles;
