class ContactController {
  constructor() {
    this.model = new ContactModel();
    this.view = new ContactView();
    this.view.bindDeleteContact(this.handleDeleteContact.bind(this));
    this.view.bindUpdateContact(this.handleUpdateContact.bind(this));
    this.view.bindShowContacts(this.handleShowContacts.bind(this));
    this.model.addObserver(this.view);
    document.getElementById('contactForm').addEventListener('submit', this.handleAddContact.bind(this));
  }
  
  handleAddContact(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    if (name && phone) {
      this.model.addContact({ name, phone });
      document.getElementById('contactForm').reset();
    }
  }
  
  handleDeleteContact(index) {
    this.model.removeContact(index);
  }
  
  handleUpdateContact(index) {
    const newName = prompt('Enter new name:');
    const newPhone = prompt('Enter new phone number:');
    
    if (newName && newPhone) {
      this.model.updateContact(index, { name: newName, phone: newPhone });
    }
  }
  
  handleShowContacts() {
    const contacts = this.model.contacts;
    this.view.update(contacts);
  }
}
