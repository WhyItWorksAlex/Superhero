import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledButton = styled(Button)`
  font-family: "Mortal Combat";
  border-radius: 12px;
	border: 3px outset #888;
	padding: 6px 15px;
  color: ${(props) => props.theme.btnTextColor};
	text-transform: uppercase;
	letter-spacing: 1px;
	overflow: hidden;
  cursor: pointer;
	position: relative;
	z-index: 4;
	
	box-shadow: 0 0 10px rgb(0, 0, 0, 1);
	font-size: 18px;
	font-weight: 400;
	background: linear-gradient(160deg, #666, #444);
	text-shadow: 0px 0px 2px rgba(0, 0, 0, .5);

	transition: 0.2s;

  &:hover {
    color: ${(props) => props.theme.btnHoverTextColor};
		box-shadow: 0 0 3px 3px rgba(237, 215, 12, .4)
  }

  &:active {
    border: 3px inset #888;
  }

	@media (max-width: ${(props) => props.theme.maxTabletWidth}) {
		font-size: 16px;
		border-radius: 9px;
		padding: 5px 10px;
		border: 2px outset #888;
		box-shadow: 0 0 8px rgb(0, 0, 0, 1);

		&:active {
			border: 2px inset #888;
			color: ${(props) => props.theme.btnHoverTextColor};
			box-shadow: 0 0 2px 2px rgba(237, 215, 12, .4)
		}
	}
`;
