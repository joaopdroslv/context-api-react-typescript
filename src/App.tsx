import { ProductsPage } from "./pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ROUTES } from "./routes";
import React, { useState } from "react";
import { MultiSelectInput } from "./components/ui/MultiSelectInput";

// export const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path={ROUTES.PRODUCTS} element={<ProductsPage />}></Route>
//       </Routes>
//     </Router>
//   );
// }

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

export const App = () => {
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

  return (
    <>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-lg font-bold mb-2">MultiSelect com Tags</h1>
        <MultiSelectInput<User>
          options={users}
          selected={selectedUsers}
          setSelected={setSelectedUsers}
          toSelect="id"
          toDisplay="name"
          placeholder="Select a user..."
        />
        <div className="mt-4 text-sm">
          <strong>IDs:</strong> {JSON.stringify(selectedUsers)}
        </div>
      </div>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-lg font-bold mb-2">MultiSelect com Tags</h1>
        <MultiSelectInput<Role>
          options={roles}
          selected={selectedRoles}
          setSelected={setSelectedRoles}
          toSelect="id"
          toDisplay="name"
          placeholder="Select a role..."
        />
        <div className="mt-4 text-sm">
          <strong>IDs:</strong> {JSON.stringify(selectedRoles)}
        </div>
      </div>
    </>
  );
};
