import { useRecoilValue } from "recoil";

import { useCompanyEdit } from "~/modules/settings-module/model/hooks/useCompanyEdit.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import FormSection from "~/common/ui/sections/form-section";
import BackUi from "~/common/ui/kit/back-ui";

import { userState } from "~/common/model/recoil/user.ts";

import light from "./styles/light.module.scss";

const CompanyEditPage = () => {
  const user = useRecoilValue(userState);
  const {
    loading,
    companyConfig,
    handleUpdate
  } = useCompanyEdit();

  if (loading) return null;

  return (
    <MainLayout header={false}>
      <div className={light.companyWrapper}>
        <div className={`container ${light.companyContainer}`}>
          <BackUi
            handleClick={() => window.location = "https://app-staging.yehego.com/admin" as unknown as Location}
          />
          <div className={light.companyInfo}>
            <span className={light.companyInfo}>
              {user?.company.name}
            </span>
            <span className={light.companyEmail}>
              {user?.company.tax_id}
            </span>
          </div>
        </div>
      </div>
      <FormSection
        formName="Edit company"
        formConfig={companyConfig}
        submitLabel="Update"
        submit={async (data: any) =>  await handleUpdate(data)}
      />
    </MainLayout>
  );
};

export default CompanyEditPage;
