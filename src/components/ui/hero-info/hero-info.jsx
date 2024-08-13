import React, { useState } from "react";

function HeroInfo( {hero} ) {
  const [activeTab, setActiveTab] = useState(0);

  const tabsList = [
    {
      title: "Main",
      content: (
        <>        
          <p>{hero.id}</p>
          <p>его имя {hero.name}</p>
        </>
      ),
    },
    {
      title: "Характеристики",
      content: 
        <>        
          <p>{hero.id}</p>
          <p>{hero.name}</p>
        </>,
    },
    {
      title: "Свойства",
      content: 
        <>        
          <p>{hero.id}</p>
          <p>ghbdtn</p>
        </>,
    },
  ];

  return (
    <div>
        {tabsList?.length &&
          tabsList.map((tabName, index) => (
            <button
              key={index}
              // $active={index === activeTab}
              {...(index === activeTab
                ? {}
                : { onClick: () => setActiveTab(index) })}
            >
              <span>{tabName.title}</span>
            </button>
          ))}
          <div>{tabsList[activeTab].content}</div>
      </div>
  );
}

export default HeroInfo;