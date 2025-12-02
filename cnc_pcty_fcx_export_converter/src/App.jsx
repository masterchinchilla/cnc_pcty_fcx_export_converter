import { useState } from "react";
import {cloneDeep} from "lodash";
import './index.css';
import intrnlToExtrnlCodeMapArry from "./csStaticRefs/intrnlToExtrnlCodeMap";
import latestBPListArry from "./csStaticRefs/latestBPList";
import latestPrdDetailsExportArry from "./csStaticRefs/latestPrdDetailsExport";
import fringeTypePerExtCodeMap from "./csStaticRefs/fringeTypePerExtCodeMap";

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
      let thisExtnlCodeStrForThisFCXCode=thisMatchedPayCodeMapObj.pctyExtrnlCodeStr;
      thisRowTableArry.push(thisExtnlCodeStrForThisFCXCode);
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
      let thisPaycodeReqFringeBool=thisMatchedPayCodeMapObj.reqFringeBool==="TRUE";
      if(thisPaycodeReqFringeBool){
        let copyOfOrigRowTblArryForFringe=cloneDeep(thisRowTableArry);
        let frngCodeForThisExtrnlCode=fringeTypePerExtCodeMap[thisExtnlCodeStrForThisFCXCode];
        copyOfOrigRowTblArryForFringe[3]=frngCodeForThisExtrnlCode;
        copyOfOrigRowTblArryForFringe[4]=frngCodeForThisExtrnlCode;
        arrysArryToRender.push(copyOfOrigRowTblArryForFringe);
        let copyOfOrigRowTblArryForTC=cloneDeep(thisRowTableArry);
        copyOfOrigRowTblArryForTC[2]=`D`;
        copyOfOrigRowTblArryForTC[3]=`TC`;
        copyOfOrigRowTblArryForTC[4]=`TC`;
        arrysArryToRender.push(copyOfOrigRowTblArryForTC);
      }
    }
  }
