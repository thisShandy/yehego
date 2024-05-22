import { useProfileEdit } from "~/modules/settings-module/model/hooks/useProfileEdit.ts";

import api from "~/common/model/api";

import MainLayout from "~/common/ui/layouts/main-layout";
import FormSection from "~/common/ui/sections/form-section";
import BackUi from "~/common/ui/kit/back-ui";

import light from "./styles/light.module.scss";
import {useNavigate} from "react-router-dom";

const ProfileEditPage = () => {
  const navigate = useNavigate();

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
            handleClick={() => navigate("/profile")}
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
