import { useInvite } from "~/modules/auth-module/model/hooks/useInvite.ts";

import ContainerLayout from "~/common/ui/layouts/container-layout";
import FormSection from "~/common/ui/sections/form-section";

import light from "./styles/light.module.scss";

const InvitePage = () => {
  const { loading, form, handleSubmit } = useInvite();

  return (
    <ContainerLayout>
      <div className={light.inviteContainer}>
        <span className={light.inviteTitle}>Welcome to Yehego</span>
        <span className={light.inviteDescription}>
          To get started, please finish the registration of your account by providing the information below
        </span>
        <FormSection
          formName=""
          formConfig={form}
          submitLabel="Create account"
          message="Account has been created"
          submit={handleSubmit}
        />
      </div>
    </ContainerLayout>
  );
};

export default InvitePage;
