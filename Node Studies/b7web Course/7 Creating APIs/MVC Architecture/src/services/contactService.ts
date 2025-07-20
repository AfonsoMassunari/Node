import * as ContactModel from '../models/contact';

//Add a new contact
//List all contacts
//Get one specific contact
//Delete all contacts

export const getContacts = async () => {
    const list = await ContactModel.getContacts();
    return list;
};

export const createContact = async (name: string) => {
    await ContactModel.createContact(name);
};

export const deleteContact = async (name: string) => {
    await ContactModel.deleteContact(name);
};
