import React from 'react';

class TodoList extends React.Component {
    render() {
      return (
        <div>
          Todo: {this.props.listData}
        </div>
      );
    }
  }
  
  export default TodoList;