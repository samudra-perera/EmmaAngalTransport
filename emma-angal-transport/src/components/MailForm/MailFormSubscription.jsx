import React from "react";
import MailForm from "./MailForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url ="https://gmail.us10.list-manage.com/subscribe/post?u=9c5ad3307b8b934cae3a1fe3e&amp;id=0533351960&amp;f_id=008a39e2f0"

const MailFormSubscription = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => {
        return (
          <MailForm
            status={status}
            onValidated={(formData) => subscribe(formData)}
            message={message}
          />
        );
      }}
    />
  );
};

export default MailFormSubscription;
