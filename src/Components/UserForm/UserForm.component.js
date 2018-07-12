import React from 'react';
import { Form, Input } from 'antd';
import { Button } from 'antd/lib/radio';

const FormItem = Form.Item;

class UserForm extends React.component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log()
  }

  render() {
    return (
      <Form onSubmit={}>
        <FormItem>
          <Input
            placeholder="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </FormItem>
        <FormItem>
          <Input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" />
        </FormItem>
      </Form>
    );
  }
}

export default UserForm;