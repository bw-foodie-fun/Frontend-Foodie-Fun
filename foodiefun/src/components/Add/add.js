import React from "react";
import AddPost from "./addPost";
import axios from "axios";

async function submitPicture(e) {
  const file = e.target.files[0];
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "foodie-fun");
  let {
    data: { url, secure_url }
  } = await axios.post(
    "https://api.cloudinary.com/v1_1/foodie-fun/image/upload",
    data
  );
}

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
          value={props.restaurantName}
          name="restaurantName"
          placeholder="Restaurant Name"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.restaurantType}
          name="restaurantType"
          placeholder="Restaurant Type"
        />

        <input
          type="file"
          onChange={file => submitPicture(file)}
          name="image"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.rating}
          placeholder="Rating:"
          name="rating"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.date}
          placeholder="Date Visited:"
          name="date"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.wait}
          placeholder="Wait Time:"
          name="wait"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.comment}
          placeholder="Comment:"
          name="comment"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Add;
