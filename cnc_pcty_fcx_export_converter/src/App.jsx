import { useState } from "react";
import { cloneDeep } from "lodash";
import * as XLSX from "xlsx"; // Import the library
import "./index.css";
import intrnlToExtrnlCodeMapArry from "./csStaticRefs/intrnlToExtrnlCodeMap";
import fringeTypePerExtCodeMap from "./csStaticRefs/fringeTypePerExtCodeMap";
import taxCodeCodesMap from "./csStaticRefs/taxCodeCodesMap";
import prdDtlsTblHdrsArry from "./csStaticRefs/prdDtlsTblHdrsArry";
import bpsListTblHdrsArry from "./csStaticRefs/bpsListTblHdrsArry";

//How to prep the sheets for import:
//Period Details sheet:
//Go to the Period Details in FCX and switch to the Saved View "CNC Export Prep for PCTY"
//When you export from FCX there will be 2 header rows - Remove these
//There is also a sum total row at the bottom of the table - remove this row too
//The file can stay XSLX - Save and import
//BP List Sheet:
//Go to the BP Status Dashboard and switch to the Saved View "BP Names and Nums Export"
//Make sure Closed BPs are visible - Time could be allocated to a now-closed BP
//When you export from FCX there will be 2 header rows like there were with the Period Details - Remove these rows
//The file can stay XSLX - Save and import

