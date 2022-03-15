import styled from "styled-components";

export const Styles = styled.div`
  .table {
    tr,
    td {
      z-index: 1 !important;
    }
    &.sticky {
      overflow: scroll;

      thead {
        position: relative;
        z-index: 0;
      }

      thead {
        top: 0;
      }

      tbody {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky !important;
        z-index: 99999 !important;
        background: #ffffff !important;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`;
