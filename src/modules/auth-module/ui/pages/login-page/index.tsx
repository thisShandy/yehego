import { useLogin } from "~/modules/auth-module/model/hooks/useLogin.ts";

import { unauthorizedGuard } from "~/common/lib/helpers/guards/unauthorizedGuard.tsx";

import MainLayout from "~/common/ui/layouts/main-layout";
import AuthLayout from "~/modules/auth-module/ui/layouts/auth-layout";
import SideLayout from "~/modules/auth-module/ui/layouts/side-layout";

import ButtonUi from "~/common/ui/kit/button-ui";
import AuthInput from "~/modules/auth-module/ui/components/auth-input";
import SsoButton from "~/modules/auth-module/ui/components/sso-button";

import light from "./styles/light.module.scss";
import google from "~icons/sso/google.svg";
import microsoft from "~icons/sso/microsoft.svg";

const LoginPage = () => {
  const { form, handleUpdate, handleLogin, loading, error } = useLogin();

  return (
    <MainLayout background header={false}>
      <AuthLayout>
        <SideLayout>
          <span className={light.loginTitle}>Login</span>
          <div className={light.loginContent}>
            <div className={light.contentFields}>
              <AuthInput
                type="email"
                name="Email"
                placeholder="user@email.com"
                error={error}
                value={form.email}
                handleChange={(e) => handleUpdate("email", e)}
              />
              <AuthInput
                type="password"
                name="Password"
                placeholder="••••••••••"
                error={error}
                value={form.password}
                handleChange={(e) => handleUpdate("password", e)}
              />
              <div className={light.fieldsConfirm}>
                {error && <span className={light.conformError}>Incorrect login or password</span>}
                <ButtonUi
                  loading={loading}
                  disabled={form.email === "" || form.password === ""}
                  label="Login"
                  onClick={handleLogin}
                />
                <button type="button" className={light.confirmForgot}>
                  <span className={light.forgotTitle}>Forgot your password?</span>
                </button>
              </div>
            </div>
            <span className={light.contentDivider}>Or</span>
            <div className={light.contentSso}>
              <SsoButton icon={google} label="Continue with Google" onClick={() => console.log("")} />
              <SsoButton icon={microsoft} label="Continue with Microsoft" onClick={() => console.log("")} />
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

const LoginPageGuard = unauthorizedGuard(LoginPage);

export default LoginPageGuard;
