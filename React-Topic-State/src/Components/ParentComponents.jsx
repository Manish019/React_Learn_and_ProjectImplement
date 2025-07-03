import React from "react";
import ChildComponents from "./ChildComponents";


function ParentComponents() {
  return (
   <>
   <div className="text-amber-600">
    <h1 className="text-2xl">This is Parent Componets</h1>
    <h2>Props is Pass from parent to child Component</h2>
 
       <ChildComponents Books="Math" Subject="English" />
   </div>
   </>

  )
}

export default ParentComponents;