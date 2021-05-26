import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT, 
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1, 
                name: 'Boaty McBoatFace',
                email: 'boaty@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2, 
                name: 'Kurt Vile',
                email: 'kurt@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 3, 
                name: 'Ozzy Osborne',
                email: 'ozzy@gmail.com',
                phone: '333-333-333',
                type: 'personal'
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = uuid.v4;
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    //Delete Contact
    const deleteContact = id => {
        // contact.id = uuid.v4;
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    //Set Current Contact
    const setCurrent = contact => {
        // contact.id = uuid.v4;
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    //Clear Current Contact
    const clearCurrent = (contact) => {
        // contact.id = uuid.v4;
        dispatch({ type: CLEAR_CURRENT });
    };
    //Update Contact
    const updateContact = contact => {
        // contact.id = uuid.v4;
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };
    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;