function App() {
  const [pRollDetailsTblStateArry, updtPRollDetailsTblStateArryFn] = useState(
    []
  );
  const [bpsListTblStateArry, updtBpsListTblStateArryFn] = useState([]);
  const [arrysToRenderStateArry, updtArrysToRenderStateArryFn] = useState([]);
  const handlePeriodDetailsFileImportFn = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader(); // Use FileReader to access file content
      reader.onload = (e) => {
        const binaryString = e.target.result;
        const workbook = XLSX.read(binaryString, { type: "binary" }); // Parse the binary data
        // Get the first worksheet name
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        // Convert the worksheet data to a JSON array of objects
        const prdDtlsTblArrysArry = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
        });
        const prdDtlsRowObjsArry = [];
        for (let i = 0; i < prdDtlsTblArrysArry.length; i++) {
          let thisPrdDtlsTblRowArry = prdDtlsTblArrysArry[i];
          console.log(thisPrdDtlsTblRowArry)
          let thisPrdDtlsTblRowObj = {};
          for (let j = 0; j < thisPrdDtlsTblRowArry.length; j++) {
            let thisTblRowCellValVar = thisPrdDtlsTblRowArry[j];
            let thisTblColHdrStr = prdDtlsTblHdrsArry[j];
            thisPrdDtlsTblRowObj[thisTblColHdrStr] = thisTblRowCellValVar;
          }
          prdDtlsRowObjsArry.push(thisPrdDtlsTblRowObj);
        }
        updtPRollDetailsTblStateArryFn(prdDtlsRowObjsArry); // Update the state with the new data
      };
      reader.readAsBinaryString(file); // Read the file as a binary string
    }
  };
  const handleBPsListFileImportFn = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader(); // Use FileReader to access file content
      reader.onload = (e) => {
        const binaryString = e.target.result;
        const workbook = XLSX.read(binaryString, { type: "binary" }); // Parse the binary data
        // Get the first worksheet name
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        // Convert the worksheet data to a JSON array of objects
        const bpsTblArrysArry = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
        });
        const bpsTblRowObjsArry = [];
        for (let i = 0; i < bpsTblArrysArry.length; i++) {
          let thisBpsTblRowArry = bpsTblArrysArry[i];
          let thisBpsTblRowObj = {};
          for (let j = 0; j < thisBpsTblRowArry.length; j++) {
            let thisTblRowCellValVar = thisBpsTblRowArry[j];
            let thisTblColHdrStr = bpsListTblHdrsArry[j];
            thisBpsTblRowObj[thisTblColHdrStr] = thisTblRowCellValVar;
          }
          bpsTblRowObjsArry.push(thisBpsTblRowObj);
        }
        updtBpsListTblStateArryFn(bpsTblRowObjsArry); // Update the state with the new data
      };
      reader.readAsBinaryString(file); // Read the file as a binary string
    }
  };

  const createArryToRndrFrmStaticRefsFn = () => {
    const newArrysArryToRender = [];
    for (let i = 0; i < pRollDetailsTblStateArry.length; i++) {
      let thisRowTableArry = [];
      let thisArryItemObj = pRollDetailsTblStateArry[i];
      console.log(thisArryItemObj)
      thisRowTableArry.push(thisArryItemObj.empFullNameStr);
      thisRowTableArry.push(thisArryItemObj.empIDStr);
      let thisFCXPRollItemCodeStr = thisArryItemObj.extrnlCodeStr;
      let payCodeMapObjsWThisFCXCodeArry = intrnlToExtrnlCodeMapArry.filter(
        (thisPayCodeMapObj) =>
          thisPayCodeMapObj.fcxIntrnlCodeWNameStr === thisFCXPRollItemCodeStr
      );
      let thisMatchedPayCodeMapObj = payCodeMapObjsWThisFCXCodeArry[0];
      let thiseOrDTypeStrForThisFCXCode=thisMatchedPayCodeMapObj.eOrDTypeStr;
      thisRowTableArry.push(thiseOrDTypeStrForThisFCXCode);
      thisRowTableArry.push(thisFCXPRollItemCodeStr);
      let thisExtnlCodeStrForThisFCXCode =
        thisMatchedPayCodeMapObj.pctyExtrnlCodeStr;
      thisRowTableArry.push(thisExtnlCodeStrForThisFCXCode);
      let hrsFloatThisTblRow = Number(thisArryItemObj.hrsFloat);
      let qtyValVarThisTblRow = thisArryItemObj.qtyFloat;
      let qtyFloatThisTblRow = 0;
      if (qtyValVarThisTblRow) {
        qtyFloatThisTblRow = Number(thisArryItemObj.qtyFloat);
      }
      let qtyThisRowFloat = !hrsFloatThisTblRow
        ? qtyFloatThisTblRow
          ? qtyFloatThisTblRow
          : 0.0
        : hrsFloatThisTblRow;
      thisRowTableArry.push(qtyThisRowFloat);
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      let thisRowTaxCodeNameStr = thisArryItemObj.taxCodeStr;
      let thisTaxCodeCodeStr = "";
      if (thisRowTaxCodeNameStr) {
        let thisTaxCodeObjMtchsArry = taxCodeCodesMap.filter(
          (taxCodeObj) => taxCodeObj.name === thisRowTaxCodeNameStr
        );
        let thisTaxCodeObj = thisTaxCodeObjMtchsArry[0];
        thisTaxCodeCodeStr = thisTaxCodeObj.code;
      }
      thisRowTableArry.push(thisTaxCodeCodeStr);
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      let thisTblRowBPNameStr = thisArryItemObj.bpNameStr;
      thisRowTableArry.push(thisTblRowBPNameStr);
      let thisBPMtchngObjsArry = bpsListTblStateArry.filter(
        (thisBPObj) => thisBPObj.bpNameStr === thisTblRowBPNameStr
      );
      let thisBPMtchngObj = thisBPMtchngObjsArry[0];
      let thisBPNumInt = Number(thisBPMtchngObj.bpNumStr);
      thisRowTableArry.push(thisBPNumInt);
      thisRowTableArry.push("");
      let thisTblRowDateUTCStr = thisArryItemObj.dateStr;
      let parsedDateTimeStr = new Date(thisTblRowDateUTCStr);
      let mm = String(parsedDateTimeStr.getMonth() + 1).padStart(2, "0");
      let dd = String(parsedDateTimeStr.getDate()).padStart(2, "0");
      let yyyy = parsedDateTimeStr.getFullYear();
      let dateToDisplayStr = `${mm}/${dd}/${yyyy}`;
      thisRowTableArry.push(dateToDisplayStr);
      thisRowTableArry.push(dateToDisplayStr);
      thisRowTableArry.push("");
      thisRowTableArry.push(thisArryItemObj.stateStr);
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      thisRowTableArry.push("");
      newArrysArryToRender.push(thisRowTableArry);
      let thisPaycodeReqFringeBool =
        thisMatchedPayCodeMapObj.reqFringeBool === "TRUE";
      if (thisPaycodeReqFringeBool) {
        let copyOfOrigRowTblArryForFringe = cloneDeep(thisRowTableArry);
        let frngCodeForThisExtrnlCode =
          fringeTypePerExtCodeMap[thisExtnlCodeStrForThisFCXCode];
        copyOfOrigRowTblArryForFringe[3] = frngCodeForThisExtrnlCode;
        copyOfOrigRowTblArryForFringe[4] = frngCodeForThisExtrnlCode;
        newArrysArryToRender.push(copyOfOrigRowTblArryForFringe);
        let copyOfOrigRowTblArryForTC = cloneDeep(thisRowTableArry);
        copyOfOrigRowTblArryForTC[2] = `D`;
        copyOfOrigRowTblArryForTC[3] = `TC`;
        copyOfOrigRowTblArryForTC[4] = `TC`;
        newArrysArryToRender.push(copyOfOrigRowTblArryForTC);
      }
      updtArrysToRenderStateArryFn(newArrysArryToRender);
    }
  };
  return (
    <div>
      <section>
        <h1>Import Pay Period Details</h1>
        <p>
          Take the following steps to export the Period Details from FCX and
          import them here:
        </p>
        <ul>
          <li>
            Go to the Period Details in FCX and switch to the Saved View "CNC
            Export Prep for PCTY"
          </li>
          <li><span className={`boldText`}>{`Important: `}</span>You MUST toggle-open the "Employee" columns group to reveal the Emp ID column BEFORE you export or that column will be left out of the export!</li>
          <li>
            When you export from FCX there will be 2 header rows - Remove these
          </li>
          <li>
            There is also a sum total row at the bottom of the table - remove
            this row too
          </li>
          <li>The file can stay XSLX - Save and import</li>
        </ul>
        <div className={`formGroup`}>
          <label>Import Payroll Details File:</label>
          <input
            type="file"
            accept=".xlsx, .xls" // Restrict file types to Excel formats
            onChange={handlePeriodDetailsFileImportFn}
          />
        </div>
      </section>
      <section>
        <h1>
          Import Updated BPs List So App Can Lookup BP#s per Period Details
        </h1>
        <p>
          Take the following steps to export the BPs List from FCX and import it
          here:
        </p>
        <ul>
          <li>
            Go to the BP Status Dashboard and switch to the Saved View "BP Names
            and Nums Export"
          </li>
          <li>
            Make sure Closed BPs are visible - Time could be allocated to a
            now-closed BP
          </li>
          <li>
            When you export from FCX there will be 2 header rows like there were
            with the Period Details - Remove these rows
          </li>
          <li>The file can stay XSLX - Save and import</li>
        </ul>
        <div className={`formGroup`}>
          <label>Import Build Plans List File:</label>
          <input
            type="file"
            accept=".xlsx, .xls" // Restrict file types to Excel formats
            onChange={handleBPsListFileImportFn}
          />
        </div>
      </section>
      <section>
        <button
          disabled={
            pRollDetailsTblStateArry.length < 1 ||
            bpsListTblStateArry.length < 1
          }
          onClick={createArryToRndrFrmStaticRefsFn}
        >
          Calculate Import Sheet from Items Imported Above
        </button>
        <table>
          <thead>
            <tr key={`theadRow1`}>
              <td
                key={`thR1Td1`}
                className={`redTextCntrdCells`}
                colSpan={4}
              >{`v Remove all rows above column headers before import`}</td>
              <td
                key={`thR1Td2`}
                className={`medBlueFilledCell`}
                rowSpan={7}
              >{`v This is the code needs to be imported to PCTY`}</td>
              <td key={`thR1Td3`} rowSpan={7}></td>
              <td
                key={`thR1Td4`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td5`}
                rowSpan={7}
              >{`This is where Nicole will enter the appropriate rate. This column should be empty for any PTO-rate time`}</td>
              <td
                key={`thR1Td6`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td7`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td key={`thR1Td8`} rowSpan={7}>{`Tax Code`}</td>
              <td
                key={`thR1Td9`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td10`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td11`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td12`}
                className={`lightGreyFilledCell`}
                rowSpan={6}
              ></td>
              <td
                key={`thR1Td13`}
                className={`medBlueFilledCell`}
                rowSpan={7}
              >{`FCX BP # Via Lookup`}</td>
              <td
                key={`thR1Td14`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td15`}
                colSpan={2}
                rowSpan={7}
              >{`We will break-out by day`}</td>
              <td
                key={`thR1Td16`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td17`}
                rowSpan={7}
              >{`This will come from the Site to which the hours are charged`}</td>
              <td
                key={`thR1Td18`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td19`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td20`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td21`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td22`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
              <td
                key={`thR1Td23`}
                className={`medGreyFilledCell`}
                rowSpan={7}
              ></td>
            </tr>
            <tr key={`theadRow2`}>
              <td key={`thR2Td1`} className={`lightBlueFilledCell`}></td>
              <td
                key={`thR2Td2`}
                colSpan={3}
              >{`> Columns auto-filled by FCX`}</td>
            </tr>
            <tr key={`theadRow3`}>
              <td key={`thR3Td1`} className={`yellowHghlghtFilledCell`}></td>
              <td
                key={`thR3Td2`}
                colSpan={3}
              >{`> Columns that must be manually entered prior to import`}</td>
            </tr>
            <tr key={`theadRow4`}>
              <td key={`thR4Td1`} className={`lightGreenFilledCell`}></td>
              <td key={`thR4Td2`} colSpan={3}>{`> Fringe rows`}</td>
            </tr>
            <tr key={`theadRow5`}>
              <td key={`thR5Td1`} className={`lightPurpleFilledCell`}></td>
              <td
                key={`thR5Td2`}
                colSpan={3}
              >{`> Training Contribution rows`}</td>
            </tr>
            <tr key={`theadRow6`}>
              <td key={`thR6Td1`} className={`medBlueFilledCell`}></td>
              <td
                key={`thR6Td2`}
                colSpan={3}
              >{`> Column auto-filled by workbook`}</td>
            </tr>
            <tr key={`theadRow7`}>
              <td
                key={`thR7Td1`}
                className={`redTextCntrdCells`}
              >{`v Remove column before import`}</td>
              <td key={`thR7Td2`}></td>
              <td key={`thR7Td3`}></td>
              <td
                key={`thR7Td4`}
                className={`redTextCntrdCells`}
              >{`v Remove column before import`}</td>
              <td
                key={`thR7Td5`}
                className={`redTextCntrdCells lightGreyFilledCell`}
              >{`v Remove column before import`}</td>
            </tr>
            <tr key={`theadRow8`}>
              <th
                key={`thR8Th1`}
                className={`lightBlueFilledCell`}
              >{`Emp Full Name + ID`}</th>
              <th
                key={`thR8Th2`}
                className={`lightBlueFilledCell`}
              >{`EMPLOYEE ID (required)`}</th>
              <th
                key={`thR8Th3`}
                className={`lightBlueFilledCell`}
              >{`"E" for Earnings, "D" for Deduction, DET (required)`}</th>
              <th
                key={`thR8Th4`}
                className={`lightOrangeFilledCell`}
              >{`FCX PRoll Item`}</th>
              <th
                key={`thR8Th5`}
                className={`medBlueFilledCell`}
              >{`DETCODE (required)`}</th>
              <th
                key={`thR8Th6`}
                className={`lightBlueFilledCell`}
              >{`HOURS`}</th>
              <th
                key={`thR8Th7`}
                className={`medGreyFilledCell`}
              >{`AMOUNT`}</th>
              <th
                key={`thR8Th8`}
                className={`yellowHghlghtFilledCell`}
              >{`TEMP RATE`}</th>
              <th
                key={`thR8Th9`}
                className={`medGreyFilledCell`}
              >{`RATECODE`}</th>
              <th
                key={`thR8Th10`}
                className={`medGreyFilledCell`}
              >{`COST CENTER 1`}</th>
              <th
                key={`thR8Th11`}
                className={`lightBlueFilledCell`}
              >{`COST CENTER 2`}</th>
              <th
                key={`thR8Th12`}
                className={`medGreyFilledCell`}
              >{`COST CENTER 3`}</th>
              <th
                key={`thR8Th13`}
                className={`medGreyFilledCell`}
              >{`LEAVE BLANK`}</th>
              <th
                key={`thR8Th14`}
                className={`medGreyFilledCell`}
              >{`LEAVE BLANK 2`}</th>
              <th
                key={`thR8Th15`}
                className={`lightGreyFilledCell`}
              >{`FCX BP Name`}</th>
              <th
                key={`thR8Th16`}
                className={`medBlueFilledCell`}
              >{`JOBCODE`}</th>
              <th
                key={`thR8Th17`}
                className={`medGreyFilledCell`}
              >{`SHIFT`}</th>
              <th
                key={`thR8Th18`}
                className={`lightBlueFilledCell`}
              >{`BEGIN DATE (PUNCH IN)`}</th>
              <th
                key={`thR8Th19`}
                className={`lightBlueFilledCell`}
              >{`END DATE (PUNCH OUT)`}</th>
              <th
                key={`thR8Th20`}
                className={`medGreyFilledCell`}
              >{`WORKERS COMP CODE`}</th>
              <th
                key={`thR8Th21`}
                className={`lightBlueFilledCell`}
              >{`TCODE1 (STATE OVERRIDE)`}</th>
              <th
                key={`thR8Th22`}
                className={`medGreyFilledCell`}
              >{`TCODE2 (LOCAL1 OVERRIDE)`}</th>
              <th
                key={`thR8Th23`}
                className={`medGreyFilledCell`}
              >{`TCODE3 (LOCAL2 OVERRIDE)`}</th>
              <th
                key={`thR8Th24`}
                className={`medGreyFilledCell`}
              >{`TCODE4 (DO NOT USE)`}</th>
              <th
                key={`thR8Th25`}
                className={`medGreyFilledCell`}
              >{`SEQUENCE`}</th>
              <th
                key={`thR8Th26`}
                className={`medGreyFilledCell`}
              >{`CHECKTYPE`}</th>
              <th
                key={`thR8Th27`}
                className={`medGreyFilledCell`}
              >{`CHECK NUMBER`}</th>
            </tr>
          </thead>
          <tbody>
            {arrysToRenderStateArry.map((thisTblRowArry, index1) => {
              let thisRowsExtrnlCodeStr = thisTblRowArry[4];
              let thisRowIsFringeBool = false;
              let thisRowIsTCBool = false;
              if (
                thisRowsExtrnlCodeStr === `FRING` ||
                thisRowsExtrnlCodeStr === `FRNGO` ||
                thisRowsExtrnlCodeStr === `FRNGD`
              ) {
                thisRowIsFringeBool = true;
              } else if (thisRowsExtrnlCodeStr === `TC`) {
                thisRowIsTCBool = true;
              }
              return (
                <tr key={`tbodyRow${index1 + 1}`}>
                  {thisTblRowArry.map((thisTblRowCellValVar, index2) => {
                    let tdClassStrPerColIndxOrRowType = ``;
                    if (thisRowIsFringeBool) {
                      tdClassStrPerColIndxOrRowType = `lightGreenFilledCell`;
                    } else if (thisRowIsTCBool) {
                      tdClassStrPerColIndxOrRowType = `lightPurpleFilledCell`;
                    } else if (index2 === 4 || index2 === 15) {
                      tdClassStrPerColIndxOrRowType = `medBlueFilledCell`;
                    } else if (
                      index2 === 6 ||
                      (index2 > 7 && index2 < 10) ||
                      (index2 > 10 && index2 < 14) ||
                      index2 === 16 ||
                      index2 === 19 ||
                      index2 > 20
                    ) {
                      tdClassStrPerColIndxOrRowType = `medGreyFilledCell`;
                    } else if (index2 === 14) {
                      tdClassStrPerColIndxOrRowType = `lightGreyFilledCell`;
                    }
                    return (
                      <td
                        key={`tbR${index1 + 1}Td${index2 + 1}`}
                        className={tdClassStrPerColIndxOrRowType}
                      >
                        {thisTblRowCellValVar}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
