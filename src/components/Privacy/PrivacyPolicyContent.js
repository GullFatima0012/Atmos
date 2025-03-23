import Link from "next/link";

import privacy from "@/data/privacy";

export default function PrivacyPolicyContent() {
  return (
    <div className="genres-area" style={{ backgroundColor: "#F1EFE7", color: "black" }}>
    <div className="privacy-policy container py-80 p-80" style={{ color: "black" }}>
      <div className="row justify-content-between" style={{ color: "black" }}>
     
        {privacy.items && privacy.items.length > 0 && (
          <div className="col-lg-12 content-block" style={{ color: "black" }}>
            {privacy.items.map((item, index) => (
              <div key={index} id={index + 1} className="terms" style={{ color: "black" }}>
                <h3 className="section-title small lh-1" style={{ color: "black" }}>
                  {item.content.title}
                </h3>
                <p className="description" style={{ color: "black" }}>{item.content.description}</p>
                {item.content.descriptionTwo && (
                  <p className="description" style={{ color: "black" }}>{item.content.descriptionTwo}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
