
describe('Address Book', function () {
    it('should be able add a contact', function () {

        var addressBook = new AddressBook(),
            thisContact = new Contact();

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });
});