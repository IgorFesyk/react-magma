import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  padding: 20px;
  text-align: center;
  border: ${({ border }) => (border ? '1px solid #ccc' : null)}
  margin: 10px;
  min-width: 200px;
`

export const IconContainer = props => (
  <StyledSpan border={props.border}>{props.children}</StyledSpan>
)