import React from "react";
import { StyledProperties, PropertiesList, Property, PropertyImage, PropertyValue } from "./styles";
import Skeleton from "react-loading-skeleton";

function Properties( {hero, newLoading} ) {
  return (
    <StyledProperties>       
      <PropertiesList>
        {hero.stats?.map((stat) => {
          return (
            <Property key={stat.title}>
              <PropertyValue>
                {newLoading ? 
                  <Skeleton 
                    width={22} 
                    baseColor='#b1b1b1' 
                    highlightColor='#d6d6d6' /> : 
                  stat.content}
              </PropertyValue>
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