import type { ICard } from "~/common/lib/types/system/card.type.ts";
import type { IOffice } from "~/common/lib/types/company/office.type.ts";
import type { IDepartment } from "~/common/lib/types/company/department.type.ts";

import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { useFetch} from "~/common/model/hooks/helpers/useFetch.ts";

import { userState } from "~/common/model/recoil/user.ts";

import { COMPANY_CARD__PATH } from "~/common/model/api/card/path.ts";
import { OFFICES__PATH, DEPARTMENTS__PATH } from "~/common/model/api/company/path.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import ListLayout from "~/modules/settings-module/ui/layouts/list-layout";
import InfoSection from "~/modules/settings-module/ui/sections/info-section";
import Card from "~/modules/settings-module/ui/components/card";
import Group from "~/modules/settings-module/ui/components/group";
import ButtonUi from "~/common/ui/kit/button-ui";

import light from "./styles/light.module.scss";
import {parsePhoneNumber} from "libphonenumber-js";

const CompanyPage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const {
    loading: cardsLoading,
    data: cards,
  } = useFetch<ICard[]>(COMPANY_CARD__PATH, []);

  const {
    loading: officesLoading,
    data: offices
  } = useFetch<IOffice[]>(OFFICES__PATH, []);

  const {
    loading: departmentsLoading,
    data: departments
  } = useFetch<IDepartment[]>(DEPARTMENTS__PATH, []);

  return (
    <MainLayout>
      <div className={light.companyWrapper}>
        <div className={`container ${light.companyContainer}`}>
          <div className={light.companyHeader}>
            <div className={light.headerInfo}>
              <span className={light.infoTitle}>
                {user?.company.name}
              </span>
              <span className={light.infoTax}>
                {user?.company.tax_id}
              </span>
            </div>
            <div className={light.headerUsers}>
              <ButtonUi
                label="Edit"
                onClick={() => navigate("/admin/edit")}
              />
            </div>
          </div>
          <div className={light.companyContent}>
            <InfoSection
              name="Contacts"
              data={[
                { name: "Company Name", value: user?.company.name || "-" },
                { name: "Contact Person", value: user?.company.contact_person || "-" },
                { name: "Email", value: user?.company.email || "-" },
                { name: "Phone", value: user?.company.contact_phone ? parsePhoneNumber(`+${user.company.contact_phone}`).formatInternational() : "-" }
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
            {!cardsLoading && cards.map(item => (
              <Card
                key={item.id}
                number={item.maskedNumber}
                holder={`${item.name} ${item.lastName}`}
              />
            ))}
          </ListLayout>
          <ListLayout
            title="Offices"
            empty={!offices.length}
            handleAdd={() => console.log("add")}
            emptyTitle="There aren't any offices"
          >
            {!officesLoading && offices.map(item => (
              <Group
                key={item.id}
                name={item.name}
              />
            ))}
          </ListLayout>
          <ListLayout
            title="Departments"
            empty={!departments.length}
            handleAdd={() => console.log("add")}
            emptyTitle="There aren't any departments"
          >
            {!departmentsLoading && departments.map(item => (
              <Group
                key={item.id}
                name={item.name}
              />
            ))}
          </ListLayout>
          <ListLayout
            title="Service Providers"
            empty={true}
            handleAdd={() => console.log("add")}
            emptyTitle="There aren't any service providers"
          >
          </ListLayout>
        </div>
      </div>
    </MainLayout>
  );
};

export default CompanyPage;
