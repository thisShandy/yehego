import type { FC } from "react";
import type { IMeta } from "~/common/lib/types/system/meta.type.ts";
import type { IUserList } from "~/modules/settings-module/lib/types/user-list.type.ts";

import { roles } from "~/common/lib/configs/user/roles.ts";
import { statuses } from "~/common/lib/configs/user/statuses.ts";

import light from "./styles/light.module.scss";

interface IUsersTable {
  list: IUserList[];
  meta: IMeta;
  page: number;
  handlePage: (page: number) => void;
}

const UsersTable: FC<IUsersTable> = ({
  list, meta, page, handlePage
}) => {
  return (
    <div className={light.usersWrapper}>
      <div className={light.usersContainer}>
        <div className={light.usersHeader}>
          <span className={light.headerTitle}>
            Name
          </span>
          <span className={light.headerTitle}>
            Email
          </span>
          <span className={light.headerTitle}>
            Role
          </span>
          <span className={light.headerTitle}>
            Status
          </span>
          <span className={light.headerTitle} />
        </div>
        {list.map(user => (
          <button
            type="button"
            className={light.usersItem}
          >
            {user.attributes.status === statuses.INVITED.key && (
              <span className={`${light.itemTitle} ${light.grey}`}>
                Invited
              </span>
            )}
            {user.attributes.status !== statuses.INVITED.key && (
              <span className={light.itemTitle}>
                {`${user.attributes.firstname} ${user.attributes.lastname}`}
              </span>
            )}
            <span className={`${light.itemTitle} ${user.attributes.status === statuses.INVITED.key && light.grey}`}>
              {user.attributes.email}
            </span>
            <span className={`${light.itemTitle} ${user.attributes.status === statuses.INVITED.key && light.grey}`}>
              {roles.find(el => el.key === user.attributes.role)?.value || "-"}
            </span>
            <span className={`${light.itemTitle} ${user.attributes.status === statuses.INVITED.key && light.grey}`}>
              {`${user.attributes.status[0].toUpperCase()}${user.attributes.status.slice(1)}`}
            </span>
            <div className={light.itemActions}>
              {user.attributes.status === statuses.INACTIVE.key && (
                <button
                  type="button"
                  className={light.actionsStatus}
                >
                  <span className={light.statusTitle}>Activate</span>
                </button>
              )}
              {user.attributes.status === statuses.ACTIVE.key && (
                <button
                  type="button"
                  className={`${light.actionsStatus} ${light.red}`}
                >
                  <span className={light.statusTitle}>Inactivate</span>
                </button>
              )}
              <button
                type="button"
                className={light.actionsDelete}
              >
                <span className={light.deleteTitle}>+</span>
              </button>
            </div>
          </button>
        ))}
      </div>
      <div className={light.usersPagination}>
        {Array.from(Array(meta.last_page).keys()).map(link => (
          <button
            type="button"
            className={`${light.paginationButton} ${page === link + 1 && light.active}`}
            onClick={() => handlePage(link + 1)}
          >
            <span className={light.buttonTitle}>
              {link + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsersTable;
