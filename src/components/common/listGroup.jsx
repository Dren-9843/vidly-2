import React from 'react';

const ListGroup = props => {

    const { items, 
        textProperty, 
        valueProperty, 
        selectedItem, 
        onItemSelect 
    } = props;


    return (
    <ul className="list-group">
        { items.map(item => (
        <li onClick={() => onItemSelect(item)}
        key={item[valueProperty]} 
        className="list-group-item">
            {item[textProperty]}
        </li>
        ))}
 </ul>
    )
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

export default ListGroup

