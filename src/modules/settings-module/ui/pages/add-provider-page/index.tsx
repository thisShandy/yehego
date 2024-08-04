import { useNavigate } from "react-router-dom";

import { useProvider } from "~/modules/settings-module/model/hooks/useProvider.ts";

import { providersList } from "~/modules/settings-module/lib/configs/providers-list.ts";

import BackUi from "~/common/ui/kit/back-ui";
import InputUi from "~/common/ui/kit/input-ui";
import ButtonUi from "~/common/ui/kit/button-ui";
import DropdownUi from "~/common/ui/kit/dropdown-ui";
import ContainerLayout from "~/common/ui/layouts/container-layout";

import light from "./styles/light.module.scss";

const AddProviderPage = () => {
  const navigate = useNavigate();

  const { loading, form, errors, globalError, handleUpdate, handleSubmit } = useProvider();

  return (
    <ContainerLayout>
      <div className={light.pageMargin} />
      <BackUi handleClick={() => navigate("/admin")} />
      <span className={light.pageTitle}>Add Provider</span>
      <div className={light.pageForm}>
        <div className={light.formGrid}>
          <div className={light.gridRow}>
            <DropdownUi
              name="Provider type"
              value={form.provider}
              error={errors.provider}
              config={providersList.map((provider) => ({ key: provider.name, value: provider.name }))}
              handleChange={(value: string) => handleUpdate("provider", value)}
            />
          </div>
          <InputUi
            type="text"
            name="Customer ID"
            value={form.customer_id}
            error={errors.customer_id}
            handleChange={(e) => {
              const value = e.target.value;
              handleUpdate("customer_id", value);
            }}
          />
          <InputUi
            type="text"
            name="Contract ID"
            value={form.contract_id}
            error={errors.contract_id}
            handleChange={(e) => {
              const value = e.target.value;
              handleUpdate("contract_id", value);
            }}
          />
        </div>
      </div>
      <div className={light.pageSubmit}>
        <ButtonUi
          loading={loading}
          disabled={form.contract_id === "" || form.customer_id === ""}
          label="Save"
          onClick={handleSubmit}
        />
        {globalError && <span className={light.submitError}>{globalError}</span>}
      </div>
    </ContainerLayout>
  );
};

export default AddProviderPage;
