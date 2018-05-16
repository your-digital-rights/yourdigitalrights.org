import { Component } from "react";
import Form from "../components/Form";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import erasureEmail from "../email-templates/erasure";
import mailtoLink from "mailto-link";
import pageWithIntl from "../components/PageWithIntl";

export default pageWithIntl(() => {
  return (
    <main>
      <h1>
        <FormattedMessage id="heading" defaultMessage="Opt out" />
      </h1>
      <Form />
    </main>
  );
});
