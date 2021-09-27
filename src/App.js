import React from "react";
// import "./styles.css";

const apiAdminList = [
  { id: 1, name: "Admin 1" },
  { id: 2, name: "Admin 2" },
  { id: 3, name: "Admin 3" }
];

const apiLabList = [
  { id: 1, name: "Lab 1", adminId: "1" },
  { id: 2, name: "Lab 2", adminId: "1" },
  { id: 3, name: "Lab 3", adminId: "2" }
];

const apiCompanyList = [
  { id: 1, name: "Company 1", labId: "1" },
  { id: 2, name: "Company 2", labId: "1" },
  { id: 3, name: "Company 3", labId: "3" },
  { id: 4, name: "Company 4", labId: "2" },
  { id: 5, name: "Company 5", labId: "2" },
  { id: 6, name: "Company 6", labId: "2" }
];

const apiClinicianList = [
  { id: 1, name: "Clinician 1", companyId: "2" },
  { id: 2, name: "Clinician 2", companyId: "2" },
  { id: 3, name: "Clinician 3", companyId: "3" }
];

export default function App() {
	
  const [selectedAdmin, setSelectedAdmin] = React.useState();
  const [selectedLab, setSelectedLab] = React.useState();
  const [selectedCompany, setSelectedCompany] = React.useState();
  const [selectedClinician, setSelectedClinician] = React.useState();

  const setAdmin = (e) => {
    const {
      target: { value }
    } = e;
    setSelectedAdmin(value);
    setSelectedLab();
    setSelectedCompany();
    setSelectedClinician();
  };

  const setLab = (e) => {
    const {
      target: { value }
    } = e;
    setSelectedLab(value);
    setSelectedCompany();
    setSelectedClinician();
  };

  const setCompany = (e) => {
    const {
      target: { value }
    } = e;
    setSelectedCompany(value);
    setSelectedClinician();
  };

  const setClinician = (e) => {
    const {
      target: { value }
    } = e;
    setSelectedClinician(value);
  };

  return (
    <div className="App">
      <select onChange={setAdmin}>
        <option value="">Please select admin</option>
        {apiAdminList.map((admin) => (
          <option value={admin.id} key={admin.id}>
            {admin.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      <select disabled={!selectedAdmin} onChange={setLab}>
        <option value="">Please select lab</option>
        {selectedAdmin &&
          apiLabList
            .filter((a) => a.adminId === selectedAdmin)
            .map((lab) => (
              <option value={lab.id} key={lab.id}>
                {lab.name}
              </option>
            ))}
      </select>
      <br />
      <br />
      <select disabled={!selectedLab} onChange={setCompany}>
        <option value="">Please select company</option>
        {selectedLab &&
          apiCompanyList
            .filter((a) => a.labId === selectedLab)
            .map((company) => (
              <option value={company.id} key={company.id}>
                {company.name}
              </option>
            ))}
      </select>
      <br />
      <br />
      <select disabled={!selectedCompany}>
        <option value="">Please select clinician</option>
        {selectedCompany &&
          apiClinicianList
            .filter((a) => a.companyId === selectedCompany)
            .map((clinician) => (
              <option value={clinician.id} key={clinician.id}>
                {clinician.name}
              </option>
            ))}
      </select>
    </div>
  );
}
