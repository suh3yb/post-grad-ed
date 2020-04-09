import React, { useState } from 'react';

import InputField from './InputField';
import DropdownList from './DropdownList';

import MOCK_DATA from '../../MOCK_DATA.json';

const ContactSelection = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [input, setInput] = useState('');

  return (
    <>
      <InputField
        inputFocused={inputFocused}
        setInputFocused={setInputFocused}
        input={input}
        setInput={setInput}
      />
      <DropdownList
        data={MOCK_DATA}
        input={input}
        setInput={setInput}
        display={inputFocused}
      />
    </>
  );
};

export default ContactSelection;
