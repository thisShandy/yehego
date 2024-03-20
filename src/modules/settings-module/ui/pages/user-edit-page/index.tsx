import { useParams } from "react-router-dom";

import { useUserEdit } from "~/modules/settings-module/model/hooks/useUserEdit.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import FormSection from "~/common/ui/sections/form-section";
import BackUi from "~/common/ui/kit/back-ui";
import ListLayout from "~/modules/settings-module/ui/layouts/list-layout";
import Loyalty from "~/modules/settings-module/ui/components/loyalty";

import light from "./styles/light.module.scss";

const UserEditPage = () => {
  const { userId } = useParams();

  const {
    loading,
    user,
    loyalties,
    roleConfig,
    userConfig,
    updateRole,
    updateUser
  } = useUserEdit(userId);

  if (loading || !userId) {
    return null;
  }

  return (
    <MainLayout header={false}>
      <div className={light.userWrapper}>
        <div className={`container ${light.userContainer}`}>
          <BackUi
            handleClick={() => window.location = "https://app-staging.yehego.com/admin" as unknown as Location}
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
        submit={(data: any) => updateRole(userId, data)}
      />
      <FormSection
        formName="Edit user"
        formConfig={userConfig}
        submitLabel="Update"
        submit={(data: any) => updateUser(userId, { ...data, role: user?.role })}
      />
      <ListLayout
        title="Loyalty programs"
        handleAdd={() => console.log("")}
      >
        {loyalties.map(loyalty => (
          <Loyalty
            title={loyalty.attributes.loyalty.name}
            description={loyalty.attributes.loyalty.airline_name}
            number={loyalty.attributes.number}
            handleDelete={() => console.log("")}
          />
        ))}
      </ListLayout>
      <div className={light.userSpace} />
    </MainLayout>
  );
};

export default UserEditPage;
