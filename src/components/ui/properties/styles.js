import styled from "styled-components";

export const StyledProperties = styled.div`
  margin: 0;
  position: absolute;
  top: 20px;
  height: calc(100% - 60px);
  border-radius: 0 10px 0 20px;
`;

export const PropertiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  color: red;
  font-weight: 700;
  margin: 0;
  padding: 0;
  padding-top: 20px;
`;

export const Property = styled.li`
  border: 1px solid red;
  border-radius: 50%;
  background-color: white;
  margin: 0;
  padding: 0;
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-align: center;
`;

export const PropertyImage = styled.img`
  display: block;
  height: 30px;
  width: 30px;
`;

export const PropertyValue = styled.p`
  margin: 0;
  padding: 0;
`;