import React from "react";
import NavBar from "../postcontainer/NavBar";
// import axios from "axios";

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

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: "",
      restaurant_type: "",
      item_name: "",
      item_photo: "",
      food_rating: null,
      wait_time: "",
      item_comment: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updatePost = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    const meal = {
      ...this.state,
      food_rating: parseInt(this.state.food_rating)
    };
    this.props.editPost(id, meal);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <NavBar />
        <h2 className="form-heading">Update Post</h2>
        <form className="post-form">
          <input
            type="text"
            name="restaurant_name"
            onChange={this.handleChange}
            placeholder="Restaurant Name:"
          />
          <input
            type="text"
            name="restaurant_type"
            onChange={this.handleChange}
            placeholder="Restaurant Type:"
          />
          <input
            type="text"
            name="item_name"
            onChange={this.handleChange}
            placeholder="Item Name (Required): "
          />
          <input
            type="text"
            name="item_photo"
            onChange={this.handleChange}
            placeholder="Image url:"
          />
          <input
            type="text"
            name="food_rating"
            onChange={this.handleChange}
            placeholder="Rating:"
          />
          <input
            type="text"
            name="wait_time"
            onChange={this.handleChange}
            placeholder="Wait Time:"
          />
          <input
            className="addPost"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.item_comment}
            placeholder="Comment:"
            name="item_comment"
          />
          <button type="submit" onClick={this.updatePost} className="btn">
            Save
          </button>
        </form>
      </>
    );
  }
}

export default EditPost;
