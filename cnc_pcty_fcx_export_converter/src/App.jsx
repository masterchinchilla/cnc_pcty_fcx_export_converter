import { useState } from "react";
import './index.css';
import intrnlToExtrnlCodeMapArry from "./csStaticRefs/intrnlToExtrnlCodeMap";
import latestBPListArry from "./csStaticRefs/latestBPList";
import latestPrdDetailsExportArry from "./csStaticRefs/latestPrdDetailsExport";

function App() {
  const arrysArryToRender=[];
  const createArryToRndrFrmStaticRefsFn=()=>{
    for(let i=0;i<latestPrdDetailsExportArry.length;i++){
      let thisRowTableArry=[];
      let thisArryItemObj=latestPrdDetailsExportArry[i];
      thisRowTableArry.push(thisArryItemObj.empFullNameStr);
      thisRowTableArry.push(thisArryItemObj.empIDStr);
      thisRowTableArry.push(`E`);
      let thisFCXPRollItemCodeStr=thisArryItemObj.extrnlCodeStr;
      thisRowTableArry.push(thisFCXPRollItemCodeStr);
      let payCodeMapObjsWThisFCXCodeArry=intrnlToExtrnlCodeMapArry.filter(thisPayCodeMapObj=>thisPayCodeMapObj.fcxIntrnlCodeWNameStr===thisFCXPRollItemCodeStr);
      let thisMatchedPayCodeMapObj=payCodeMapObjsWThisFCXCodeArry[0];
      let thisPCTYCodeStrForThisFCXCode=thisMatchedPayCodeMapObj.pctyExtrnlCodeStr;
      let thisPaycodeReqFringeBool=thisMatchedPayCodeMapObj.reqFringeBool;
      thisRowTableArry.push(thisPCTYCodeStrForThisFCXCode);
      let hrsFloatThisTblRow=Number(thisArryItemObj.hrsFloat);
      let qtyFloatThisTblRow=Number(thisArryItemObj.qtyFloat);
      let qtyThisRowFloat=!hrsFloatThisTblRow?qtyFloatThisTblRow?qtyFloatThisTblRow:0.00:hrsFloatThisTblRow;
      thisRowTableArry.push(qtyThisRowFloat);
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push(thisArryItemObj.taxCodeStr);
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      let thisTblRowBPNameStr=thisArryItemObj.bpNameStr;
      thisRowTableArry.push(thisTblRowBPNameStr);
      let thisBPMtchngObjsArry=latestBPListArry.filter(thisBPObj=>thisBPObj.bpNameStr===thisTblRowBPNameStr);
      let thisBPMtchngObj=thisBPMtchngObjsArry[0];
      let thisBPNumInt=Number(thisBPMtchngObj.bpNumStr);
      thisRowTableArry.push(thisBPNumInt);
      thisRowTableArry.push("");
      thisRowTableArry.push(thisArryItemObj.dateStr);
      thisRowTableArry.push(thisArryItemObj.dateStr);
      thisRowTableArry.push("");
      thisRowTableArry.push(thisArryItemObj.stateStr);
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      arrysArryToRender.push(thisRowTableArry);
    }
    console.log(arrysArryToRender)
  }
createArryToRndrFrmStaticRefsFn()
  return (
    <table>
      <thead>
        <tr>
          <td>{`v Remove all rows above column headers before import`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={3}>{`> Columns auto-filled by FCX`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan={6}>{`This is where Nicole will enter the appropriate rate. This column should be empty for any PTO-rate time`}</td>
          <td></td>
          <td></td>
          <td rowSpan={6}>{`Tax Code`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan={6}>{`FCX BP # Via Lookup`}</td>
          <td></td>
          <td colSpan={2} rowSpan={6}>{`We will break-out by day`}</td>
          <td></td>
          <td rowSpan={6}>{`This will come from the Site to which the hours are charged`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={3}>{`> Columns that must be manually entered prior to import`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={3}>{`> Fringe rows`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={3}>{`> Training Contribution rows`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={3}>{`> Column auto-filled by workbook`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{`v Remove column before import`}</td>
          <td></td>
          <td></td>
          <td>{`v Remove column before import`}</td>
          <td>{`v This is the code needs to be imported to PCTY`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{`v Remove column before import`}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>{`Emp Full Name + ID`}</td>
          <td>{`EMPLOYEE ID (required)`}</td>
          <td>{`"E" for Earnings, "D" for Deduction, DET (required)`}</td>
          <td>{`FCX PRoll Item`}</td>
          <td>{`DETCODE (required)`}</td>
          <td>{`HOURS`}</td>
          <td>{`AMOUNT`}</td>
          <td>{`TEMP RATE`}</td>
          <td>{`RATECODE`}</td>
          <td>{`COST CENTER 1`}</td>
          <td>{`COST CENTER 2`}</td>
          <td>{`COST CENTER 3`}</td>
          <td>{`LEAVE BLANK`}</td>
          <td>{`LEAVE BLANK 2`}</td>
          <td>{`FCX BP Name`}</td>
          <td>{`JOBCODE`}</td>
          <td>{`SHIFT`}</td>
          <td>{`BEGIN DATE (PUNCH IN)`}</td>
          <td>{`END DATE (PUNCH OUT)`}</td>
          <td>{`WORKERS COMP CODE`}</td>
          <td>{`TCODE1 (STATE OVERRIDE)`}</td>
          <td>{`TCODE2 (LOCAL1 OVERRIDE)`}</td>
          <td>{`TCODE3 (LOCAL2 OVERRIDE)`}</td>
          <td>{`TCODE4 (DO NOT USE)`}</td>
          <td>{`SEQUENCE`}</td>
          <td>{`CHECKTYPE`}</td>
          <td>{`CHECK NUMBER`}</td>
        </tr>
      </thead>
      <tbody>
        {arrysArryToRender.map((thisTblRowArry)=>{
          return(
            <tr>
              {thisTblRowArry.map((thisTblRowCellValVar)=>{
                return(
                  <td>{thisTblRowCellValVar}</td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default App;
