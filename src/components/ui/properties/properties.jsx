import React from "react";
import { StyledProperties, PropertiesList, Property, PropertyImage, PropertyValue } from "./styles";

function Properties( {stats} ) {
  return (
    <StyledProperties>       
      <PropertiesList>
        {stats?.map((stat) => {
          return (
            <Property key={stat.title}>
                            <PropertyValue>{stat.content}</PropertyValue>
              <PropertyImage src={stat.image} alt={stat.title}/>

            </Property>
          )
        })
        }
      </PropertiesList>
    </StyledProperties>
  );
}


export default Properties;