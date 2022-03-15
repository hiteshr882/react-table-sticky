import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Table } from "./components/common/table";

function App() {
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

// dummy columns and data
const columns = [
  {
    Header: "Firstname",
    accessor: "first_name",
    sticky: "left",
  },
  {
    Header: "Lastname",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Address",
    accessor: "address",
    disableFilters: true,
  },

  {
    Header: "Address Line 1",
    accessor: "address1",
    disableFilters: true,
  },

  {
    Header: "Address Line 2",
    accessor: "address2",
    disableFilters: true,
  },
  {
    Header: "Pincode",
    accessor: "pin",
    disableFilters: true,
  },
  {
    Header: "State",
    accessor: "state",
    disableFilters: true,
  },
];

const data = [
  {
    first_name: "Test",
    last_name: "1",
    email: "test@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "2",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "3",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "4",
    email: "test4@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "5",
    email: "test5@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "6",
    email: "test6@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "1",
    email: "test@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "2",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "3",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "4",
    email: "test4@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "5",
    email: "test5@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "6",
    email: "test6@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "1",
    email: "test@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "2",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "3",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "4",
    email: "test4@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "5",
    email: "test5@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "6",
    email: "test6@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "1",
    email: "test@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "2",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "3",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "4",
    email: "test4@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "5",
    email: "test5@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "6",
    email: "test6@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "1",
    email: "test@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "2",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "3",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "4",
    email: "test4@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "5",
    email: "test5@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "6",
    email: "test6@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "1",
    email: "test@test.com",
    phone: 123123123,
  },
  {
    first_name: "Test",
    last_name: "2",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "3",
    email: "test2@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "4",
    email: "test4@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "5",
    email: "test5@test.com",
    phone: 123123123,
  },

  {
    first_name: "Test",
    last_name: "6",
    email: "test6@test.com",
    phone: 123123123,
  },
];

export default App;
