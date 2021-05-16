import React from 'react';

const ToDoListFilters = (props) => {
    
    return(
        <section className="list-filters">
            <button 
                onClick={()=> props.setFilter({showAll: true}) } 
                className="btn btn-primary">
                All
            </button>
            <button 
                onClick={()=> props.setFilter({showComplete: false}) } 
                className="btn btn-primary">
                Open
            </button>
            <button 
                onClick={()=> props.setFilter({showComplete: true})  } 
                className="btn btn-primary">
                Completed
            </button>
        </section>
    )
};

export default ToDoListFilters;