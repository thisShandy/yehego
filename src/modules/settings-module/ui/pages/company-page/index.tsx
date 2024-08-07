import type { ICard } from "~/common/lib/types/system/card.type.ts";
import type { IOffice } from "~/common/lib/types/company/office.type.ts";
import type { IDepartment } from "~/common/lib/types/company/department.type.ts";

import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { parsePhoneNumber } from "libphonenumber-js";

import { useFetch } from "~/common/model/hooks/helpers/useFetch.ts";
import { useCompanyCard } from "~/common/model/hooks/cards/useCompanyCard.ts";
import { useProvider } from "~/modules/settings-module/model/hooks/useProvider.ts";
import { useDepartmentOffice } from "~/modules/settings-module/model/hooks/useDepartmentOffice.ts";

import { userState } from "~/common/model/recoil/user.ts";

import { COMPANY_CARD__PATH } from "~/common/model/api/card/path.ts";
import { OFFICES__PATH, DEPARTMENTS__PATH } from "~/common/model/api/company/path.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import ListLayout from "~/modules/settings-module/ui/layouts/list-layout";
import InfoSection from "~/modules/settings-module/ui/sections/info-section";
import Card from "~/modules/settings-module/ui/components/card";
import Group from "~/modules/settings-module/ui/components/group";
import ButtonUi from "~/common/ui/kit/button-ui";
import Skeleton from "~/modules/settings-module/ui/pages/company-page/skeleton.tsx";

import light from "./styles/light.module.scss";
import edit from "~icons/control/edit.svg";

const CompanyPage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const { loading: deleteCardLoading, handleDeleteCard } = useCompanyCard();
  const { loading: deleteDepartmentOfficeLoading, handleDelete } = useDepartmentOffice();

  const { loading: cardsLoading, data: cards } = useFetch<ICard[]>(COMPANY_CARD__PATH, [], [deleteCardLoading]);
  const { loading: officesLoading, data: offices } = useFetch<IOffice[]>(
    OFFICES__PATH,
    [],
    [deleteDepartmentOfficeLoading]
  );
  const { loading: departmentsLoading, data: departments } = useFetch<IDepartment[]>(
    DEPARTMENTS__PATH,
    [],
    [deleteDepartmentOfficeLoading]
  );
  const { loading: providersLoading, providers, handleDelete: handleDeleteProvider } = useProvider(true);

  if (deleteCardLoading || cardsLoading || officesLoading || departmentsLoading) return <Skeleton />;

  return (
    <MainLayout>
      <div className={light.companyWrapper}>
        <div className={`container ${light.companyContainer}`}>
          <div className={light.companyHeader}>
            <div className={light.headerInfo}>
              <div className={light.infoContainer}>
                <span className={light.infoTitle}>{user?.company.name}</span>
                <span className={light.infoTax}>{user?.company.tax_id}</span>
              </div>
              <div className={light.infoEdit}>
                <ButtonUi onClick={() => navigate("/admin/edit")}>
                  <img className={light.editIcon} src={edit} alt="edit" />
                </ButtonUi>
              </div>
            </div>
            <div className={light.headerUsers}>
              <div className={light.usersManage}>
                <ButtonUi label="Manage users" onClick={() => navigate("/admin/users")} />
              </div>
              <div className={light.usersEdit}>
                <ButtonUi onClick={() => navigate("/admin/edit")}>
                  <img className={light.editIcon} src={edit} alt="edit" />
                </ButtonUi>
              </div>
            </div>
          </div>
          <div className={light.companyContent}>
            <InfoSection
              name="Contacts"
              data={[
                { name: "Company Name", value: user?.company.name || "-" },
                { name: "Contact Person", value: user?.company.contact_person || "-" },
                { name: "Email", value: user?.company.email || "-" },
                {
                  name: "Phone",
                  value: user?.company.contact_phone
                    ? parsePhoneNumber(`+${Number(user.company.contact_phone)}`).formatInternational()
                    : "-"
                }
              ]}
            />
            <InfoSection
              name="Address"
              data={[
                { name: "Street", value: user?.company.address.street || "-" },
                { name: "Zip Code", value: user?.company.address.postcode || "-" },
                { name: "City", value: user?.company.address.city || "-" },
                { name: "Country", value: user?.company.address.country || "-" }
              ]}
            />
            <InfoSection
              name="Additional Info"
              data={[
                { name: "Currency", value: user?.company.currency || "-" },
                { name: "Language", value: user?.company.language.toUpperCase() || "-" },
                { name: "Time Format", value: user?.company.time_format || "-" }
              ]}
            />
          </div>
          <ListLayout
            title="Credit Cards"
            empty={!cards.length}
            handleAdd={() => navigate("/admin/card")}
            emptyTitle="There aren't any credit cards"
          >
            {!cardsLoading &&
              cards.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  number={item.maskedNumber}
                  holder={`${item.name} ${item.lastName}`}
                  handleDelete={handleDeleteCard}
                />
              ))}
          </ListLayout>
          <ListLayout
            title="Offices"
            empty={!offices.length}
            handleAdd={() => navigate("/admin/office/add")}
            emptyTitle="There aren't any offices"
          >
            {!officesLoading &&
              offices.map((item) => (
                <Group
                  key={item.id}
                  id={item.id.toString()}
                  name={item.name}
                  handleDelete={(id) => handleDelete("office", id)}
                />
              ))}
          </ListLayout>
          <ListLayout
            title="Departments"
            empty={!departments.length}
            handleAdd={() => navigate("/admin/department/add")}
            emptyTitle="There aren't any departments"
          >
            {!departmentsLoading &&
              departments.map((item) => (
                <Group
                  key={item.id}
                  id={item.id.toString()}
                  name={item.name}
                  handleDelete={(id) => handleDelete("department", id)}
                />
              ))}
          </ListLayout>
          <ListLayout
            title="Service Providers"
            empty={!providers.length}
            handleAdd={() => navigate("/admin/provider/add")}
            emptyTitle="There aren't any service providers"
          >
            {!providersLoading &&
              providers.map((item) => (
                <Group
                  key={item.id}
                  id={item.id}
                  name={`${item.provider} | Customer ID: ${item.customer_id} | Contract ID: ${item.contract_id}`}
                  handleDelete={handleDeleteProvider}
                />
              ))}
          </ListLayout>
        </div>
      </div>
    </MainLayout>
  );
};

export default CompanyPage;
