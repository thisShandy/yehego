import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { useLoyalty } from "~/modules/settings-module/model/hooks/useLoyalty.ts";

import { providersList } from "~/modules/settings-module/lib/configs/providers-list.ts";
import { userState } from "~/common/model/recoil/user.ts";

import BackUi from "~/common/ui/kit/back-ui";
import InputUi from "~/common/ui/kit/input-ui";
import ButtonUi from "~/common/ui/kit/button-ui";
import DropdownUi from "~/common/ui/kit/dropdown-ui";
import ContainerLayout from "~/common/ui/layouts/container-layout";

import light from "./styles/light.module.scss";

const AddProviderPage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const { loading, form, errors, loyalties, handleUpdate, handleSubmit } = useLoyalty(user?.uuid);

  return (
    <ContainerLayout>
      <div className={light.pageMargin} />
      <BackUi handleClick={() => navigate("/profile")} />
      <span className={light.pageTitle}>Add Loyalty</span>
      <div className={light.pageForm}>
        <div className={light.formGrid}>
          <DropdownUi
            name="Airline & Program name"
            value={form.loyalty_uuid}
            error={errors.loyalty_uuid}
            config={loyalties.map((loyalty) => ({
              key: loyalty.id,
              value: `${loyalty.attributes.name} ${loyalty.attributes.airline_name}`
            }))}
            handleChange={(value: string) => handleUpdate("loyalty_uuid", value)}
          />
          <InputUi
            type="text"
            name="Loyalty Card"
            value={form.number}
            error={errors.number}
            handleChange={(e) => {
              const value = e.target.value;
              handleUpdate("number", value);
            }}
          />
        </div>
      </div>
      <div className={light.pageSubmit}>
        <ButtonUi loading={loading} label="Save" onClick={handleSubmit} />
      </div>
    </ContainerLayout>
  );
};

export default AddProviderPage;
