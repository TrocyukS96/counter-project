import React from "react"

export class TestClass extends React.Component<{}, { username: string }> {
    constructor(props: any) {
        super(props)
        this.state = {username: 'johndoe'}
        console.log('Constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ username: string }>, snapshot?: any) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        return false

    }

    handleInputChange(username: string) {
        this.setState({username})
    }

    render() {
        const {username} = this.state
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={event => this.handleInputChange(event.target.value)}
                    />
                </div>
                <p>Your username is, {username}</p>
            </div>
        )
    }
}