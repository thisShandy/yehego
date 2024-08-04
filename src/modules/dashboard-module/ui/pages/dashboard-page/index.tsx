// @ts-nocheck
import { useDashboard } from "~/modules/dashboard-module/model/hooks/useDashboard.ts";

import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";

import light from "./style/light.module.scss";
import leafs from "~icons/dashboard/leafs.svg";
import moneys from "~icons/dashboard/moneys.svg";
import air from "~icons/dashboard/air.svg";
import train from "~icons/dashboard/train.svg";
import hotel from "~icons/dashboard/hotel.svg";
import SkeletonUi from "~/common/ui/kit/skeleton-ui";

const formatNumber = (number: string) => {
  const formattedNumber = number?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return formattedNumber;
};

const getMaxValue = (obj: any) => {
  let maxValue = -Infinity;

  for (const value of Object.values(obj)) {
    if (value > maxValue) {
      maxValue = value;
    }
  }

  return maxValue;
};

const DashboardPage = () => {
  const { loading, sort, handleSort, type, handleType, dashboardData } = useDashboard();

  const maxValue = getMaxValue(dashboardData.chart) / 100;

  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.dashboardContainer}>
          <span className={light.dashboardTitle}>
            {type === "user" && "My Dashboard"}
            {type === "department" && "Group Dashboard"}
            {type === "company" && "Company Dashboard"}
          </span>
          <div className={light.dashboardFilter}>
            <div className={light.filterItems}>
              <button
                type="button"
                disabled={true}
                className={`${light.filterItem} ${sort === "year_to_date" && light.active}`}
                onClick={() => handleSort("year_to_date")}
              >
                <span className={light.itemTitle}>Year</span>
              </button>
              {/*<button type="button" className={light.filterItem}>*/}
              {/*  <span className={light.itemTitle}>Quarter</span>*/}
              {/*</button>*/}
              <button
                type="button"
                disabled={true}
                className={`${light.filterItem} ${sort === "month" && light.active}`}
                onClick={() => handleSort("month")}
              >
                <span className={light.itemTitle}>Month</span>
              </button>
            </div>
            <div className={light.filterItems}>
              <button
                type="button"
                disabled={loading}
                className={`${light.filterItem} ${type === "user" && light.active}`}
                onClick={() => handleType("user")}
              >
                <span className={light.itemTitle}>You</span>
              </button>
              <button
                type="button"
                disabled={loading}
                className={`${light.filterItem} ${type === "department" && light.active}`}
                onClick={() => handleType("department")}
              >
                <span className={light.itemTitle}>Group</span>
              </button>
              <button
                type="button"
                disabled={loading}
                className={`${light.filterItem} ${type === "company" && light.active}`}
                onClick={() => handleType("company")}
              >
                <span className={light.itemTitle}>Company</span>
              </button>
            </div>
          </div>
          {!loading && (
            <>
              <div className={light.dashboardInfo}>
                <div className={light.infoChart}>
                  <div className={light.chartHeader}>
                    <span className={light.headerTitle}>CO2 emission business travel</span>
                    <span className={light.headerDescription}>0kg CO2</span>
                  </div>
                  <div className={light.chartGraph}>
                    <div className={light.graphItem}>
                      <span className={light.graphTitle}>{(dashboardData.chart.q0 / 1000000).toFixed(1)}ton</span>
                      <div
                        className={light.graphColumn}
                        style={{
                          height: `${dashboardData.chart.q0 / maxValue * 0.2 > 1 ? dashboardData.chart.q0 / maxValue * 0.2 : 1}vh`,
                          background: dashboardData.chart.q0 / maxValue * 0.2 < 5 ? "#179642" : ""
                        }}
                      />
                    </div>
                    <div className={light.graphItem}>
                      <span className={light.graphTitle}>{(dashboardData.chart.q1 / 1000000).toFixed(1)}ton</span>
                      <div
                        className={light.graphColumn}
                        style={{
                          height: `${dashboardData.chart.q1 / maxValue * 0.2 > 1 ? dashboardData.chart.q1 / maxValue * 0.2 : 1}vh`,
                          background: dashboardData.chart.q1 / maxValue * 0.2 < 5 ? "#179642" : ""
                        }}
                      />
                    </div>
                    <div className={light.graphItem}>
                      <span className={light.graphTitle}>{(dashboardData.chart.q2 / 1000000).toFixed(1)}ton</span>
                      <div
                        className={light.graphColumn}
                        style={{
                          height: `${dashboardData.chart.q2 / maxValue * 0.2 > 1 ? dashboardData.chart.q2 / maxValue * 0.2 : 1}vh`,
                          background: dashboardData.chart.q2 / maxValue * 0.2 < 5 ? "#179642" : ""
                        }}
                      />
                    </div>
                    <div className={light.graphItem}>
                      <span className={light.graphTitle}>{(dashboardData.chart.q3 / 1000000).toFixed(1)}ton</span>
                      <div
                        className={light.graphColumn}
                        style={{
                          height: `${dashboardData.chart.q3 / maxValue * 0.2 > 1 ? dashboardData.chart.q3 / maxValue * 0.2 : 1}vh`,
                          background: dashboardData.chart.q3 / maxValue * 0.2 < 5 ? "#179642" : ""
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={light.infoBudget}>
                  <span>Climate budget</span>
                </div>
              </div>
              <div className={light.dashboardGeneral}>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <span className={light.infoTitle}>CO2 save</span>
                      <span className={light.infoSubtitle}>In this month you are was saved</span>
                      <span className={light.infoContent}>{formatNumber(dashboardData.green)}kg CO2</span>
                    </div>
                    <img src={leafs} alt="leafs" className={light.headerImage} />
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <span className={light.itemTitle}>Your choice saved</span>
                      <span className={light.itemDescription}>
                    <span className={light.descriptionValue}>x{(Number(dashboardData.green) / 100).toFixed(0)}</span> bathtubs of arctic ice
                  </span>
                    </div>
                    <div className={light.footerItem}>
                      <span className={light.itemTitle}>{"It means you're done"}</span>
                      <span className={light.itemDescription}>
                    <span className={light.descriptionValue}>0%</span> green trips this month
                  </span>
                    </div>
                  </div>
                </div>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <span className={light.infoTitle}>Business travel</span>
                      <div className={light.infoData}>
                        <div className={light.dataItem}>
                          <span className={light.itemTitle}>How much was spent</span>
                          <span className={light.dataDescription}>0$</span>
                        </div>
                        <div className={light.dataItem}>
                          <span className={light.itemTitle}>And was saved</span>
                          <span className={light.dataDescription}>0$</span>
                        </div>
                      </div>
                    </div>
                    <img src={moneys} alt="moneys" className={light.headerImage} />
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <span className={light.itemTitle}>How much is saved by choosing green trips</span>
                      <span className={light.itemMoney}>0$</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={light.dashboardGeneral}>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <span className={`${light.infoTitle} ${light.green}`}>0kg CO2</span>
                      <span className={light.infoSubtitle}>
                    Was used for <span className={light.subtitleAmount}>{dashboardData.amount.air}</span> flights
                  </span>
                    </div>
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <span className={light.itemTitle}>And spent</span>
                      <span className={light.itemMoney}>0$</span>
                    </div>
                    <div className={light.footerItem}>
                      <img src={air} alt="air" />
                    </div>
                  </div>
                </div>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <span className={`${light.infoTitle} ${light.green}`}>0kg CO2</span>
                      <span className={light.infoSubtitle}>
                    Was used for <span className={light.subtitleAmount}>{dashboardData.amount.train}</span> journeys
                  </span>
                    </div>
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <span className={light.itemTitle}>And spent</span>
                      <span className={light.itemMoney}>0$</span>
                    </div>
                    <div className={light.footerItem}>
                      <img src={train} alt="train" />
                    </div>
                  </div>
                </div>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <span className={`${light.infoTitle} ${light.green}`}>0kg CO2</span>
                      <span className={light.infoSubtitle}>
                    Was used for <span className={light.subtitleAmount}>0</span> visits
                  </span>
                    </div>
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <span className={light.itemTitle}>And spent</span>
                      <span className={light.itemMoney}>0$</span>
                    </div>
                    <div className={light.footerItem}>
                      <img src={hotel} alt="hotel" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {loading && (
            <>
              <div className={light.dashboardInfo}>
                <div className={light.infoChart}>
                  <div className={light.chartHeader}>
                    <SkeletonUi width="208px" height="20px" />
                    <SkeletonUi width="78px" height="20px" />
                  </div>
                  <div className={light.chartGraph}>
                    <div className={light.graphItem}>
                      <SkeletonUi width="64px" height="20px" />
                      <SkeletonUi width="100%" height="11vh" />
                    </div>
                    <div className={light.graphItem}>
                      <SkeletonUi width="64px" height="20px" />
                      <SkeletonUi width="100%" height="16vh" />
                    </div>
                    <div className={light.graphItem}>
                      <SkeletonUi width="64px" height="20px" />
                      <SkeletonUi width="100%" height="7vh" />
                    </div>
                    <div className={light.graphItem}>
                      <SkeletonUi width="64px" height="20px" />
                      <SkeletonUi width="100%" height="9vh" />
                    </div>
                  </div>
                </div>
                <div className={light.infoBudget}>
                  <SkeletonUi width="156px" height="24px" />
                </div>
              </div>
              <div className={light.dashboardGeneral}>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <SkeletonUi width="72px" height="20px" />
                      <SkeletonUi width="156px" height="20px" style={{ marginTop: "6px" }} />
                      <SkeletonUi width="96px" height="16px" style={{ marginTop: "4px" }} />
                    </div>
                    <SkeletonUi width="72px" height="72px" style={{ borderRadius: "16px" }} />
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <SkeletonUi width="96px" height="20px" style={{ marginTop: "6px" }} />
                      <SkeletonUi width="108px" height="20px" style={{ marginTop: "6px" }} />
                    </div>
                    <div className={light.footerItem}>
                      <SkeletonUi width="72px" height="20px" style={{ marginTop: "6px" }} />
                      <SkeletonUi width="96px" height="20px" style={{ marginTop: "6px" }} />
                    </div>
                  </div>
                </div>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <SkeletonUi width="108px" height="20px" />
                      <div className={light.infoData}>
                        <div className={light.dataItem}>
                          <SkeletonUi width="72px" height="16px" style={{ borderRadius: "6px" }} />
                          <SkeletonUi width="32px" height="16px" />
                        </div>
                        <div className={light.dataItem}>
                          <SkeletonUi width="64px" height="16px" style={{ borderRadius: "6px" }} />
                          <SkeletonUi width="32px" height="16px" />
                        </div>
                      </div>
                    </div>
                    <SkeletonUi width="72px" height="72px" style={{ borderRadius: "16px" }} />
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <SkeletonUi width="156px" height="20px" />
                      <SkeletonUi width="46px" height="20px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={light.dashboardGeneral}>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <SkeletonUi width="96px" height="22px" style={{ marginBottom: "6px" }} />
                      <SkeletonUi width="156px" height="20px" />
                    </div>
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <SkeletonUi width="72px" height="20px" />
                      <SkeletonUi width="36px" height="22px" />
                    </div>
                    <div className={light.footerItem}>
                      <SkeletonUi width="56px" height="56px" style={{ borderRadius: "12px" }} />
                    </div>
                  </div>
                </div>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <SkeletonUi width="96px" height="22px" style={{ marginBottom: "6px" }} />
                      <SkeletonUi width="126px" height="20px" />
                    </div>
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <SkeletonUi width="72px" height="20px" />
                      <SkeletonUi width="36px" height="22px" />
                    </div>
                    <div className={light.footerItem}>
                      <SkeletonUi width="56px" height="56px" style={{ borderRadius: "12px" }} />
                    </div>
                  </div>
                </div>
                <div className={light.generalItem}>
                  <div className={light.generalHeader}>
                    <div className={light.headerInfo}>
                      <SkeletonUi width="96px" height="22px" style={{ marginBottom: "6px" }} />
                      <SkeletonUi width="140px" height="20px" />
                    </div>
                  </div>
                  <div className={light.generalFooter}>
                    <div className={light.footerItem}>
                      <SkeletonUi width="72px" height="20px" />
                      <SkeletonUi width="36px" height="22px" />
                    </div>
                    <div className={light.footerItem}>
                      <SkeletonUi width="56px" height="56px" style={{ borderRadius: "12px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </ContainerLayout>
    </MainLayout>
  );
};

export default DashboardPage;
