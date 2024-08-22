import React from 'react';
import styled from 'styled-components';
import font from "../../styles/font";
import color from "../../styles/color";

const Container = styled.div`
  // display:
  margin: 0 0 0 1.7rem;
`;

const Text = styled.p`
  font: ${() => font.regular_20};
  color: ${() => color.black};
  margin-bottom: 2rem;
`;

const DateSelect = styled.input`
  font: ${() => font.regular_20};
  color: ${() => color.grayscale_9d};
  
  height: 6.6rem;
  padding: 2.5rem 4.4rem;
  font: ${() => font.regular_20};
  color: ${() => color.black};
  border: 0.1rem solid ${() => color.grayscale_9d};
  border-radius: 1.5rem;

`;

function DateInput({content, placeholder}) {
    return (
            <Container>
                <Text content={content}>{content}</Text>
                <DateSelect type='date' placeholder={placeholder} />
            </Container>
    );
}

export default DateInput