import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

// name, email, imageurl
export const App = () => (
  <div>
    <h1>Welcome to Oak121213!</h1>
    <ContactForm />
    <ContactList />
  </div>
);
