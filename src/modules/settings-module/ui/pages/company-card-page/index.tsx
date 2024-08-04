import { useNavigate } from "react-router-dom";

import { useCreditCard } from "~/modules/settings-module/model/hooks/useCreditCard.ts";

import api from "~/common/model/api";

import CardFormSection from "~/modules/settings-module/ui/sections/card-form-section";
import ButtonUi from "~/common/ui/kit/button-ui";
import BackUi from "~/common/ui/kit/back-ui";

import light from "./styles/light.module.scss";

const CompanyCardPage = () => {
  const navigate = useNavigate();
  const { loading, form, errors, handleUpdate, handleSubmit } = useCreditCard(api.card.createCompanyCard);

  return (
    <div className={light.cardWrapper}>
      <div className={`container ${light.cardContainer}`}>
        <BackUi handleClick={() => navigate("/admin")} />
        <span className={light.cardTitle}>Add Credit Card</span>
        <div className={light.cardForm}>
          <CardFormSection form={form} errors={errors} handleUpdate={handleUpdate} />
        </div>
        <div className={light.cardSubmit}>
          <ButtonUi loading={loading} label="Save" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CompanyCardPage;
