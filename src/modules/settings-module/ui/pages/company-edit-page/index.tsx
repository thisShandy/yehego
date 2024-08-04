import { useNavigate } from "react-router-dom";

import { useCompanyEdit } from "~/modules/settings-module/model/hooks/useCompanyEdit.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import FormSection from "~/common/ui/sections/form-section";
import BackUi from "~/common/ui/kit/back-ui";

import light from "./styles/light.module.scss";

const CompanyEditPage = () => {
  const navigate = useNavigate();
  const { loading, companyConfig, handleUpdate } = useCompanyEdit();

  if (loading) return null;

  return (
    <MainLayout header={false}>
      <div className={light.companyWrapper}>
        <div className={`container ${light.companyContainer}`}>
          <BackUi handleClick={() => navigate("/admin")} />
        </div>
      </div>
      <FormSection
        formName="Edit company"
        formConfig={companyConfig}
        submitLabel="Update"
        submit={async (data: any) => await handleUpdate(data)}
      />
    </MainLayout>
  );
};

export default CompanyEditPage;
