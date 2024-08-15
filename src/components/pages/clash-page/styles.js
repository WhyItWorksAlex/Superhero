import styled from "styled-components";
import Button from "../../ui/button/button";

export const HeroCardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const StyledFightButton = styled(Button)`
  font-family: "Mortal Combat";
  border-radius: 12px;
	border: 3px outset #888;
	position: relative;
	display: inline-block;
	padding: 15px 30px;
	color: #eee;
	text-transform: uppercase;
	letter-spacing: 4px;
	overflow: hidden;
  cursor: pointer;
  width: 207px;
  box-sizing: border-box;
	
	box-shadow: 0 0 10px rgb(0, 0, 0, 1);
	font-size: 28px;
	font-weight: bolder;
	background:linear-gradient(160deg, #666, #444);
	text-shadow: 0px 0px 2px rgba(0, 0, 0, .5);

	transition: 0.2s;

  &:active {
    border: 3px outset #ddd;
    color: #fff;
    background: linear-gradient(160deg, #666, #444);
    text-shadow: 0px 0px 4px #ccc;
    box-shadow: 0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff;
    transition-delay: 1s;
  }

  & span {
    position: absolute;
	  display: block;
  }

  & .span_1 {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #eee);
  }

  &:active .span_1 {
    left: 100%;
    transition: 1s;
  }

  & .span_2 {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #eee);
  }

  &:active .span_2 {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }

  & .span_3 {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #eee);
  }

  &:active .span_3 {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  & .span_4 {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #eee);
  }

  &:active .span_4 {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`;