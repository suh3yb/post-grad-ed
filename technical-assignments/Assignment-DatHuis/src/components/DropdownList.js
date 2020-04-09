import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 410px;
  height: 280px;
  border: 1px solid #bfc5cd;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
  background: #ffffff;
  padding: 20px 0;
  overflow: scroll;
`;

const List = styled.ul`
  list-style: none;
  color: #798697;
  font-family: sans-serif;
  font-size: 1.4rem;
  line-height: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const ListItem = styled.li`
  padding: 10px 0 10px 20px;

  &:hover {
    color: #4a4a4a;
    background: #f7f7f7;
  }
`;

const DropdownList = ({ data, input, setInput, display }) => {
  const sortNames = people => {
    return people
      .filter(person => person.name)
      .sort((a, b) => (a.name < b.name ? -1 : 1));
  };

  const people = sortNames(data);

  const [names, setNames] = useState(people);

  useEffect(() => {
    if (!input) return setNames(people);
    const filteredNames = people.filter(
      person =>
        person.name && person.name.toLowerCase().includes(input.toLowerCase())
    );

    setNames(filteredNames);
  }, [input]);

  return (
    display && (
      <Container>
        <List>
          {names.map((name, index) => (
            <ListItem key={index} onClick={() => setInput(name.name)}>
              {name.name}
            </ListItem>
          ))}
        </List>
      </Container>
    )
  );
};

export default DropdownList;
