import styled from "styled-components";

export default function FooterBar({ respondidas, total }) {
  return (
    <FooterContainer>
      <p>{respondidas}/{total} Concluídas</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #FFFFFF;
  box-shadow: 0px -4px 6px #00000026;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
`;
