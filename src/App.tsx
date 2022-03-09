import React, { useEffect } from 'react';
import './App.css';
const init = require("postman/button");
 
declare global {
  var _pm: any;
}

function App() {

  // (function (p,o,s,t,m,a,n) {
  //   !window["_pm"] && (
  //     window["_pm"] = function () { 
  //       (window["PostmanRunObject"] || (window["PostmanRunObject"] = [])).push(arguments); 
  //     }
  //   );
  //   !document.getElementById("_pm"+"PostmanRunObject") && 
  //   document.getElementsByTagName("head")[0].appendChild((
  //     (n = document.createElement("script")),
  //     (n.id = "_pm"+"PostmanRunObject"), (n.async = 1), (n.src = "https://run.pstmn.io/button.js"), n
  //   ));
  // }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
  useEffect(() => {
    init(window, 0, "postman-run-button");
    //Probably not needed anymore : _pm("env.create", "Data API", {CLUSTER_NAME: "Cluster0"}, 0);
    console.log("effect");
  }, [])

  const handleChange = () => {
    let params = {
      URL_ENDPOINT: "endpoint",
      API_KEY: "key",
      CLUSTER_NAME: "Cluster1",
      DATABASE: "database",
      COLLECTION: "coll"
    };
    _pm('env.replace', 'Data API', params, 0);
    console.log("params set");
  }

  return (
    <div className="App">
      <h1>Postman RiP PoC</h1>
      <select onChange={handleChange}>
        <option value="Cluster0">Cluster0</option>
        <option value="Cluster1">Cluster1</option>
      </select>
      <p>
        Run in Postman:
        </p>
        <div className="postman-run-button"
          data-postman-action="collection/fork"
          data-postman-var-1="17898583-25682080-e247-4d25-8e5c-1798461c7db4"
          data-postman-collection-url="entityId=17898583-25682080-e247-4d25-8e5c-1798461c7db4&entityType=collection&workspaceId=8355a86e-dec2-425c-9db0-cb5e0c3cec02"
          data-postman-param="env%5BData%20API%5D=W3sia2V5IjoiVVJMX0VORFBPSU5UIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJBUElfS0VZIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6IkNMVVNURVJfTkFNRSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjJ9LHsia2V5IjoiREFUQUJBU0UiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6IkNPTExFQ1RJT04iLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4Ijo0fV0="></div>
      
      {/* <script src="https://run.pstmn.io/button.js"></script> */}
    </div>
  );
}

export default App;
