import React from "react";
import AddPost from "./addPost";
// import axios from "axios";
import NavBar from "../postcontainer/NavBar";

// async function submitPicture(e) {
//   const file = e.target.files[0];
//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload_preset", "foodie-fun");
//   let {
//     data: { url, secure_url }
//   } = await axios.post(
//     "https://api.cloudinary.com/v1_1/foodie-fun/image/upload",
//     data
//   );
// }

const Add = props => {
  console.log(props);
  return (
    <div className="post">
      <NavBar />
      {props.addData &&
        props.addData.map((add, index) => (
          <AddPost key={index} addData={add} />
        ))}
      <h2 className="form-heading">Add Post</h2>
      <form action="" onSubmit={props.handleSubmit} className="post-form">
        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.restaurant_name}
          name="restaurant_name"
          placeholder="Restaurant Name:"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.restaurant_type}
          name="restaurant_type"
          placeholder="Restaurant Type:"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.item_name}
          placeholder="Item Name (Required):"
          name="item_name"
        />

        <input
          type="text"
          onChange={props.handleChange}
          name="item_photo"
          value={props.item_photo}
          placeholder="Image url:"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.food_rating}
          placeholder="Rating:"
          name="food_rating"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.wait_time}
          placeholder="Wait Time:"
          name="wait_time"
        />

        <input
          className="addPost"
          type="text"
          onChange={props.handleChange}
          value={props.item_comment}
          placeholder="Comment:"
          name="item_comment"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Add;
