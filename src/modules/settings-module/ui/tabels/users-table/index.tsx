import type { FC } from "react";
import type { IMeta } from "~/common/lib/types/system/meta.type.ts";
import type { IUserList } from "~/modules/settings-module/lib/types/user-list.type.ts";

import { useNavigate } from "react-router-dom";

import { roles } from "~/common/lib/configs/user/roles.ts";
import { statuses } from "~/common/lib/configs/user/statuses.ts";

import light from "./styles/light.module.scss";
import "~/common/styles/components/pagination.css";
import ReactPaginate from "react-paginate";

interface IUsersTable {
  list: IUserList[];
  meta: IMeta;
  page: number;
  handlePage: (page: number) => void;
}

const UsersTable: FC<IUsersTable> = ({ list, meta, page, handlePage }) => {
  const navigate = useNavigate();

  return (
    <div className={light.usersWrapper}>
      <div className={light.usersContainer}>
        <div className={light.usersHeader}>
          <span className={light.headerTitle}>Name</span>
          <span className={light.headerTitle}>Email</span>
          <span className={light.headerTitle}>Role</span>
          <span className={light.headerTitle}>Status</span>
          <span className={light.headerTitle} />
        </div>
        {list.map((user) => (
          <button
            key={user.id}
            type="button"
            className={light.usersItem}
            onClick={() => navigate(`/admin/users/${user.id}/edit`)}
          >
            {user.attributes.status === statuses.INVITED.key && (
              <span className={`${light.itemTitle} ${light.grey}`}>Invited</span>
            )}
            {user.attributes.status !== statuses.INVITED.key && (
              <span className={light.itemTitle}>{`${user.attributes.firstname} ${user.attributes.lastname}`}</span>
            )}
            <span className={`${light.itemTitle} ${user.attributes.status === statuses.INVITED.key && light.grey}`}>
              {user.attributes.email}
            </span>
            <span className={`${light.itemTitle} ${user.attributes.status === statuses.INVITED.key && light.grey}`}>
              {roles.find((el) => el.key === user.attributes.role)?.value || "-"}
            </span>
            <span className={`${light.itemTitle} ${user.attributes.status === statuses.INVITED.key && light.grey}`}>
              {`${user.attributes.status[0].toUpperCase()}${user.attributes.status.slice(1)}`}
            </span>
            <div className={light.itemActions}>
              {user.attributes.status === statuses.INVITED.key && (
                <button type="button" className={light.actionsStatus}>
                  <span className={light.statusTitle}>Resend Invite</span>
                </button>
              )}
              {user.attributes.status !== statuses.INVITED.key && (
                <button type="button" className={`${light.actionsStatus} ${light.red}`}>
                  <span className={light.statusTitle}>Actions</span>
                </button>
              )}
              <button type="button" className={light.actionsDelete}>
                <span className={light.deleteTitle}>+</span>
              </button>
            </div>
          </button>
        ))}
      </div>
      <div className={light.usersPagination}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={async (pageEvent) => {
            handlePage(pageEvent.selected + 1);
            // setPage((prev) => ({
            //   ...prev,
            //   currentPage: pageEvent.selected + 1
            // }));
            // window.scrollTo(0, 0);
            // await handleGetTrips(pageEvent.selected + 1);
          }}
          pageRangeDisplayed={5}
          pageCount={meta.last_page || 0}
          previousLabel="Previous"
          forcePage={page - 1}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default UsersTable;
