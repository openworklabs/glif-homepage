import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, typography, border, color } from 'styled-system'

import { MenuItem, Title } from '../Shared'

const TitleCopy = styled(Title)`
  /* Used this: https://stackoverflow.com/questions/14431411/pure-css-to-make-font-size-responsive-based-on-dynamic-amount-of-characters */
  font-size: calc(48px + (64 - 40) * (100vw - 360px) / (1440 - 360));
`

export const LinkWrapper = styled.a`
  position: relative;
  display: flex;
  text-decoration: none;
  color: #0051ff;
  background: #0051ff00;
  z-index: 9;
  transition: 0.24s ease-in-out;

  &:hover {
    background: #0051ff;
    color: #fff;
    
  }

  &:before {
    content: '';
    background-size: contain;
    background-repeat: no-repeat
    background-position: center center;
    border: 1px solid;

    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 16px;
    position: absolute;
    z-index: -9;
  }
  ${space}
  ${layout}
  ${typography}
  ${border}
  ${color}
`

const ExitLink = ({ href }) => (
  <MenuItem width={['100%', 'auto']} mt={3}>
    <LinkWrapper
      href={href}
      borderRadius={4}
      p={4}
      fontSize={5}
      css={`
        /* Needs to use theme property */
        border-radius: 16px;
        ::before {
          background: url('/imgnode.png');
          background-size: cover;
        }
      `}
    >
      <TitleCopy z-index='999'>
        Go <sup>↗</sup>
      </TitleCopy>
    </LinkWrapper>
  </MenuItem>
)

ExitLink.propTypes = {
  href: PropTypes.string.isRequired
}

export default ExitLink
