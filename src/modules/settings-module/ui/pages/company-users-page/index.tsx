import { useNavigate } from "react-router-dom";

import { useCompanyUsers } from "~/modules/settings-module/model/hooks/useCompanyUsers.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";
import UsersTable from "~/modules/settings-module/ui/tabels/users-table";
import ButtonUi from "~/common/ui/kit/button-ui";
import BackUi from "~/common/ui/kit/back-ui";

import light from "./styles/light.module.scss";
import UsersTableSkeleton from "~/modules/settings-module/ui/tabels/users-table/skeleton.tsx";

const CompanyUsersPage = () => {
  const navigate = useNavigate();

  const { loading, list, meta, page, handlePage } = useCompanyUsers();

  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.usersHeader}>
          <BackUi handleClick={() => navigate("/admin")} />
          <span className={light.headerTitle}>Manage users</span>
        </div>
        <div className={light.usersAdd}>
          <span className={light.addTitle}>Want to add a new one?</span>
          <div className={light.addControl}>
            <ButtonUi size="medium" onClick={() => navigate("/admin/invite/manual")}>
              <span className={light.controlAdd}>+</span>
              <span className={light.controlTitle}>Create user</span>
            </ButtonUi>
            <ButtonUi size="medium" onClick={() => navigate("/admin/invite/email")}>
              <span className={light.controlAdd}>+</span>
              <span className={light.controlTitle}>Invite via email</span>
            </ButtonUi>
            <ButtonUi size="medium" onClick={() => navigate("/admin/invite/excel")}>
              <span className={light.controlAdd}>+</span>
              <span className={light.controlTitle}>Invite via excel</span>
            </ButtonUi>
          </div>
        </div>
        {!loading && <UsersTable list={list} meta={meta!} page={page} handlePage={handlePage} />}
        {loading && <UsersTableSkeleton />}
      </ContainerLayout>
    </MainLayout>
  );
};

export default CompanyUsersPage;
