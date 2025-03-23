import Link from "next/link";

export default function BreadcrumbOne({ title, links }) {
  return (
    <div className="breadcrumb-area position-relative">
      <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ color: "#7272726B" }}>
        {title && (
          <h3 className="page-name text-uppercase  mb-0" style={{ color: "#000000" }}>{title}</h3>
        )}
        {/* <ul className="breadcrumb-area--list" style={{ color: "#FFFFFF" }}>
          {links.map((link, index) => (
            <li key={index} className="breadcrumb-area--item d-inline-block" style={{ color: "#FFFFFF" }}>
              {link.href === "#" ? (
                `${link.name}`
              ) : (
                <Link href={`${link.href}`} className="breadcrumb-area--link"  style={{ color: "#FFFFFF" }}>
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
