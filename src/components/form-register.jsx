import React from 'react';
import { submitForm } from '../utils/hubspot.js';
import styled from 'styled-components';

const Form = styled.form`
  align-items: center;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
  color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 378px;
  padding: 34px 46px;
  z-index: 20;

  &,
  > div,
  input {
    width: 100%;
  }

  > div,
  input {
    max-width: 286px;
    min-width: 100px;
  }
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  line-height: 33px;
  text-align: center;
`;

const Label = styled.label`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  width: 1px;
`;

const Input = styled.input`
  display: inline-block;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  font-size: 16px;
  margin-bottom: 16px;
  padding: 12px 16px;
`;

const Button = styled.button`
  background-color: #33b354;
  border-radius: 3px;
  color: #fff;
  margin: 0 0 20px;
  min-width: 166px;
  padding: 9px 25px;
  transition: background-color 200ms ease, border 200ms ease, box-shadow 200ms ease;
  text-transform: uppercase;

  &:hover {
    background-color: #2f3338;
  }
`;

const FormRegister = () => {
  return (
    <Form>
      <Title>Register Now</Title>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          inputMode="text"
          maxLength="256"
          placeholder="Name"
        />
      </div>
      <div>
        <Label htmlFor="email">Company Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          maxLength="256"
          placeholder="Company Email"
        />
      </div>
      <div>
        <Label htmlFor="company-name">Company Name</Label>
        <Input
          id="company-name"
          name="company name"
          type="text"
          inputMode="text"
          maxLength="256"
          placeholder="Company Name"
        />
      </div>
      <Button>Watch Now</Button>
    </Form>
  );
};

export default FormRegister;
