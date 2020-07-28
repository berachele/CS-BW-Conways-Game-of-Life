// import React from 'react';
// import Box from './box'

// //Grid component
// class Grid extends React.Component{

//     render(){
//         const width = this.props.columns * 14
//         var rowsArr = []

//         var boxClass = ""
//         for (var x=0; x< this.props.rows; x++){
//             for (var y=0; y< this.props.columns; y++){
//                 let boxId = x + "_" + y

//                 boxClass = this.props.gridFull[x][y]
//                 rowsArr.push(
//                     <Box 
//                         boxClass={boxClass}
//                         key={boxId}
//                         boxId={boxId}
//                         row={x}
//                         columns={x}
//                         selectBox={this.props.selectBox}
//                     />
//                 )
//             }
//         }

//       return(
//         <div className="grid" style={{width: width}}>
//             {rowsArr}
//         </div>
//       )
//     }
//   }

//   export default Grid