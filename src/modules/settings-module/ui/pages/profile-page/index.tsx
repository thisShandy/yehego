import type { ICard } from "~/common/lib/types/system/card.type.ts";

import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { parsePhoneNumber } from "libphonenumber-js";

import { useFetch } from "~/common/model/hooks/helpers/useFetch.ts";

import { userState } from "~/common/model/recoil/user.ts";

import { genders } from "~/common/lib/configs/user/genders.ts";
import { USER_CARD__PATH } from "~/common/model/api/user/path.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";
import ListLayout from "~/modules/settings-module/ui/layouts/list-layout";
import InfoSection from "~/modules/settings-module/ui/sections/info-section";
import ButtonUi from "~/common/ui/kit/button-ui";
import Card from "~/modules/settings-module/ui/components/card";

import light from "./styles/light.module.scss";
import edit from "~icons/control/edit.svg";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const {
    loading: cardsLoading,
    data: cards,
  } = useFetch<ICard[]>(USER_CARD__PATH, []);

  if (!user) return null;

  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.profileHeader}>
          <span className={light.headerTitle}>
            {user?.firstname} {user?.lastname}
          </span>
          <div className={light.headerEdit}>
            <ButtonUi
              onClick={() => navigate("/profile/edit")}
            >
              <img className={light.editIcon} src={edit} alt="edit"/>
            </ButtonUi>
          </div>
        </div>
        <div className={light.profileInfo}>
          <InfoSection
            name="Contacts"
            data={[
              { name: "Email", value: `${user?.firstname} ${user?.lastname}` || "-" },
              { name: "Gender", value: genders.find(el => el.key === user?.sex)!.value || "-" },
              { name: "Email", value: user?.company.email || "-" },
              { name: "Phone", value: user?.phone ? parsePhoneNumber(`+${Number(user?.phone)}`).formatInternational() : "-" },
              { name: "Uniq ID", value: user?.uniq_id || "-" }
            ]}
          />
          <InfoSection
            name="Address"
            data={[
              { name: "Country", value: user.address.country || "-" },
              { name: "City", value: user.address.city || "-" },
              { name: "Postcode", value: user?.address.postcode || "-" },
              { name: "Street", value: user.address.street || "-" },
              { name: "Additional info", value: user?.address.street2 || "-" }
            ]}
          />
          <InfoSection
            name="Additional info"
            data={[
              { name: "Office", value: user.office.name || "-" },
              { name: "Department", value: user.department.name || "-" }
            ]}
          />
        </div>
        <div className={light.profileAddition}>
          <ListLayout
            title="Credit Cards"
            empty={!cards.length}
            handleAdd={() => navigate("/admin/card")}
            emptyTitle="There aren't any credit cards"
          >
            {!cardsLoading && cards.map(item => (
              <Card
                key={item.id}
                id={item.id}
                number={item.maskedNumber}
                holder={`${item.name} ${item.lastName}`}
                handleDelete={() => console.log("delete")}
              />
            ))}
          </ListLayout>
          <ListLayout
            title="Travel Docuements"
            empty={true}
            handleAdd={() => console.log("add")}
            emptyTitle="There aren't any travel documents"
          >
          </ListLayout>
          <ListLayout
            title="Loyalty Programs"
            empty={true}
            handleAdd={() => console.log("add")}
            emptyTitle="There aren't any loualty programs"
          >
          </ListLayout>
          <div className={light.additionReset}>
            <ButtonUi label="Reset passowrd" onClick={() => console.log("Hello")} />
          </div>
        </div>
      </ContainerLayout>
    </MainLayout>
  );
};

export default ProfilePage;
