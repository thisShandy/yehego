import { useParams } from "react-router-dom";

import { useUserEdit } from "~/modules/settings-module/model/hooks/useUserEdit.ts";

import api from "~/common/model/api";

import MainLayout from "~/common/ui/layouts/main-layout";
import FormSection from "~/common/ui/sections/form-section";
import BackUi from "~/common/ui/kit/back-ui";

import light from "./styles/light.module.scss";
import ListLayout from "~/modules/settings-module/ui/layouts/list-layout";
import Loyalty from "~/modules/settings-module/ui/components/loyalty";

const UserEditPage = () => {
  const { userId } = useParams();

  const {
    loading,
    user,
    roleConfig,
    userConfig
  } = useUserEdit(userId);

  if (loading) {
    return null;
  }

  return (
    <MainLayout header={false}>
      <div className={light.userWrapper}>
        <div className={`container ${light.userContainer}`}>
          <BackUi
            handleClick={() => window.location = "https://app-staging.yehego.com/profile" as unknown as Location}
          />
          <div className={light.userInfo}>
            <span className={light.userInfo}>
              {`${user?.firstname} ${user?.lastname}`}
            </span>
            <span className={light.userEmail}>
              {user?.email}
            </span>
          </div>
        </div>
      </div>
      <FormSection
        formName="Change role"
        formConfig={roleConfig}
        submitLabel="Update"
        submit={api.user.updateUser}
      />
      <FormSection
        formName="Edit user"
        formConfig={userConfig}
        submitLabel="Update"
        submit={api.user.updateUser}
      />
      <ListLayout
        title="Loyalty programs"
        handleAdd={() => console.log("")}
      >
        <Loyalty
          title="Voyager"
          description="SA AIRLINK DBA SOUTH AFRICAN AIRLINK"
          number="523432432"
          handleDelete={() => console.log("")}
        />
        <Loyalty
          title="Airplane"
          description="Great Britain SAS"
          number="893243"
          handleDelete={() => console.log("")}
        />
        <Loyalty
          title="Stark Light"
          description="Norwegian Air International"
          number="23454095234"
          handleDelete={() => console.log("")}
        />
      </ListLayout>
      <div className={light.userSpace} />
    </MainLayout>
  );
};

export default UserEditPage;
