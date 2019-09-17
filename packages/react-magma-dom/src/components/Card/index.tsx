import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Heading } from '../Heading';
import { ThemeContext } from '../../theme/ThemeContext';

export interface CardProps extends React.LabelHTMLAttributes<HTMLDivElement> {
  align?: CardAlignment;
  calloutType?: CardCalloutType;
  hasDropShadow?: boolean;
  width?: string;
}

export enum CardAlignment {
  center = 'center',
  left = 'left',
  right = 'right'
}

export enum CardCalloutType {
  danger = 'danger',
  primary = 'primary',
  success = 'success',
  warning = 'warning'
}

export function buildCalloutBackground(props) {
  switch (props.calloutType) {
    case 'danger':
      return props.theme.colors.danger;
    case 'success':
      return props.theme.colors.success01;
    case 'warning':
      return props.theme.colors.pop04;
    default:
      return props.theme.colors.primary;
  }
}

const StyledCard = styled.div<CardProps>`
  background: ${props => props.theme.colors.neutral08};
  border: 1px solid ${props => props.theme.colors.neutral06};
  border-radius: 5px;
  box-shadow: ${props =>
    props.hasDropShadow ? '0 2px 6px 0 rgba(0,0,0,0.18)' : '0 0 0'};
  color: ${props => props.theme.colors.neutral02};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: ${props => (props.calloutType ? '5px' : '0')};
  position: relative;
  text-align: ${props => props.align};
  width: ${props => props.width};

  ${props =>
    props.calloutType &&
    css`
      &:before {
        background: ${buildCalloutBackground(props)};
        border-radius: 5px 0 0 5px;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        left: 0;
        width: 5px;
      }
    `}
`;

function renderCard(props) {
  const {
    align,
    children,
    calloutType,
    hasDropShadow,
    testId,
    width,
    ...other
  } = props;

  return (
    <ThemeContext.Consumer>
      {theme => (
        <StyledCard
          {...other}
          align={align ? align : CardAlignment.left}
          data-testid={testId}
          calloutType={calloutType}
          hasDropShadow={hasDropShadow}
          width={width ? width : 'auto'}
          theme={theme}
        >
          {children}
        </StyledCard>
      )}
    </ThemeContext.Consumer>
  );
}

export const Card: React.FunctionComponent<CardProps> = (props: CardProps) =>
  renderCard(props);

const StyledCardBody = styled.div<CardProps>`
  padding: 20px;
  text-align: ${props => props.align};
`;

function renderCardBody(props) {
  const { children } = props;

  return <StyledCardBody>{children}</StyledCardBody>;
}

export const CardBody: React.FunctionComponent<CardProps> = (
  props: CardProps
) => renderCardBody(props);

const StyledCardHeading = styled(Heading)<{ align?: CardAlignment }>`
  margin: 0;
  padding: 15px 20px 0;
  text-align: ${props => props.align};
`;

function renderCardHeading(props) {
  const { children } = props;

  return <StyledCardHeading level={4}>{children}</StyledCardHeading>;
}

export const CardHeading: React.FunctionComponent<CardProps> = (
  props: CardProps
) => renderCardHeading(props);
