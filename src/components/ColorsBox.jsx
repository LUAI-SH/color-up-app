import styled from "styled-components";
import {CopyToClipboard} from 'react-copy-to-clipboard';


const ColorsBox = ({ palettesData }) => {
  const australiaPalette = palettesData.find(
    (palette) => palette.emoji === "🇦🇺"
  );
  return (
    <Wrapper>
      <Colors>
        {australiaPalette.colors.map((colorDetails, index) => {
          return (
            <CopyToClipboard text={colorDetails.color}>
              <Color key={index} color={colorDetails.color}>
                <ContentWrapper>
                  <CopyButtonWrapper>
                    <CopyButton>copy</CopyButton>
                  </CopyButtonWrapper>
                  <Footer>
                    <ColorName>{colorDetails.name}</ColorName>
                    <MoreButton>more</MoreButton>
                  </Footer>
                </ContentWrapper>
              </Color>
            </CopyToClipboard>
          );
        })}
      </Colors>
    </Wrapper>
  );
};

const MoreButton = styled.button`
  text-transform: uppercase;
  background: hsla(0, 0%, 100%, 0.3);
  border: none;
  color: hsl(0, 0%, 90%);
  font-size: 1.5rem;
  margin: 0;
  padding: .75rem;
`;


const CopyButton = styled.button`
  text-transform: uppercase;
  background: none;
  border: 2px solid hsl(0, 0%, 90%);
  border-radius: 4px;
  padding: 1rem 2rem;
  color: hsl(0, 0%, 90%);
`;

const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: baseline;
`

const CopyButtonWrapper = styled.div`
  flex-grow: 2;
  width: 100%;
  display: flex; /* for centering */
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity:0;
  transition: visibility 0.2s linear,opacity 0.2s linear;;
`;

const ColorName = styled.span`
  display: block;
  text-align: start;
  text-transform: uppercase;
  padding-left: 4px;
  font-size: ${props => props.theme.fontSize.small};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Color = styled.li`
  background-color: ${(props) => props.color};
  width: 20%;
  height: 25%;

  &:hover {
    & ${CopyButtonWrapper} {
      visibility: visible;
      opacity:1;
    }
  }
`;

const Colors = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;
`;

const Wrapper = styled.div`
  background-color: cyan;
  height: 90vh;
`;

export default ColorsBox;

