import React from 'react'

const withAuthenticate = Login => PostPage =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: localStorage.getItem('token') === null ? false : true
            }
        }

        login = () => {
            this.setState({
                loggedIn: true
            });
        }

        render() {
            return (
                this.state.loggedIn === false ?
                    <Login
                        loggedIn={this.state.loggedIn}
                        login={this.login}
                        handleSignIn={this.props.handleSignIn}
                    /> : <PostPage account={this.props.account} data={this.props.data} />
            );
        }
    };

export default withAuthenticate;