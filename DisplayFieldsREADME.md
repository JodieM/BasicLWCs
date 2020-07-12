# Display Fields
A simple LWC to display a fixed set of Fields in a Component. 

Features:

* A simple Card layout
* Read Only field values
* Uses getRecord, getFieldValue and getFieldDisplayValue
* Returns the DisplayValue if that field has a DisplayValue - no need for you to hard code which fields are which
* Includes basic Error Handling
* Displays like Standard Fields

Pros:

* Easy to create
* Uses LDS, so no Apex requried
* Fields referenced in the Component are prevented from being deleted because the LWC creates a metadata dependency on the field

Cons:

* Hard Coded to Account
* Only the fixed fields that are hard coded into the Component
* Not particularly useful

Non-Code Alternatives:

* Create a Quick Action and set each field to Read Only and display the Quick Action in a Related Record Component