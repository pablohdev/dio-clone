import React from "react";
import { Controller } from "react-hook-form";

import { InputContainer, InputText, IconContainer } from "./styles";
import { IInput } from "./types";

const Input = ({ leftIcon, name, control, ...rest }: IInput) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <InputText {...field} {...rest} />}
      />
    </InputContainer>
  );
};

export { Input };
