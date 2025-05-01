import React from 'react'

// Usage in EditContactPage.jsx
function EditContactPage() {
    return (
      <PageLayout>
        <EditContact.Root contactId={contactId}>
          <div className="right-section">
            <EditContact.Title />
            <EditContact.SubmitButtons />
          </div>
          <div className="content">
            <EditContact.FormInputs />
          </div>
        </EditContact.Root>
      </PageLayout>
    );
  }
  
  // Usage in ContactModal.jsx
  
  function ContactModal({ contactId, onClose }) {
    return (
      <EditContact.Root contactId={contactId}>
        <Modal 
          onClose={onClose}
          title={<EditContact.Title />}
          footer={<EditContact.SubmitButtons />}
        >
          <EditContact.FormInputs />
        </Modal>
      </EditContact.Root>
    );
  }

  import { createContext, useContext, useState, useEffect } from 'react';
// Create the context
const EditContactContext = createContext(null);
// Hook to use the context
function useEditContactContext() {
  const context = useContext(EditContactContext);
  if (!context) {
    throw new Error('EditContact subcomponents must be used within EditContact.Root');
  }
  return context;
}
// Root component that manages state and logic
function Root({ contactId, children }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Fetch contact details
  const { data: contact } = useGetContact(contactId);
  
  // Save contact mutation
  const saveContact = useSaveContact({
    onSuccess: () => {
      // Handle success
    },
    onError: (err) => {
      setError(err.message);
    }
  });
  
  // Set initial form data
  useEffect(() => {
    if (contact) {
      setFormState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      });
    }
  }, [contact]);
  
  // Handle form submission
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await saveContact.mutateAsync({
        id: contactId,
        ...formState
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Context value
  const value = {
    contact,
    formState,
    setFormState,
    error,
    isLoading,
    handleSubmit
  };
  
  return (
    <EditContactContext.Provider value={value}>
      {children}
    </EditContactContext.Provider>
  );
}
// Title component
function Title() {
  const { contact } = useEditContactContext();
  return <>{contact ? `Edit ${contact.name}` : 'Create Contact'}</>;
}
// Submit buttons component
function SubmitButtons() {
  const { handleSubmit, isLoading } = useEditContactContext();
  return (
    <div className="button-group">
      <button 
        className="primary-button" 
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Saving...' : 'Save'}
      </button>
      <button className="secondary-button">Cancel</button>
    </div>
  );
}
// Form inputs component
function FormInputs() {
  const { formState, setFormState, error } = useEditContactContext();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <form className="contact-form">
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
// Export as a compound component
const EditContact = {
  Root,
  Title,
  SubmitButtons,
  FormInputs
};
export default EditContact;