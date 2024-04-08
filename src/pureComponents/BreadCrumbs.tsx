import { FC } from "react";
import { Link } from "react-router-dom";

type breadcrumbs = {
  breadcrumbDetail: { label: string; link?: string }[];
};

const Breadcrumbs: FC<breadcrumbs> = ({ breadcrumbDetail }) => {
  return (
    <div className="absolute top-3 left-6">
      {breadcrumbDetail.map((breadcrumb, index) => (
        <span key={index}>
          {index > 0 && <span className="separator"> / </span>}
          {breadcrumb.link ? (
            <Link className="hover:text-sky-500" to={breadcrumb.link}>
              {breadcrumb.label}
            </Link>
          ) : (
            <span>{breadcrumb.label}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
