import styled from "@emotion/styled";

export const StyledModal = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  padding: 10px;
  background-color: #a7c6ff;
  p {
    text-align: center;
    margin-bottom: 5px;

    &.title {
      font-size: 24px;
    }

    &.subtitle {
      font-size: 21px;
      font-weight: 700;
      margin: 0;
    }
  }

  img {
    display: block;
    width: 90px;
    height: 90px;
    border-radius: 30%;
    margin: 10px auto;
  }

  button {
    width: 150px;
    display: block;
    cursor: pointer;
    color: #000;
    font-size: 26px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0%);
    outline: none;
    border: 1px solid #fe1a2e;
    border-radius: 15px;
    background-color: #ff6472;

    :hover {
      transform: translate(-50%, 0%) scale(1.1);
    }
  }
`;
