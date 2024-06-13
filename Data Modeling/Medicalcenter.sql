-- Doctors table
CREATE TABLE Doctors (
    DoctorID INT PRIMARY KEY,
    Name VARCHAR(255),
    Specialty VARCHAR(255),
    EmploymentStartDate DATE,
    EmploymentEndDate DATE
);

-- Patients table
CREATE TABLE Patients (
    PatientID INT PRIMARY KEY,
    Name VARCHAR(255),
    DateOfBirth DATE,
    Gender VARCHAR(10),
    Address VARCHAR(255),
    Phone VARCHAR(20)
);

-- Visits table
CREATE TABLE Visits (
    VisitID INT PRIMARY KEY,
    PatientID INT,
    DoctorID INT,
    VisitDate DATE,
    Symptoms TEXT,
    Diagnosis TEXT,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);

-- Diseases table
CREATE TABLE Diseases (
    DiseaseID INT PRIMARY KEY,
    DiseaseName VARCHAR(255)
);

-- Diagnoses table
CREATE TABLE Diagnoses (
    DiagnosisID INT PRIMARY KEY,
    VisitID INT,
    DiseaseID INT,
    FOREIGN KEY (VisitID) REFERENCES Visits(VisitID),
    FOREIGN KEY (DiseaseID) REFERENCES Diseases(DiseaseID)
);
