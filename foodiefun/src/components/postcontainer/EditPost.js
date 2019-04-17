import React from 'react';

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_name: '',
            restaurant_type: '',
            item_name: '',
            item_photo: '',
            food_rating: '',
            date_visited: '',
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
        const id = this.props.match.params.id; //HERE
        this.props.editPost(id, this.state);
        // this.setState({
            
        //     //     restaurant: '',
        //     //     type: '',
        //     //     item_name: '',
        //     //     image: '',
        //     //     rating: '',
        //     //     visited: '',
        //     //     wait: '',
        //     //     comment: ''
           
        // })
    }

    render() {
        return (
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
                Image url: <input
                    type="text"
                    name="item_photo"
                    onChange={this.handleChange}
                />
                Rating: <input
                    type="text"
                    name="food_rating"
                    onChange={this.handleChange}
                />
                Last Visited: <input
                    type="text"
                    name="date_visited"
                    onChange={this.handleChange}
                />
                Wait Time: <input
                    type="text"
                    name="wait_time"
                    onChange={this.handleChange}
                />
                <button onClick={this.updatePost}>Save</button>
            </form>
        )
    }
}

export default EditPost;