import React, {useState} from "react";


const Tabs =({tabs})  => {
    let [tabClicked, setTabClicked] =useState("")

    function handleClick(content){
        setTabClicked(content)
    }


    return(
        <div>
            <ul>
                {
                    tabClicked.map((value)=>
                    <li onClick={()=>handleClick(value.content)}>{value.title}</li>
                    
                    )
                }
            </ul>
            {
                tabClicked && <p>This is the content for {tabClicked}</p>
            }

        </div>
    )
}


export default Tabs;