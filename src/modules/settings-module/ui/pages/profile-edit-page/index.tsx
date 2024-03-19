import { useProfileEdit } from "~/modules/settings-module/model/hooks/useProfileEdit.ts";

import api from "~/common/model/api";

import MainLayout from "~/common/ui/layouts/main-layout";
import FormSection from "~/common/ui/sections/form-section";

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
