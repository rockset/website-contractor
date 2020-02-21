import React, { useState } from 'react';
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
  justify-content: center;
  max-width: 378px;
  min-height: 365px;
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

const Confirmation = styled.p`
  font-weight: bold;
  text-align: center;
`;

const FormRegister = () => {
  // set initial empty input values
  const [data, setData] = useState({
    name: '',
    email: '',
    company: '',
  });
  // set sent state
  const [state, setState] = useState({
    sent: false,
    success: false,
  });

  // update state values with input change
  const updateData = event =>
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });

  const toggleSent = status => {
    // show confirmation message
    setState({
      ...state,
      sent: true,
      success: status,
    });
    // reset values on submit
    setData({
      ...data,
      company: '',
      email: '',
      name: '',
    });
    // bring back form after 5 seconds
    setTimeout(() => {
      setState({
        ...state,
        sent: false,
        success: status,
      });
    }, 5000);
  };

  // extract state values
  const { company, email, name } = data;
  // format values for Hubspot
  const fields = [
    {
      name: 'full_name',
      value: name,
    },
    {
      name: 'email',
      value: email,
    },
    {
      name: 'company',
      value: company,
    },
  ];
  // Hubspot form data
  const formData = {
    submittedAt: Date.now(),
    fields,
    context: {
      hutk: null,
      pageUri: 'rockset.com',
      ipAddress: null,
      pageName: 'Analyze Kafka Talk',
      sfdcCampaignId: '701f40000012ZlrAAE',
    },
    skipValidation: false,
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    try {
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/5321663/62271987-06e8-4476-9fe6-f91288e74651',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );

      // passes response bool to toggleSent; determines confirmation message
      if (!response.ok) {
        toggleSent(response.ok);
        console.error(response.status, response.type);

        return;
      }
      toggleSent(response.ok);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {state.sent ? (
        <Confirmation>
          {state.success
            ? 'Thanks for signing up. Check your inbox for access to the video of the tech talk.'
            : "Looks like there was an error signing you up. Contact us at hello@rockset.com and we'll get you signed up."}
        </Confirmation>
      ) : (
        <>
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
              required
              value={name}
              onChange={e => updateData(e)}
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
              required
              value={email}
              onChange={e => updateData(e)}
            />
          </div>
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              type="text"
              inputMode="text"
              maxLength="256"
              placeholder="Company Name"
              required
              value={company}
              onChange={e => updateData(e)}
            />
          </div>
          <Button type="submit">Watch Now</Button>
        </>
      )}
    </Form>
  );
};

export default FormRegister;
