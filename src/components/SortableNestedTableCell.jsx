import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableRow from "@mui/material/TableRow";

const SortableNestedTableCell = ({
  headCell,
  orderBy,
  order,
  createSortHandler,
  padding = 'normal'
}) => {
  const headCellSortDirection = !headCell.nestedCells && orderBy === headCell.id ?
                                order :
                                false;

  return (
    <TableCell
      align={'left'}
      sortDirection={headCellSortDirection}
      sx={{
        whiteSpace: 'nowrap',
        ...(padding === 'none' && {
          borderBottom: 'none'
        })
      }}
      variant='head'
      padding={padding}
    >
      {!headCell.nestedCells ?
       <TableSortLabel
         active={orderBy === headCell.id}
         direction={orderBy === headCell.id ? order : 'asc'}
         onClick={createSortHandler(headCell.id)}
       >
         {headCell.label}
       </TableSortLabel> :
       <>
         <TableRow>
           <TableCell variant='head' colSpan={headCell.nestedCells.length} align='left' sx={{
             p: '0 0 16px 0',
           }}>
             {headCell.label}
           </TableCell>
         </TableRow>
         {headCell.nestedCells.map(nestedHeadCell => (
           <SortableNestedTableCell headCell={nestedHeadCell}
                                    order={order}
                                    orderBy={orderBy}
                                    createSortHandler={createSortHandler}
                                    padding='none'
                                    key={nestedHeadCell.id}
           />
         ))}
       </>
      }
    </TableCell>
  )
}

export default SortableNestedTableCell;