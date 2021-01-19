import React, { useState, useEffect } from "react";
// import Navbar from "../navbar/Navbar";
import { Grid, TextField, Button } from "@material-ui/core";
import fire from "../../Fire";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setMsg(e.target.value);
  };
  useEffect(() => {
    readDataFromDatabase();
  }, []);
  const hndleClick = () => {
    fire.database().ref("/chat").push({
      message: msg,
      user: "abc",
    });

    // alert(msg)
  };
  const readDataFromDatabase = () => {
    fire
      .database()
      .ref("/chat")
      .on("value", (snapshot) => {
        const showMsg = [];
        const messages = snapshot.val();

        for (let key in messages) {
          // console.log(messages[key]);
          showMsg.push(messages[key]);
        }
        setMsgs(showMsg);
      });
  };
  console.log("messages", msgs);
  return (
    <>
      {/* <Navbar /> */}
      <div style={styles.container}>
        <Grid container justify="center">
          <Grid item xs={5} style={styles.chatContainer}>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "tomato",
                  padding: "10px",
                  color: "white",
                }}
              >
                hakora
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                height: "40vh",
                backgroundColor: "#d1d1d1",
                overflow: "auto",
              }}
            >
              <Grid item xs={12}>
                {msgs.map((message, i) => {
                  return (
                    <p key={i}>
                      {message.message} -- {message.user}
                    </p>
                  );
                })}
              </Grid>
            </Grid>
            <Grid
              container
              style={{ padding: 5 }}
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={10}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  placeholder="enter your text"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  onClick={hndleClick}
                  color="primary"
                >
                  send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
const styles = {
  container: {
    minHeight: "100vh",
    marginTop: 50,
  },
  chatContainer: {
    border: "2px solid rgba(0,0,0,.5)",
    // backgroundColor:"black",
    height: "60vh",
  },
};

export default Chat;
