import React, {useEffect, useState, useRef} from "react";
import useAxios from "./App_useAxios";

/* ======  useAxios       ======== */
/* HTTP request */


const App = () => {
 const {loading, data, error, refetch} = useAxios({
   url: "https://yts.mx/api/v2/list_movies.json ",
 });
//  console.log(`Loading : ${loading}\n Error:${error}\n Data:${JSON.stringify(data)}`);

  return (
    <div className="App" style={{height: "1000vh"}}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