createArryToRndrFrmStaticRefsFn()
  return (
    <div>
      <table>
        <thead>
          <tr key={`theadRow1`}>
            <td key={`thR1Td1`} className={`redTextCntrdCells`} colSpan={4}>{`v Remove all rows above column headers before import`}</td>
            <td key={`thR1Td2`} className={`medBlueFilledCell`} rowSpan={7}>{`v This is the code needs to be imported to PCTY`}</td>
            <td key={`thR1Td3`} rowSpan={7}></td>
            <td key={`thR1Td4`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td5`} rowSpan={7}>{`This is where Nicole will enter the appropriate rate. This column should be empty for any PTO-rate time`}</td>
            <td key={`thR1Td6`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td7`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td8`} rowSpan={7}>{`Tax Code`}</td>
            <td key={`thR1Td9`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td10`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td11`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td12`} className={`lightGreyFilledCell`} rowSpan={6}></td>
            <td key={`thR1Td13`} className={`medBlueFilledCell`} rowSpan={7}>{`FCX BP # Via Lookup`}</td>
            <td key={`thR1Td14`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td15`} colSpan={2} rowSpan={7}>{`We will break-out by day`}</td>
            <td key={`thR1Td16`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td17`} rowSpan={7}>{`This will come from the Site to which the hours are charged`}</td>
            <td key={`thR1Td18`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td19`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td20`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td21`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td22`} className={`medGreyFilledCell`} rowSpan={7}></td>
            <td key={`thR1Td23`} className={`medGreyFilledCell`} rowSpan={7}></td>
          </tr>
          <tr key={`theadRow2`}>
            <td key={`thR2Td1`} className={`lightBlueFilledCell`}></td>
            <td key={`thR2Td2`} colSpan={3}>{`> Columns auto-filled by FCX`}</td>
          </tr>
          <tr key={`theadRow3`}>
            <td key={`thR3Td1`} className={`yellowHghlghtFilledCell`}></td>
            <td key={`thR3Td2`} colSpan={3}>{`> Columns that must be manually entered prior to import`}</td>
          </tr>
          <tr key={`theadRow4`}>
            <td key={`thR4Td1`} className={`lightGreenFilledCell`}></td>
            <td key={`thR4Td2`} colSpan={3}>{`> Fringe rows`}</td>
          </tr>
          <tr key={`theadRow5`}>
            <td key={`thR5Td1`} className={`lightPurpleFilledCell`}></td>
            <td key={`thR5Td2`} colSpan={3}>{`> Training Contribution rows`}</td>
          </tr>
          <tr key={`theadRow6`}>
            <td key={`thR6Td1`} className={`medBlueFilledCell`}></td>
            <td key={`thR6Td2`} colSpan={3}>{`> Column auto-filled by workbook`}</td>
          </tr>
          <tr key={`theadRow7`}>
            <td key={`thR7Td1`} className={`redTextCntrdCells`}>{`v Remove column before import`}</td>
            <td key={`thR7Td2`}></td>
            <td key={`thR7Td3`}></td>
            <td key={`thR7Td4`} className={`redTextCntrdCells`}>{`v Remove column before import`}</td>
            <td key={`thR7Td5`} className={`redTextCntrdCells lightGreyFilledCell`}>{`v Remove column before import`}</td> 
          </tr>
          <tr key={`theadRow8`}>
            <th key={`thR8Th1`} className={`lightBlueFilledCell`}>{`Emp Full Name + ID`}</th>
            <th key={`thR8Th2`} className={`lightBlueFilledCell`}>{`EMPLOYEE ID (required)`}</th>
            <th key={`thR8Th3`} className={`lightBlueFilledCell`}>{`"E" for Earnings, "D" for Deduction, DET (required)`}</th>
            <th key={`thR8Th4`} className={`lightOrangeFilledCell`}>{`FCX PRoll Item`}</th>
            <th key={`thR8Th5`} className={`medBlueFilledCell`}>{`DETCODE (required)`}</th>
            <th key={`thR8Th6`} className={`lightBlueFilledCell`}>{`HOURS`}</th>
            <th key={`thR8Th7`} className={`medGreyFilledCell`}>{`AMOUNT`}</th>
            <th key={`thR8Th8`} className={`yellowHghlghtFilledCell`}>{`TEMP RATE`}</th>
            <th key={`thR8Th9`} className={`medGreyFilledCell`}>{`RATECODE`}</th>
            <th key={`thR8Th10`} className={`medGreyFilledCell`}>{`COST CENTER 1`}</th>
            <th key={`thR8Th11`} className={`lightBlueFilledCell`}>{`COST CENTER 2`}</th>
            <th key={`thR8Th12`} className={`medGreyFilledCell`}>{`COST CENTER 3`}</th>
            <th key={`thR8Th13`} className={`medGreyFilledCell`}>{`LEAVE BLANK`}</th>
            <th key={`thR8Th14`} className={`medGreyFilledCell`}>{`LEAVE BLANK 2`}</th>
            <th key={`thR8Th15`} className={`lightGreyFilledCell`}>{`FCX BP Name`}</th>
            <th key={`thR8Th16`} className={`medBlueFilledCell`}>{`JOBCODE`}</th>
            <th key={`thR8Th17`} className={`medGreyFilledCell`}>{`SHIFT`}</th>
            <th key={`thR8Th18`} className={`lightBlueFilledCell`}>{`BEGIN DATE (PUNCH IN)`}</th>
            <th key={`thR8Th19`} className={`lightBlueFilledCell`}>{`END DATE (PUNCH OUT)`}</th>
            <th key={`thR8Th20`} className={`medGreyFilledCell`}>{`WORKERS COMP CODE`}</th>
            <th key={`thR8Th21`} className={`lightBlueFilledCell`}>{`TCODE1 (STATE OVERRIDE)`}</th>
            <th key={`thR8Th22`} className={`medGreyFilledCell`}>{`TCODE2 (LOCAL1 OVERRIDE)`}</th>
            <th key={`thR8Th23`} className={`medGreyFilledCell`}>{`TCODE3 (LOCAL2 OVERRIDE)`}</th>
            <th key={`thR8Th24`} className={`medGreyFilledCell`}>{`TCODE4 (DO NOT USE)`}</th>
            <th key={`thR8Th25`} className={`medGreyFilledCell`}>{`SEQUENCE`}</th>
            <th key={`thR8Th26`} className={`medGreyFilledCell`}>{`CHECKTYPE`}</th>
            <th key={`thR8Th27`} className={`medGreyFilledCell`}>{`CHECK NUMBER`}</th>
          </tr>
        </thead>
        <tbody>
          {arrysArryToRender.map((thisTblRowArry,index1)=>{
            let thisRowsExtrnlCodeStr=thisTblRowArry[4];
            let thisRowIsFringeBool=false;
            let thisRowIsTCBool=false;
            if(
              thisRowsExtrnlCodeStr===`FRING`||
              thisRowsExtrnlCodeStr===`FRNGO`||
              thisRowsExtrnlCodeStr===`FRNGD`
            ){
              thisRowIsFringeBool=true;
            }else if(
              thisRowsExtrnlCodeStr===`TC`
            ){
              thisRowIsTCBool=true;
            }
            return(
              <tr key={`tbodyRow${index1+1}`}>
                {thisTblRowArry.map((thisTblRowCellValVar, index2)=>{
                  let tdClassStrPerColIndxOrRowType=``;
                  if(thisRowIsFringeBool){
                    tdClassStrPerColIndxOrRowType=`lightGreenFilledCell`;
                  }else if(thisRowIsTCBool){
                    tdClassStrPerColIndxOrRowType=`lightPurpleFilledCell`;
                  }else if(
                    index2===4||index2===15
                  ){
                    tdClassStrPerColIndxOrRowType=`medBlueFilledCell`
                  }else if(
                    index2===6||
                    (index2>7&&index2<10)||
                    (index2>10&&index2<14)||
                    index2===16||
                    index2===19||
                    index2>20
                  ){
                    tdClassStrPerColIndxOrRowType=`medGreyFilledCell`
                  }else if(
                    index2===14
                  ){
                    tdClassStrPerColIndxOrRowType=`lightGreyFilledCell`
                  }
                  return(
                    <td key={`tbR${index1+1}Td${index2+1}`} className={tdClassStrPerColIndxOrRowType}>{thisTblRowCellValVar}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
