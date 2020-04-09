import React, { useRef } from 'react';
import styled from 'styled-components';

import searchIcon from '../assets/research.png';
import arrowIcon from '../assets/down-arrow.png';

const Container = styled.div`
  width: 365px;
  height: 65px;
  color: #798697;
  position: relative;
  margin-top: 30px;
  margin-bottom: 5px;
`;

const Input = styled.input.attrs(props => ({
  placeholder: props.focused ? 'Type or search...' : '',
  type: 'text',
}))`
  box-sizing: border-box;
  border: 1px solid #bfc5cd;
  border-radius: 5px;
  width: 365px;
  height: 65px;
  font-size: 1.4rem;
  padding: 0 ${props => (props.focused ? '50px' : '20px')};

  &:hover {
    border-color: #4a4a4a;
  }

  &:focus {
    outline: none;
    outline-offset: 0;
    border-color: #4a4a4a;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  top: ${props => (props.input || props.focused ? '-20px' : '20px')};
  left: ${props => (props.input || props.focused ? '5px' : '30px')};
  font-family: sans-serif;
  font-size: ${props => (props.input || props.focused ? '1rem' : '1.4rem')};
  transition: all 0.3s cubic-bezier(0, 0, 0.6, 0.88);
`;

const SearchIcon = styled.img.attrs(props => ({
  src: searchIcon,
  alt: 'Search icon',
}))`
  position: absolute;
  top: 22px;
  left: 20px;
  width: 20px;
  height: 20px;
  opacity: 0.8;
`;

const ArrowIcon = styled.img.attrs(props => ({
  src: arrowIcon,
  alt: 'Arrow icon',
}))`
  position: absolute;
  top: 25px;
  right: 20px;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  cursor: pointer;
`;

const InputField = ({ inputFocused, setInputFocused, input, setInput }) => {
  const inputElem = useRef(null);

  return (
    <Container>
      {inputFocused && <SearchIcon />}
      <Input
        ref={inputElem}
        value={input}
        focused={inputFocused}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setTimeout(() => setInputFocused(false), 100)}
        onChange={event => setInput(event.target.value)}
      />
      <Placeholder focused={inputFocused} input={input}>
        Contact
      </Placeholder>
      {!inputFocused && <ArrowIcon onClick={() => inputElem.current.focus()} />}
    </Container>
  );
};

// InputField.defaultProps = {
//   width: '365px',
//   height: '65px',
//   theme: {
//     color: '#798697',
//     border: '1px solid #bfc5cd',
//     hoverBorderColor: '',
//   },
// };

export default InputField;

// Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

// Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
