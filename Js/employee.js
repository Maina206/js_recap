// Constructor function for Employee
function Employee(
  employeeId,
  firstName,
  lastName,
  nationalId,
  kraPin,
  gender,
  dateOfBirth,
  phoneNumber,
  email,
  address,
  jobTitle,
  department,
  dateHired,
  contractType,
  salary,
  nhifNumber,
  nssfNumber,
  nextOfKin,
  emergencyContact
) {
  this.employeeId = employeeId;
  this.firstName = firstName;
  this.lastName = lastName;
  this.nationalId = nationalId;
  this.kraPin = kraPin;
  this.gender = gender;
  this.dateOfBirth = dateOfBirth;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.address = address;
  this.jobTitle = jobTitle;
  this.department = department;
  this.dateHired = dateHired;
  this.contractType = contractType;
  this.salary = salary;
  this.nhifNumber = nhifNumber;
  this.nssfNumber = nssfNumber;
  this.nextOfKin = nextOfKin;
  this.emergencyContact = emergencyContact;
}

// Create nested objects
const address = {
  county: "Nairobi",
  subCounty: "Westlands",
  ward: "Parklands",
  postalCode: "00100",
  physicalAddress: "P.O. Box 1234-00100 Nairobi",
};

const nextOfKin = {
  name: "Mary Wanjiku",
  relationship: "Sister",
  phoneNumber: "+254711223344",
};

const emergencyContact = {
  name: "David Kamau",
  relationship: "Friend",
  phoneNumber: "+254700112233",
};

// Create a new Employee object
const employee1 = new Employee(
  "EMP001",
  "John",
  "Mwangi",
  "12345678",
  "A001234567B",
  "Male",
  "1990-06-15",
  "+254712345678",
  "john.mwangi@example.com",
  address,
  "Software Developer",
  "IT",
  "2022-01-10",
  "Full-Time",
  120000,
  "NHIF123456",
  "NSSF987654",
  nextOfKin,
  emergencyContact
);

// Log output
console.log(employee1.getSummary()); // John Mwangi works in IT as a Software Developer
console.log(employee1.nextOfKin.name); // Mary Wanjiku
console.log(employee1.address.county); // Nairobi
