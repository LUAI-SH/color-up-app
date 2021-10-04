import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Color = ({ colorName, color }) => {
  return (
    <CopyToClipboard text={color}>
      <Wrapper backgroundColor={color}>
        <Main>
          <Copy>copy</Copy>
        </Main>
        <Footer>
          <ColorName>{colorName}</ColorName>
          <MoreButton>more</MoreButton>
        </Footer>
      </Wrapper>
    </CopyToClipboard>
  );
};

const MoreButton = styled.button`
  display: block;
  text-transform: uppercase;
  background: hsla(0, 0%, 100%, 0.3);
  border: none;
  color: hsl(0, 0%, 90%);
  font-size: 1.5rem;
  margin: 0;
  padding: 0.75rem;
`;

const Copy = styled.div`
  text-transform: uppercase;
  background: hsla(0, 0%, 100%, 0.3);
  border: 1px solid hsla(0, 0%, 90%, 0);
  border-radius: 4px;
  padding: .5rem 1rem;
  color: hsl(0, 0%, 90%);
  font-size: ${(props) => props.theme.fontSize.xsmall};;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ColorName = styled.span`
  display: block;
  text-align: start;
  text-transform: uppercase;
  padding-left: 4px;
  font-size: ${(props) => props.theme.fontSize.small};
`;

const Main = styled.main`
  flex-grow: 2;
  width: 100%;
  display: flex; /* for centering */
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s linear, opacity 0.2s linear; ;
`;

const Wrapper = styled.li`
  background-color: ${(props) => props.backgroundColor};
  width: 20%;
  height: 25%;
  display: flex;
  flex-direction: column;

  &:hover {
    & ${Main} {
      visibility: visible;
      opacity: 1;
    }
  }
`;
export default Color;
