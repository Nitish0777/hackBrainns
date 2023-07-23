import React from "react";
import "../../styles/faq.css";

const Faq = () => {
  return (
    <section>
      <div className="faq">
        <div className="faq-left-desktop">
          <div className="faq-left-image-desktop">
            <img
              src="https://rvs-faq-accordion-card.netlify.app/images/illustration-woman-online-desktop.svg"
              alt="illustration-woman-online-desktop"
            />
          </div>
          <img
            src="https://rvs-faq-accordion-card.netlify.app/images/illustration-box-desktop.svg"
            alt="illustration-box-desktop"
          />
        </div>
        <div className="faq-left-mobile">
          <div className="faq-left-image-mobile">
            <img
              src="https://rvs-faq-accordion-card.netlify.app/images/illustration-woman-online-mobile.svg"
              alt="illustration-woman-online-mobile"
            />
          </div>
        </div>
        <div className="faq-right">
          <div className="faq-title">FAQ</div>
          <div className="faq-body">
            <details>
              <summary>How many team members can I invite?</summary>
              <p>
                You can invite up to 2 additional users on the Free plan. There
                is no limit on team members for the Premium plan.
              </p>
            </details>
            <details>
              <summary>What is the maximum file upload size?</summary>
              <p>
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </p>
            </details>
            <details>
              <summary>How do I reset my password?</summary>
              <p>
                Click “Forgot password” from the login page or “Change password”
                from your profile page. A reset link will be emailed to you.
              </p>
            </details>
            <details>
              <summary>Can I cancel my subscription?</summary>
              <p>
                Yes! Send us a message and we’ll process your request no
                questions asked.
              </p>
            </details>
            <details>
              <summary>Do you provide additional support?</summary>
              <p>
                Chat and email support is available 24/7. Phone lines are open
                during normal business hours.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
