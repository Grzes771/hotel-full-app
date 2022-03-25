import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";

import { getUserReservationsStarted } from "@store/reservation/actions";
import {
  userReservationsRX,
  userReservationsIsLoadingRX,
} from "@store/reservation/selectors";
import { TReservation } from "@store/reservation/reducer";

import { Container } from "./index.styles";
import * as C from "./consts";

type TSelectedRow = {
  accommodationType: string;
  amount: string;
  date: string;
  phone: string;
  tableData: { id: number };
  username: string;
};

const UserReservationList = () => {
  const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);

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
      data={displayUserReservationsData as TSelectedRow[]}
      title={C.MATERIAL_TABLE_TITLE}
      onRowClick={(e, selectedRow: TSelectedRow | undefined) => {
        setSelectedRow(selectedRow?.tableData?.id);
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
export default UserReservationList;
