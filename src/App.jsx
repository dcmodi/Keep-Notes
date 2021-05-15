import React, { useState } from "react";
import "./bootstrap.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "./App.css";

var App = () => {
  return (
    <>
      <Header />
      <CreateNote/>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className={"container-fluid header"}>
        <h3 className={"ml-4"}>Google Keep</h3>
      </div>
    </>
  );
};

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, createNotes] = useState([]);
  var addNote = () => {
    let n = {
      title: title,
      note: note,
    };
    setTitle("")
    setNote("")
    createNotes((prevData) => {
      return [...prevData, n];
    });
  };
  var deleteItem = (id) => {
    createNotes((oldData) => {
      return oldData.filter((item, index) => index !== id);
    });
  };
  return (
    <>
      <div
        className={
          "container-fluid d-flex justify-content-center align-items-center vh-25 mt-6"
        }
      >
        <div className={"note-container"}>
          <b>
            <input
              type="text"
              className={"border-0 ml-4 mt-4 input"}
              placeholder="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </b>
          <br />
          <hr
            style={{
              marginLeft: "10px",
              width: "250px",
            }}
          />
          <textarea
            rows={"5"}
            cols={"22"}
            className={"border-0 ml-4 mb-3 input"}
            placeholder={"Enter Note"}
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="plus-container">
          <AddIcon
            className={"plus-button"}
            style={{
              fontSize: "60px",
            }}
            onClick={addNote}
          />
        </div>
      </div>

      <div className={"container-fluid mt-5 notes"}>
        <div className={"row mt-3"}>
          {notes.map((note, index) => {
            return (
              <Notes
                data={note}
                key={index}
                index={index}
                delete={deleteItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const Notes = (props) => {
  var deleteNote = () => {
    props.delete(props.index);
  };
  return (
    <>
      <div className={"col-4 mt-4"}>
        <div className={"ml-3 note"}>
          <h5 className={"ml-4 pt-4"}>{props.data.title}</h5>
          <hr
            style={{
              marginLeft: "10px",
              width: "250px",
            }}
          />
          <p className={"ml-4 mb-4"}>{props.data.note}</p>
          <div className={"d-flex justify-content-end"}>
            <p className={"text-muted text-center mr-4 delete"}>
              <DeleteOutlineIcon
                className={"delete-btn"}
                onClick={deleteNote}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
