function AddressBook() {
  this.contacts = [];
  this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cd) {
  var self = this;

  setTimeout(() => {
    self.initialComplete = true;

    if (cd) {
      return cd();
    }
  }, 3);
};

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(index) {
  return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(index) {
  this.contacts.splice(index, 1);
};
