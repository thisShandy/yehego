import { useNavigate } from "react-router-dom";

import { useExcelInvite } from "~/modules/settings-module/model/hooks/useExcelInvite.ts";

import BackUi from "~/common/ui/kit/back-ui";
import ButtonUi from "~/common/ui/kit/button-ui";
import ContainerLayout from "~/common/ui/layouts/container-layout";

import light from "./styles/light.module.scss";

const ExcelInvitePage = () => {
  const navigate = useNavigate();

  const { loading, file, handleSelect, handleSubmit } = useExcelInvite();

  return (
    <ContainerLayout>
      <div className={light.pageMargin} />
      <BackUi handleClick={() => navigate("/admin/users")} />
      <span className={light.pageTitle}>Invite via Excel</span>
      <span className={light.pageDescription}>The file must contain a column called “email”</span>
      <div className={light.pageForm}>
        <input
          id="excel_picker"
          type="file"
          accept=".csv, .xlsx"
          onChange={handleSelect}
          style={{
            display: "none"
          }}
        />
        <label htmlFor="excel_picker" className={light.formPicker}>
          {file?.name || "Select file"}
        </label>
      </div>
      <div className={light.pageSubmit}>
        <ButtonUi loading={loading} label="Invite" onClick={handleSubmit} />
      </div>
    </ContainerLayout>
  );
};

export default ExcelInvitePage;
