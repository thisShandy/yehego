import { useNavigate } from "react-router-dom";

import { useEmailInvite } from "~/modules/settings-module/model/hooks/useEmailInvite.ts";

import BackUi from "~/common/ui/kit/back-ui";
import InputUi from "~/common/ui/kit/input-ui";
import ButtonUi from "~/common/ui/kit/button-ui";
import ContainerLayout from "~/common/ui/layouts/container-layout";

import light from "./styles/light.module.scss";

const EmailInvitePage = () => {
  const navigate = useNavigate();

  const { loading, form, errors, handleUpdate, handleSubmit } = useEmailInvite();

  return (
    <ContainerLayout>
      <div className={light.pageMargin} />
      <BackUi handleClick={() => navigate("/admin/users")} />
      <span className={light.pageTitle}>Invite via Email</span>
      <div className={light.pageForm}>
        <div className={light.formGrid}>
          <InputUi
            type="text"
            name="Email"
            value={form.email_1}
            error={errors.email_1}
            handleChange={(e) => handleUpdate("email_1", e)}
          />
          <InputUi
            type="text"
            name="Email"
            value={form.email_2}
            error={errors.email_2}
            handleChange={(e) => handleUpdate("email_2", e)}
          />
          <InputUi
            type="text"
            name="Email"
            value={form.email_3}
            error={errors.email_3}
            handleChange={(e) => handleUpdate("email_3", e)}
          />
          <InputUi
            type="text"
            name="Email"
            value={form.email_4}
            error={errors.email_4}
            handleChange={(e) => handleUpdate("email_4", e)}
          />
        </div>
      </div>
      <div className={light.pageSubmit}>
        <ButtonUi loading={loading} label="Invite" onClick={handleSubmit} />
      </div>
    </ContainerLayout>
  );
};

export default EmailInvitePage;
