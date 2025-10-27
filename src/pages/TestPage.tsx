import React, { useState } from "react";
import { MultiSelectInput } from "../components/ui/MultiSelectInput";
import { RangeSlider } from "../components/ui/RangeSliderInput";

interface User {
  id: number;
  name: string;
  username: string;
}

interface Role {
  id: number;
  name: string;
  salary: number;
}

export const TestPage = () => {
  const users: User[] = [
    { id: 1, name: "John Smith", username: "johns" },
    { id: 2, name: "Mary Johnson", username: "maryj" },
    { id: 3, name: "Charles Brown", username: "charlieb" },
    { id: 4, name: "Anna Davis", username: "annad" },
    { id: 5, name: "Lucas Miller", username: "lucasm" },
    { id: 6, name: "Samantha Wilson", username: "samw" },
    { id: 7, name: "Brian Moore", username: "brianm" },
    { id: 8, name: "Julia Taylor", username: "juliat" },
    { id: 9, name: "Richard Anderson", username: "richa" },
    { id: 10, name: "Patricia Thomas", username: "patt" },
    { id: 11, name: "Michael Harris", username: "mikeh" },
    { id: 12, name: "Emma Clark", username: "emmac" },
    { id: 13, name: "Daniel Lewis", username: "daniell" },
    { id: 14, name: "Olivia Walker", username: "oliviaw" },
    { id: 15, name: "Henry Hall", username: "henryh" },
  ];

  const roles: Role[] = [
    { id: 1, name: "Developer", salary: 15000 },
    { id: 2, name: "Tech Lead", salary: 20000 },
    { id: 3, name: "Project Manager", salary: 22000 },
    { id: 4, name: "QA Engineer", salary: 14000 },
    { id: 5, name: "UI/UX Designer", salary: 16000 },
    { id: 6, name: "System Administrator", salary: 18000 },
    { id: 7, name: "Data Analyst", salary: 17000 },
    { id: 8, name: "DevOps Engineer", salary: 21000 },
    { id: 9, name: "Product Owner", salary: 23000 },
    { id: 10, name: "Support Engineer", salary: 13000 },
    { id: 11, name: "Business Analyst", salary: 17500 },
    { id: 12, name: "Frontend Developer", salary: 15500 },
    { id: 13, name: "Backend Developer", salary: 16500 },
    { id: 14, name: "Scrum Master", salary: 19500 },
    { id: 15, name: "CTO", salary: 30000 },
  ];

  const [selectedUsers, setSelectedUsers] = useState<(string | number)[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<(string | number)[]>([]);
  const [values, setValues] = useState<[number, number]>([0, 999]);
  const [min, max]: [number, number] = [0, 999];

  return (
    <div className="max-w-xl mx-auto mt-8 flex flex-col justify-start">
      <div className="p-4 max-w-full">
        <h1 className="text-md font-bold mb-2">Pick one or multiple users</h1>
        <MultiSelectInput
          options={users}
          selected={selectedUsers}
          setSelected={setSelectedUsers}
          keyToSelect="id"
          keyToDisplay="name"
          placeholder="Select a user..."
        />
        <div className="mt-4 text-sm">
          <strong>IDs:</strong> {JSON.stringify(selectedUsers)}
        </div>
      </div>
      <div className="p-4 max-w-full">
        <h1 className="text-md font-bold mb-2">Pick one or multiple roles</h1>
        <MultiSelectInput
          options={roles}
          selected={selectedRoles}
          setSelected={setSelectedRoles}
          keyToSelect="id"
          keyToDisplay="name"
          placeholder="Select a role..."
        />
        <div className="mt-4 text-sm">
          <strong>IDs:</strong> {JSON.stringify(selectedRoles)}
        </div>
      </div>
      <div className="p-4 max-w-full">
        <h1 className="text-lg font-bold mb-2">Pick a max n min value</h1>
        <RangeSlider
          min={min}
          max={max}
          step={1}
          values={values}
          setValues={setValues}
        />
        <div className="mt-4 text-sm">
          <strong>Values:</strong> {values[0]} - {values[1]}
        </div>
      </div>
    </div>
  );
};
