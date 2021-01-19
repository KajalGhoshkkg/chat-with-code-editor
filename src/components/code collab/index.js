import React, {useEffect, useState} from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import fire from "../../Fire";

const CodeCollab = () => {

  const [code, setCode]= useState("")

  useEffect(()=>{
    readFromDatabase()
  },[])
 const readFromDatabase = ()=>{
   fire.database().ref("/code").on("value",(snapshot)=>{
     setCode(snapshot.val().value)
     console.log(snapshot.val())
   })
 }

    const onChange = (val)=>{
        console.log(val)
        fire.database().ref("/code").set({
          value:val,
          lang:"java"
        });
    }
  return (
    <>
    <div style={styles.container}>
    <h2>Code Collaborator</h2>
      <AceEditor
        mode="java"
        theme="github"
        onChange={onChange}
        value={code}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
    </>
  );
};

const styles ={
    container:{
        marginTop:"50px",
        marginBottom:"50px",
        display:"flex",
        flexDirection:"column",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
}

export default CodeCollab;
