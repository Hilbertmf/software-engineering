class ContactModel {
  constructor() {
    this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.observers = [];
  }
  
  addObserver(observer) {
    this.observers.push(observer);
  }
  
  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.contacts));
  }
  
  addContact(contact) {
    this.contacts.push(contact);
    this.saveContacts();
    this.notifyObservers();
  }
  
  removeContact(index) {
    this.contacts.splice(index, 1);
    this.saveContacts();
    this.notifyObservers();
  }
  
  updateContact(index, contact) {
    this.contacts[index] = contact;
    this.saveContacts();
    this.notifyObservers();
  }
  
  saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
