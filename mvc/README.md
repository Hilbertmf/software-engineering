### Test the observer:
run those lines of code in the console to test the observer:
```
const model = app.model;
model.addContact({ name: 'New Contact', phone: '123-456-7890' });
model.removeContact(0);
model.updateContact(0, { name: 'Updated Contact', phone: '987-654-3210' });
```
