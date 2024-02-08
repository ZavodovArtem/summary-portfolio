import React, { ChangeEvent, useState, useRef } from "react";  
import './Freader.css'
import * as XLSX from 'xlsx';


type RowType = any[] []

function Freader() {

    const [tableRows, setTableRows] = useState<RowType>([]);
    const [displayedRows, setDisplayedRows] = useState<RowType>([])
    const [searchResult, setSearchResult] = useState<string>("");

    const searchInputRef = useRef<HTMLInputElement>(null)


    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        let files = event.target.files;
        if (!files) return;
        let file = files[0];
        let reader = new FileReader();
    
        reader.onload = (e: ProgressEvent<FileReader> ) => {
            const result = e.target?.result as ArrayBuffer
            const data = new Uint8Array(result);
            const workbook = XLSX.read(data, {type: 'array'});
    
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as RowType;
    
            setTableRows(jsonData);
            setDisplayedRows(jsonData)     
        };
    
        reader.readAsArrayBuffer(file);
    }
    
    function performSearch() {
        // const searchInput = document.getElementById('searchInput') as HTMLInputElement
        // const searchText = searchInput?.value?.toLowerCase() || "";

        const searchText = searchInputRef.current?.value?.toLocaleLowerCase() || "";
        
        const filteredRows = tableRows.filter(row => 
            row.some(cell => String(cell).toLowerCase().includes(searchText))
            )
    

        setDisplayedRows(filteredRows);
        setSearchResult(filteredRows.length > 0 ? "Номер найден" : " Номер не найден");
    }
    
    return(
        <>
            <p className="containerReader">Заводов</p>
            <div className="containerReader">
                <label className="la">
                    <input type="file"  className="f" id="fileInput" onChange={handleFile} />
                    <span className="s">Выберите файл</span>
                </label>
                <input ref={searchInputRef} className="searchReader" type="text" placeholder="Поиск..." />
                <button className="searchB" onClick= {performSearch} >Поиск</button>
            </div>
            <div className="containerReader">
                <table className="tab" id="excelData">
                    <tbody>
                        {displayedRows.map((row, index) =>(
                            <tr key={index}> 
                                {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="find" id="searchResult">{searchResult}</p>
            </div>
        </>
    )
}

export default Freader