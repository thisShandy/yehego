import { useProfileEdit } from "~/modules/settings-module/model/hooks/useProfileEdit.ts";

import api from "~/common/model/api";

import MainLayout from "~/common/ui/layouts/main-layout";
import FormSection from "~/common/ui/sections/form-section";
import BackUi from "~/common/ui/kit/back-ui";

import light from "./styles/light.module.scss";

const ProfileEditPage = () => {
  const {
    loading,
    userConfig
  } = useProfileEdit();

  if (loading) {
    return null;
  }

  return (
    <MainLayout header={false}>
      <div className={light.backWrapper}>
        <div className={`container ${light.backContainer}`}>
          <BackUi
            handleClick={() => window.location = "https://app-staging.yehego.com/profile" as unknown as Location}
          />
        </div>
      </div>
      <FormSection
        formName="Edit profile"
        formConfig={userConfig}
        submitLabel="Update"
        submit={api.user.updateUser}
      />
    </MainLayout>
  );
};

export default ProfileEditPage;
