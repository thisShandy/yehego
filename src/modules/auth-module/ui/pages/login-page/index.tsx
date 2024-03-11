import MainLayout from "~/common/ui/layouts/main-layout";
import AuthLayout from "~/modules/auth-module/ui/layouts/auth-layout";
import SideLayout from "~/modules/auth-module/ui/layouts/side-layout";

import InputUi from "~/common/ui/kit/input-ui";
import ButtonUi from "~/common/ui/kit/button-ui";
import SsoButton from "~/modules/auth-module/ui/components/sso-button";

import light from "./styles/light.module.scss";
import google from "~icons/sso/google.svg";
import microsoft from "~icons/sso/microsoft.svg";

const LoginPage = () => {
  return (
    <MainLayout background header={false}>
      <AuthLayout>
        <SideLayout>
          <span className={light.loginTitle}>Login</span>
          <div className={light.loginContent}>
            <div className={light.contentFields}>
              <InputUi
                type="email"
                name="Email"
                placeholder="user@email.com"
                value=""
                handleChange={(e) => console.log(e.target.value)}
              />
              <InputUi
                type="password"
                name="Password"
                placeholder="••••••••••"
                value=""
                handleChange={(e) => console.log(e.target.value)}
              />
              <div className={light.fieldsConfirm}>
                <ButtonUi label="Login" onClick={() => console.log("")} />
                <button
                  type="button"
                  className={light.confirmForgot}
                >
                  <span className={light.forgotTitle}>
                    Forgot your password?
                  </span>
                </button>
              </div>
            </div>
            <span className={light.contentDivider}>Or</span>
            <div className={light.contentSso}>
              <SsoButton
                icon={google}
                label="Continue with Google"
                onClick={() => console.log("")}
              />
              <SsoButton
                icon={microsoft}
                label="Continue with Microsoft"
                onClick={() => console.log("")}
              />
            </div>
          </div>
        </SideLayout>
        <div className={light.welcomeContainer}>
          <div className={light.welcomeIcon}>
            <span className={light.iconTitle}>Y</span>
          </div>
          <div className={light.welcomeInfo}>
            <span className={light.infoTitle}>Welcome to Yehego!</span>
            <span className={light.infoDescription}>Pease login to start booking your next business trip</span>
          </div>
        </div>
      </AuthLayout>
    </MainLayout>
  );
};

export default LoginPage;
