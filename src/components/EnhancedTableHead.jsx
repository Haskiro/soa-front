import {TableCell, Checkbox, TableRow, TableHead} from "@mui/material";
import {headCells} from "../utils/helpers/data-helpers"
import SortableNestedTableCell from "./SortableNestedTableCell";

const EnhancedTableHead = ({
                       onSelectAllClick,
                       order,
                       orderBy,
                       numSelected,
                       rowCount,
                       onRequestSort
                   }) => {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (<TableHead>
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                    inputProps={{
                        'aria-label': 'select all persons',
                    }}
                />
            </TableCell>
            {headCells.map((headCell) => (
                    <SortableNestedTableCell
                        headCell={headCell}
                        order={order}
                        orderBy={orderBy}
                        key={headCell.id}
                        createSortHandler={createSortHandler}
                    />
                )
            )}
        </TableRow>
    </TableHead>);
}

export default EnhancedTableHead;
