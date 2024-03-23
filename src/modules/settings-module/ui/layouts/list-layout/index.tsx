import type { FC, PropsWithChildren } from "react";

import light from "./styles/light.module.scss";

interface IListLayout {
  title: string;
  handleAdd: () => void;
  empty: boolean;
  emptyTitle: string;
}

const ListLayout: FC<PropsWithChildren<IListLayout>> = ({
  children, title, handleAdd, empty, emptyTitle
}) => {
  return (
    <div className={light.listWrapper}>
      <div className={`container ${light.listContainer}`}>
        <div className={light.listHeader}>
          <span className={light.headerTitle}>
            {title}
          </span>
          <button
            type="button"
            className={light.headerAction}
            onClick={handleAdd}
          >
          <span className={light.actionTitle}>
            +
          </span>
          </button>
        </div>
        <div className={light.listContent}>
          {!empty && children}
          {empty && (
            <span className={light.contentEmpty}>
              {emptyTitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListLayout;
