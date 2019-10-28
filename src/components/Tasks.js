import React from 'react';
import data from '../data/tasks.json';


class Tasks extends React.Component {
  state = {
    tasks: data,
    itemsToShow: 5,
    expanding: true
  };
  
  showMore = () => {
    this.setState(prevState => {
      if (prevState.itemsToShow + 5 >= prevState.tasks.length) {
        return { itemsToShow: prevState.tasks.length, expanding: false };
      } else {
        return { itemsToShow: prevState.itemsToShow + 5 };
      }
    });
  }

  showLess = () => {
    this.setState(prevState => {
      if (prevState.itemsToShow - 5 <= 5) {
        return { itemsToShow: 5, expanding: true };
      } else {
        return { itemsToShow: prevState.itemsToShow - 5 };
      }
    });
  }

  toggleCheckbox = (e) => {
    const index = this.state.tasks.slice(0, this.state.itemsToShow).findIndex(task => {
      return task.id === Number(e.target.id);
    })
    const tasks = [...this.state.tasks];
    tasks[index]['completed'] = !tasks[index]['completed'];

    this.setState({ tasks: tasks });
  }


  render() {
    return (
      <React.Fragment>
        {this.state.tasks.slice(0, this.state.itemsToShow).map(task => {
          return <div key={task.id}>
            <label>
              <input
                id={task.id}
                type='checkbox'
                checked={task.completed}
                onChange={this.toggleCheckbox}
              />
              {task.details}
            </label>
          </div>
        })}

        <button onClick={this.state.expanding ? this.showMore : this.showLess}>
          {this.state.expanding ? 'Show More' : 'Show Less'}
        </button>

      </React.Fragment>
    );
  }
}

export default Tasks;