import React, { Component } from "react";
import Container from "./Container";
import Card from "./Card";
import TodoForm from "./TodoForm";
import ItemList from "./ItemList";

class Todo extends Component {
  state = {
    counter: 0,
    total_todo: 0,
    list: [],
  };

  handleSubmission = (task, date) => {
    const counter = this.state.counter + 1;
    const total_todo = this.state.total_todo + 1;
    this.setState({ counter, total_todo });
    const list = [
      ...this.state.list,
      {
        id: this.state.counter,
        task: task,
        date: date,
      },
    ];
    this.setState({ list });
  };

  handleRemoveClick = (id) => {
    const total_todo = this.state.total_todo - 1;
    const list = this.state.list.filter((item) => item.id !== id);
    this.setState({ list, total_todo });
  };

  render() {
    return (
      <>
        <Container>
          <Card>
            <div className="text-center">
              <h1>Add Todo</h1>
            </div>
            <TodoForm onSubmit={this.handleSubmission} />
            <ItemList onRemoveClick={this.handleRemoveClick} total_no={this.state.total_todo} list={this.state.list} />
          </Card>
        </Container>
      </>
    );
  }
}

export default Todo;
