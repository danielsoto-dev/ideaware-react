import React from "react";

import Button from "../Button";
import Input from "../Input";
import Form from "../Form";
const EmailForm = ({ btnName, className, ...props }) => {
  return (
    <Form
      onSubmit={null}
      className={`max-w-[600px] min-w-[320px] h-[129px] ${className}`}
    >
      <Input name="email" type="email" placeholder="Your email address" />
      <Button>{btnName}</Button>
    </Form>
  );
};

export default EmailForm;
