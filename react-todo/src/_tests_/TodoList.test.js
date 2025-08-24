import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList'; 

describe('TodoList Component', () => {
  test('renders without crashing', () => {
    render(<TodoList />);
    
    // Check if heading exists
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
    expect(screen.getByText(/Refactor Code/i)).toBeInTheDocument();
  });

   test('adds a new todo', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add new todo/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'Write tests' } });

    fireEvent.click(addButton);

    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('toggles a todo completed status', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn React');

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);

    // Grab a todo item and its Delete button (e.g., "Build a Todo App")
    const todoText = screen.getByText('Build a Todo App');
    
    const deleteButtons = screen.getAllByText('Delete');

    const todoItem = todoText.closest('li');
    const deleteButton = todoItem.querySelector('button');

    // Click the Delete button
    fireEvent.click(deleteButton);

    // The todo should no longer be in the document
    expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
  });
});
