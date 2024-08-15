import React from "react";
import { StyledProperties, PropertiesList, Property, PropertyImage, PropertyValue } from "./styles";

function Properties( {stats} ) {
  return (
    <StyledProperties>       
      <PropertiesList>
        {stats?.map((stat) => {
          return (
            <Property>
              <PropertyImage src={stat.image} />
              <PropertyValue key={stat.title}>{stat.content}</PropertyValue>
            </Property>
          )
        })
        }
      </PropertiesList>
    </StyledProperties>
  );
}


export default Properties;