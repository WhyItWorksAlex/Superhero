import styled from "styled-components";

export const StyledNeon = styled.div`
  background: inherit;
  text-align: center;
`;

export const NeonText = styled.p`
	margin: 0 auto;
	font-size: 60px;
	line-height: 70px;
	letter-spacing: 5px;
  font-weight: bold;
  color: #FFF;
  font-family: 'bebas', sans-serif;
  text-transform: uppercase;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;
`;

export const NeonLetter = styled.span`

  animation: neon-4 linear infinite 2s;

@keyframes neon-4 {
	78% {
			color: inherit;
			text-shadow: inherit;
	}
	79%{
			color: #0b3960;
	}
	80% {
			text-shadow: none;
	}
	81% {
			color: inherit;
			text-shadow: inherit;
	}
	82% {
			color: #0b3960;
			text-shadow: none;
	}
	83% {
			color: inherit;
			text-shadow: inherit;
	}
	92% {
			color: #0b3960;
			text-shadow: none;
	}
	92.5% {
			color: inherit;
			text-shadow: inherit;
	}
}
`;


export const NeonLastLetter = styled.span`
	display: inline-block;
	transform: rotate(0);
  animation: neon-4 linear infinite 2s, 1s linear 2s forwards fallen;

	@keyframes fallen {
	100% {
		transform-origin: -25px 50px;
		transform: rotate(25deg);
	}
}
`;