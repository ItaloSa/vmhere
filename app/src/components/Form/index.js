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
  select {
    cursor: pointer;
  }
`;

export const Input = React.forwardRef((props, ref) => {
  const { label, help, invalid = false, ...rest } = props;

  return (
    <Wrapper className={invalid ? 'invalid' : undefined}>
      <label>{label}</label>
      <input {...rest} ref={ref} />
      <small>{help}</small>
    </Wrapper>
  );
});

export const Select = React.forwardRef((props, ref) => {
  const { label, help, name, options = [], ...rest } = props;

  return (
    <Wrapper>
      <label>{label}</label>
      <select {...rest} ref={ref} name={name}>
        {options.map((item, idx) => (
          <option
            value={item.value}
            key={`select-${name}-${idx}`}
          >
            {item.label}
          </option>
        ))}
      </select>
      <small>{help}</small>
    </Wrapper>
  );
});

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
    cursor: pointer;
    :hover {
      border-color: ${theme.highlight} !important;
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

export const Check = React.forwardRef((props, ref) => {
  const { label, value, setField, defaultChecked, ...rest } = props

  const isSelected = () => {
    return defaultChecked === value
  };

  return (
    <CheckWrapper
      className={isSelected() ? 'selected' : undefined}
      onClick={() => setField(value)}
    >
      <label>{label}</label>
      <input
        type="radio"
        defaultChecked={isSelected()}
        value={value}
        {...rest}
        ref={ref}
      />
    </CheckWrapper>
  );
});
