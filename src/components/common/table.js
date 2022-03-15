import React from "react";
import { Pagination, Form } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { useSticky } from "react-table-sticky";

import { Styles } from "./styles";

const DefaultColumnFilter = ({ column: { filterValue, setFilter } }) => {
  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search`}
    />
  );
};

const TablePagintaion = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageOptions,
  pageIndex,
  setPageSize,
  pageSize,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Pagination style={{ marginBottom: "0px" }}>
        <Pagination.First
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
        <Pagination.Prev
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        />
        {pageOptions.map((p, index) => (
          <Pagination.Item
            active={index === pageIndex}
            onClick={() => gotoPage(index)}
          >
            {index + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
        <Pagination.Last
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </Pagination>

      <Form.Select style={{ width: "10%" }}>
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export const Table = ({ columns, data }) => {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
      minWidth: 150,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination,
    useSticky
  );

  return (
    <Styles>
      <BTable
        className="table sticky"
        striped
        bordered
        hover
        responsive={"xl"}
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, key) => {
                const props = {
                  ...column.getHeaderProps(column.getSortByToggleProps()),
                };

                return (
                  <td
                    data-sticky-last-left-td={props["data-sticky-last-left-td"]}
                    data-sticky-td={props["data-sticky-td"]}
                    style={props["style"]}
                    key={`thead_${key}`}
                  >
                    <span
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      style={{ boxShadow: "none" }}
                    >
                      {column.render("Header")}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={`tr_${i}`}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>
      <TablePagintaion
        page={page}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </Styles>
  );
};
