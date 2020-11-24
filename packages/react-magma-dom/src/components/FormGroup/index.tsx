import * as React from 'react';
import { HiddenStyles } from '../../utils/UtilityStyles';
import { InputMessage } from '../Input/InputMessage';
import styled from '../../theme/styled';
import { omit, useGenerateId } from '../../utils';
import { ThemeContext } from '../../theme/ThemeContext';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  containerStyle?: React.CSSProperties;
  errorMessage?: React.ReactNode;
  helperMessage?: React.ReactNode;
  isInverse?: boolean;
  isTextVisuallyHidden?: boolean;
  labelledById?: string;
  labelStyle?: React.CSSProperties;
  labelText?: React.ReactNode;
  testId?: string;
}

export interface FormGroupContextInterface {
  descriptionId?: string;
  hasError?: boolean;
  isInverse?: boolean;
}

export const FormGroupContext = React.createContext<FormGroupContextInterface>({
  hasError: false,
  isInverse: false,
});

export const FormGroupLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spaceScale.spacing02};
  width: 100%;
`;

const HiddenLabel = styled.label`
  ${HiddenStyles};
`;

export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  (props, ref) => {
    const id = useGenerateId(props.id);

    const {
      containerStyle,
      errorMessage,
      helperMessage,
      labelledById,
      labelStyle,
      labelText,
      isInverse,
      isTextVisuallyHidden,
      testId,
      children,
      ...rest
    } = props;
    const other = omit(['id'], rest);

    const descriptionId = errorMessage || helperMessage ? `${id}__desc` : null;
    const theme = React.useContext(ThemeContext);

    return (
      <div
        {...other}
        aria-labelledby={labelledById ? labelledById : id}
        data-testid={testId}
        ref={ref}
        role="group"
        style={containerStyle}
      >
        <FormGroupContext.Provider
          value={{
            descriptionId,
            hasError: !!errorMessage,
            isInverse,
          }}
        >
          {labelText && isTextVisuallyHidden && (
            <HiddenLabel id={id} style={labelStyle}>
              {labelText}
            </HiddenLabel>
          )}

          {labelText && !isTextVisuallyHidden && (
            <FormGroupLabel id={id} style={labelStyle} theme={theme}>
              {labelText}
            </FormGroupLabel>
          )}
          {children}

          <InputMessage
            id={descriptionId}
            hasError={!!errorMessage}
            isInverse={isInverse}
          >
            {(errorMessage || helperMessage) && (
              <>{errorMessage ? errorMessage : helperMessage}</>
            )}
          </InputMessage>
        </FormGroupContext.Provider>
      </div>
    );
  }
);