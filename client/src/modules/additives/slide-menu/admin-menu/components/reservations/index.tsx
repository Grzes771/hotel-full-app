import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";

import {
  userReservationsIsLoadingRX,
  userReservationsRX,
} from "@store/reservation/selectors";
import { TReservation } from "@store/reservation/reducer";
import { getUserReservationsStarted } from "@store/reservation/actions";

import * as C from "./consts";
import { Container } from "./index.styles";

const ReservationList = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const dispatch = useDispatch();

  const userReservations = useSelector(userReservationsRX);
  const userReservationsIsLoading = useSelector(userReservationsIsLoadingRX);

  const displayUserReservationsData = userReservations?.map(
    (reservation: TReservation) => ({
      username: reservation.username,
      phone: reservation.phone,
      date: `${reservation.startDate.split("T")[0]} - ${
        reservation.endDate.split("T")[0]
      }`,
      accommodationType: reservation.accommodationType,
      amount: reservation.amount,
    })
  );

  useEffect(() => {
    dispatch(getUserReservationsStarted(0, 10));
  }, []);

  const displayLoading = userReservationsIsLoading && <div>Loading...</div>;

  const displayTable = displayUserReservationsData?.length && (
    <MaterialTable
      columns={C.COLUMNS}
      data={displayUserReservationsData}
      title={C.MATERIAL_TABLE_TITLE}
      onRowClick={(
        evt: React.MouseEvent<Element, MouseEvent> | undefined,
        selectedRow: undefined | any
      ) => {
        setSelectedRow(selectedRow.tableData.id);
      }}
      options={{
        search: true,
        rowStyle: (rowData) => ({
          backgroundColor:
            selectedRow === rowData.tableData.id
              ? C.MATERIAL_TABLE_COLOR1
              : C.MATERIAL_TABLE_COLOR2,
        }),
      }}
    />
  );

  return (
    <Container>
      {displayLoading}
      {displayTable}
    </Container>
  );
};

export default ReservationList;
