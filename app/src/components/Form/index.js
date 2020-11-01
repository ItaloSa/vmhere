import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

export const Form = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormGroupTitle = styled.p`
  display: inline-block;
  margin-bottom: .5rem;
  &.invalid {
    color: ${theme.highlight};
  }
`;

const Wrapper = styled.div`
  margin-bottom: 1rem;
  &.invalid {
    color: ${theme.highlight};
    input, select {
      border: 1px solid ${theme.highlight};
    }
  }
  input, select {
    color: ${theme.highlightB};
    height: calc(1.5em + .75rem + 2px);
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: ${theme.dark};
    border: 1px solid ${theme.darker};
    border-radius: .25rem;
    :focus {
      outline: 0;
      border-color: ${theme.highlight};
      background-color: ${theme.darkB};
    }
  }
`;

export const Input = ({ label, help, invalid = false, ...rest }) => {
  return (
    <Wrapper className={invalid ? 'invalid' : undefined}>
      <label>{label}</label>
      <input {...rest} />
      <small>{help}</small>
    </Wrapper>
  );
};

export const Select = ({ label, help, invalid = false, ...rest }) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <select {...rest}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <small>{help}</small>
    </Wrapper>
  );
};

const CheckWrapper = styled.div`
  input {
    opacity: 0;
    position: absolute;
  }
  label {
    color: ${theme.white};
    width: 100%;
    padding: .75rem .75rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    background-color: ${theme.dark};
    border: 2px solid ${theme.darker};
    border-radius: .25rem;
    :hover {
      border-color: ${theme.highlight};
      background-color: ${theme.darkB};
    }
  }
  &.selected {
    label {
      color: ${theme.highlightB};
      border-color: ${theme.highlightB}
    }
  }
`;

export const Check = ({ label, help, selected = false, ...rest }) => {
  return (
    <CheckWrapper className={selected ? 'selected' : undefined}>
      <label>{label}</label>
      <input type="radio" {...rest} style={{}} />
      {/* <small>{help}</small> */}
    </CheckWrapper>
  );
};
