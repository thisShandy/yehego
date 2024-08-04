import { useNavigate } from "react-router-dom";

import { useDepartmentOffice } from "~/modules/settings-module/model/hooks/useDepartmentOffice.ts";

import api from "~/modules/settings-module/model/api";

import BackUi from "~/common/ui/kit/back-ui";
import InputUi from "~/common/ui/kit/input-ui";
import ButtonUi from "~/common/ui/kit/button-ui";
import ContainerLayout from "~/common/ui/layouts/container-layout";

import light from "./styles/light.module.scss";

const AddDepartmentPage = () => {
  const navigate = useNavigate();

  const { loading, name, handleUpdate, handleSubmit } = useDepartmentOffice(api.company.createDepartment);

  return (
    <ContainerLayout>
      <div className={light.pageMargin} />
      <BackUi handleClick={() => navigate("/admin")} />
      <span className={light.pageTitle}>Add Department</span>
      <div className={light.pageForm}>
        <InputUi type="text" name="Department name" value={name} handleChange={handleUpdate} />
      </div>
      <div className={light.pageSubmit}>
        <ButtonUi loading={loading} disabled={name === ""} label="Save" onClick={handleSubmit} />
      </div>
    </ContainerLayout>
  );
};

export default AddDepartmentPage;
