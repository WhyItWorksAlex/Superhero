import styled from "styled-components";

export const P = styled.p`
  margin: 10px;
  margin-left: 20px;
`;

export const Loading = styled.div`
  margin: 10px;
  margin-left: 20px;

  & span {
    animation: 1s blink infinite
  }
  & span:nth-child(2) {
    animation-delay: 250ms
  }
  & span:nth-child(3) {
    animation-delay: 500ms
  }

  @keyframes blink {
    50% {
      color: transparent
    }
  }
`;


export const SearchForm = styled.form`
  z-index: 10;
  width: 600px;
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 28px;
  position: relative;
  font-family: "Albert Sans", sans-serif;
  font-weight: 400;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: url('/search.svg') center/cover no-repeat;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 22px;
  line-height: 28px;
  box-sizing: border-box;
  padding: 5px 20px 5px 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 2px solid transparent;

  &:focus {
    border: 2px solid red;
    outline: none;
  }
`;

export const WrapperResults = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 41px;
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  background: #fff;
  border-radius: 5px;
  border: 2px solid red;
  border-top: 1px solid red;;
  z-index: 10;
  color: black;
`;

export const HeroResult = styled.div`
  padding: 5px;
  box-sizing: border-box;
  width: 100%;

  & button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0px;
    column-gap: 10px;
  }

  & img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

export const Overlay = styled.div`
  width: 100vw; 
  height: 100vh; 
  background: rgba(0, 0, 0, 0.413);
  position: fixed; 
  top: 0; 
  z-index: 3;
`;


