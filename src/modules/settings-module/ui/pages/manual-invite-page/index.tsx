import { useNavigate } from "react-router-dom";

import { useManualInvite } from "~/modules/settings-module/model/hooks/useManualInvite.ts";

import BackUi from "~/common/ui/kit/back-ui";
import FormSection from "~/common/ui/sections/form-section";
import ContainerLayout from "~/common/ui/layouts/container-layout";

import light from "./styles/light.module.scss";

const ManualInvitePage = () => {
  const navigate = useNavigate();

  const { userConfig, handleSubmit } = useManualInvite();

  return (
    <>
      <ContainerLayout>
        <div className={light.pageMargin} />
        <BackUi handleClick={() => navigate("/admin/users")} />
      </ContainerLayout>
      <div>
        <FormSection
          formName="Create user"
          formConfig={userConfig}
          submitLabel="Create"
          message="User successfully created"
          submit={handleSubmit}
        />
      </div>
    </>
  );
};

export default ManualInvitePage;
