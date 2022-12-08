import styled from "styled-components";

export const ButtonContainer = styled.button`
    flex: 1;
    box-shadow: inset 0px 1px 3px 0px #91b8b3;
	background: linear-gradient(to bottom, #242928 5%, #6c7c7c 100%);
	background-color: #242928;
	border-radius: 5px;
	border: 1px solid #232424;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-size: 20px;
	font-weight: bold;
	padding: 15px 23px;
	text-decoration: none;
	text-shadow: 0px -1px 0px #050505;

    &:hover {
        background: linear-gradient(to bottom, #6c7c7c 5%, #242928 100%);
	    background-color: #6c7c7c;
    }

    &:active {
        position: relative;
	    top: 1px;
    }
`