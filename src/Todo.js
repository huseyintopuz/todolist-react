import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import './todo.css'

const Todo = (props) => {
    return (
        <List className="text">
            <ListItem>
                <ListItemText primary={props.text} secondary="deadline" />
            </ListItem>
        </List>
    )
}

export default Todo
