class ContactView {
  constructor() {
    this.contactList = document.getElementById('contactList');
    this.showContactsButton = document.getElementById('showContacts');
    this.showContactsButton.addEventListener('click', () => this.onShowContacts());
  }
  
  render(contacts) {
    this.contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
      const li = document.createElement('li');
      const contactInfo = document.createElement('div');
      contactInfo.classList.add('contact-info');
      contactInfo.innerHTML = `<span>${contact.name} - ${contact.phone}</span>`;
      
      const buttonContainer = document.createElement('div');
      
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        this.onDeleteClick(index);
      });
      
      const updateButton = document.createElement('button');
      updateButton.classList.add('update');
      updateButton.textContent = 'Update';
      updateButton.addEventListener('click', () => {
        this.onUpdateClick(index);
      });
      
      buttonContainer.appendChild(deleteButton);
      buttonContainer.appendChild(updateButton);
      
      li.appendChild(contactInfo);
      li.appendChild(buttonContainer);
      this.contactList.appendChild(li);
    });
  }
  
  bindDeleteContact(handler) {
    this.onDeleteClick = handler;
  }
  
  bindUpdateContact(handler) {
    this.onUpdateClick = handler;
  }
  
  bindShowContacts(handler) {
    this.onShowContacts = handler;
  }
  
  update(contacts) {
    this.render(contacts);
  }
}
