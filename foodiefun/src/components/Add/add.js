import React from "react";
import AddPost from "./addPost";

const Add = props => {
  console.log(props);
  return (
    <div className="post">
      {props.addData &&
        props.addData.map((add, index) => (
          <AddPost key={index} addData={add} />
        ))}
      <form action="" onSubmit={props.handleSubmit}>
        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.inputText}
          placeholder="Restaurant Name"
        />
      </form>{" "}
      <form action="" onSubmit={props.handleSubmit}>
        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.inputText}
          placeholder="Restaurant Type"
        />
      </form>
      <h1>Image Goes Here</h1>
      <form action="" onSubmit={props.handleSubmit}>
        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.inputText}
          placeholder="Rating:"
        />
      </form>
      <form action="" onSubmit={props.handleSubmit}>
        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.inputText}
          placeholder="Date Visited:"
        />
      </form>
      <form action="" onSubmit={props.handleSubmit}>
        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.inputText}
          placeholder="Wait Time:"
        />
      </form>
      <form action="" onSubmit={props.handleSubmit}>
        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.inputText}
          placeholder="Comment:"
        />
      </form>
      <button>Submit</button>
    </div>
  );
};

export default Add;
