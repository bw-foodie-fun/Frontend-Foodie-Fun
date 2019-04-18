import React from 'react';
import NavBar from "../postcontainer/NavBar";
import axios from 'axios';

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

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_name: '',
            restaurant_type: '',
            item_name: '',
            item_photo: '',
            food_rating: null,
            // date_visited: '',
            wait_time: '',
            item_comment: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updatePost = event => {
        event.preventDefault();
        const id = this.props.match.params.id;
        const meal = {
            ...this.state,
            food_rating: parseInt(this.state.food_rating)
        }
        this.props.editPost(id, meal);
        this.setState({
            restaurant_name: '',
            restaurant_type: '',
            item_name: '',
            item_photo: '',
            food_rating: '',
            date_visited: '',
            wait_time: '',
            item_comment: ''
        })
    }

    render() {
        return (
            <>
                <NavBar/>
                <form className="edit-post-form">
                    <h3>Update Post</h3>
                    Restaurant Name: <input
                        type="text"
                        name="restaurant_name"
                        onChange={this.handleChange}
                    />
                    Type: <input
                        type="text"
                        name="restaurant_type"
                        onChange={this.handleChange}
                    />
                    Item: <input
                        type="text"
                        name="item_name"
                        onChange={this.handleChange}
                    />
                    Image: <input
                        type="file"
                        name="item_photo"
                        onChange={this.handleChange}
                    />
                    Rating: <input
                        type="text"
                        name="food_rating"
                        onChange={this.handleChange}
                    />
                    {/* Last Visited: <input
                        type="text"
                        name="date_visited"
                        onChange={this.handleChange}
                    /> */}
                    Wait Time: <input
                        type="text"
                        name="wait_time"
                        onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.updatePost}>Save</button>
                </form>
            </>
        )
    }
}

export default EditPost;