window.__noodl_modules = [];
window.Noodl = {
    defineModule:function(m) {
        window.__noodl_modules.push(m);
    },
    deployed: true,
    Env: {}
}

window.projectData = {"settings":{"bodyScroll":true,"navigationPathType":"path"},"components":[{"name":"/App","nodes":[{"id":"246f9453-a119-ac78-171e-3806cf596ecc","type":"Group","parameters":{"backgroundColor":"Primary Subtle","minHeight":{"value":100,"unit":"vh"}},"ports":[],"children":[{"id":"fe78f86a-146c-8947-e8fe-ac43d95262b2","type":"Group","parameters":{"sizeMode":"contentHeight","visible":true,"mounted":true},"ports":[],"children":[{"id":"42f595af-f335-1ef6-d1b7-74d53219d7c1","type":"/Header","parameters":{},"ports":[],"children":[]},{"id":"55c9ed9c-c210-a92b-73fc-7e5b4c8798c4","type":"/Navigation Bar","parameters":{"Layout":"row"},"ports":[],"children":[]}]},{"id":"a24a02ae-c1b8-1250-72c3-a1d48cbc9558","type":"Router","parameters":{"name":"Main","pages":{"routes":["/Welcome","/Student Pages/Student","/Student Pages/Connect","/Content Details","/Student Pages/Resources","/Student Pages/Job Board","/Student Pages/Virtual","/Student Pages/Virtual/Profile"],"startPage":"/Welcome"},"backgroundColor":"transparent"},"ports":[],"children":[]}]},{"id":"5dfe5778-3808-769c-bfb5-cc1f50f74b9b","type":"Expression","parameters":{"expression":"window.location.pathname !== \"/welcome\" && window.location.pathname !== \"/\""},"ports":[],"children":[]},{"id":"aae2a238-a3a7-075b-23b0-fdf9ed549bc0","type":"Static Data","parameters":{"type":"csv","json":"[\n   {\n      \"Title\":\"Client meeting\",\n      \"Category\":\"Work\",\n      \"Date\":\"Jan 10, 2023\",\n      \"Background Color\":\"#E6E1FE\",\n      \"Image\":\"logo.png\"\n   },\n   {\n      \"Title\":\"Spanish class\",\n      \"Category\":\"Study\",\n      \"Date\":\"Jan 11, 2023\",\n      \"Background Color\":\"#FEF5E2\",\n      \"Image\":\"logo.png\"\n   },\n   {\n      \"Title\":\"Groceries shopping\",\n      \"Category\":\"Shopping\",\n      \"Date\":\"Jan 13, 2023\",\n      \"Background Color\":\"#DDF2F4\",\n      \"Image\":\"logo.png\"\n   },\n   {\n      \"Title\":\"Doctors appointment\",\n      \"Category\":\"Appointment\",\n      \"Date\":\"Jan 17, 2023\",\n      \"Background Color\":\"#DDDDDD\",\n      \"Image\":\"logo.png\"\n   }\n]","csv":"Title,Category,Date,Background Color,Image,Content,Content Preview\r\nIntern Needed!,Job Board,2 Feb,#FFFFFF,parents.png,\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \",\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \"\r\nHow to Nail Your First Interview,Resources,3 Feb,#FFFFFF,parents.png,\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \",\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \"\r\nMy journey as fireworks engineer,Resources,4 Feb,#FFFFFF,parents.png,\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \",\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \"\r\nFuture of Work: 2030,Resources,5 Feb,#FFFFFF,parents.png,\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \",\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \""},"ports":[],"children":[]},{"id":"387ab390-d1b6-56e0-4c90-43ee6df954f4","type":"Collection2","parameters":{"collectionId":"Content"},"ports":[],"children":[]},{"id":"edafda58-1e12-0114-08ce-ca2f73c255e1","type":"Expression","parameters":{"expression":"if (window.location.pathname == \"/student\") location. reload();"},"ports":[],"children":[]},{"id":"1513deac-8b2f-e794-c49e-6a9a183a4334","type":"Variable2","parameters":{"name":"MountHeader"},"ports":[],"children":[]},{"id":"a06e8229-75a7-df82-ead4-0d5495f86a3d","type":"Variable2","parameters":{"name":"Name"},"ports":[],"children":[]}],"connections":[{"sourceId":"aae2a238-a3a7-075b-23b0-fdf9ed549bc0","sourcePort":"items","targetId":"387ab390-d1b6-56e0-4c90-43ee6df954f4","targetPort":"items"},{"sourceId":"1513deac-8b2f-e794-c49e-6a9a183a4334","sourcePort":"value","targetId":"fe78f86a-146c-8947-e8fe-ac43d95262b2","targetPort":"mounted"},{"sourceId":"5dfe5778-3808-769c-bfb5-cc1f50f74b9b","sourcePort":"result","targetId":"1513deac-8b2f-e794-c49e-6a9a183a4334","targetPort":"value"}],"ports":[],"roots":["246f9453-a119-ac78-171e-3806cf596ecc"],"metadata":{"canvasSize":{"width":"1039px","height":"751px"},"canvasPos":{"x":0,"y":0}}},{"name":"/Header","nodes":[{"id":"f4105b43-149a-a2f8-d980-6f4a97ffc385","type":"Group","parameters":{"flexDirection":"row","paddingTop":{"value":4,"unit":"px"},"sizeMode":"contentHeight","backgroundColor":"White","borderStyle":"none"},"ports":[],"children":[{"id":"3cffa3d4-f87f-0976-105b-fa4bb047d7a2","type":"Image","parameters":{"src":"header-logo.png","sizeMode":"contentWidth","height":{"value":40,"unit":"px"},"marginLeft":{"value":12,"unit":"px"}},"ports":[],"children":[]},{"id":"83dda7c5-e6b1-5a8f-f6d4-dd446bac0fed","type":"Group","parameters":{"flexDirection":"row","alignX":"right","marginRight":{"value":12,"unit":"px"},"sizeMode":"contentHeight","justifyContent":"flex-end"},"ports":[],"children":[{"id":"3b5de3f2-583b-e228-4685-a857b2be27f9","type":"net.noodl.controls.textinput","parameters":{"useLabel":false,"placeholder":"Search using AI","height":{"value":30,"unit":"px"},"alignY":"center","marginLeft":{"value":16,"unit":"px"},"maxWidth":{"value":320,"unit":"px"},"borderColor":"Grey - 300"},"ports":[],"children":[]},{"id":"3a405501-6453-6405-75f3-79f1b1bb5123","type":"/Reusable/Grey icon","parameters":{"Icon":{"class":"material-icons","code":"message","codeAsClass":false}},"ports":[],"children":[]},{"id":"2f6bc52a-13b0-4929-72e2-5b0a6b11e060","type":"/Reusable/Grey icon","parameters":{"Icon":{"class":"material-icons","code":"settings","codeAsClass":false}},"ports":[],"children":[]}]}]},{"id":"53bc9ffe-7b28-c9a9-67f5-e6641b5f2f0d","type":"RouterNavigate","parameters":{"router":"Main","target":"/Welcome"},"ports":[],"children":[]},{"id":"b4fb4c96-12f2-39b2-35bb-887f4435eb73","type":"Set Variable","parameters":{"name":"MountHeader","setWith":"boolean","value":false},"ports":[],"children":[]}],"connections":[{"sourceId":"3cffa3d4-f87f-0976-105b-fa4bb047d7a2","sourcePort":"onClick","targetId":"b4fb4c96-12f2-39b2-35bb-887f4435eb73","targetPort":"do"},{"sourceId":"b4fb4c96-12f2-39b2-35bb-887f4435eb73","sourcePort":"done","targetId":"53bc9ffe-7b28-c9a9-67f5-e6641b5f2f0d","targetPort":"navigate"}],"ports":[],"roots":["f4105b43-149a-a2f8-d980-6f4a97ffc385"]},{"name":"/Reusable/Grey icon","nodes":[{"id":"254eecf6-3efc-0cc9-3bd7-12f324b0f05b","type":"Group","parameters":{"sizeMode":"contentSize"},"ports":[],"children":[{"id":"6b52d4d5-0877-7eb9-cbd3-1bc2b737a4d0","type":"net.noodl.visual.icon","parameters":{"iconColor":"Grey - 700","paddingTop":{"value":8,"unit":"px"},"paddingBottom":{"value":8,"unit":"px"},"paddingLeft":{"value":8,"unit":"px"},"paddingRight":{"value":8,"unit":"px"},"iconSize":{"value":24,"unit":"px"}},"ports":[],"children":[]}]},{"id":"8ce1fe74-572b-22b6-1a3c-a6b99c9f0a65","type":"Component Inputs","parameters":{},"ports":[],"children":[]}],"connections":[{"sourceId":"8ce1fe74-572b-22b6-1a3c-a6b99c9f0a65","sourcePort":"Icon","targetId":"6b52d4d5-0877-7eb9-cbd3-1bc2b737a4d0","targetPort":"iconIconSource"}],"ports":[{"name":"Icon","type":"icon","group":"Icon","plug":"input","index":1}],"roots":["254eecf6-3efc-0cc9-3bd7-12f324b0f05b"]},{"name":"/Navigation Bar","nodes":[{"id":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","type":"Group","parameters":{"sizeMode":"explicit","alignItems":"flex-start","height":{"value":40,"unit":"px"},"alignY":"top","borderTopStyle":"solid","borderTopColor":"Grey - 300","borderStyle":"none","borderBottomStyle":"solid","borderBottomWidth":{"value":1,"unit":"px"},"borderBottomColor":"Grey - 400","boxShadowEnabled":false},"ports":[],"children":[{"id":"2169650b-9ccd-89a6-3cce-f8e8d8b945b3","type":"For Each","parameters":{"template":"/Navigation Bar/Navigation Item"},"ports":[],"children":[]}]},{"id":"a0585bd7-7d8b-dc6f-197a-f4b10c9d7ab7","type":"Component Inputs","parameters":{},"ports":[],"children":[]},{"id":"5b09ed96-a7e7-65bf-f917-b242e225f9bb","type":"JavaScriptFunction","parameters":{"scriptInputs":[{"id":"6slp","label":"Items"}],"intype-Items":"array","in-Items":"[\n    {\n        // Icons are references to material icons, \n        // see https://fonts.google.com/icons?selected=Material+Icons\n        Icon:\"home\",\n\n        // The label to be shown on the nav item\n        Label:\"Home\",\n\n        // The url to navigate to when clicked\n        Url:\"/student\",\n\n        // Setting this to true will indicate that this\n        // item should be selected if there is no path\n        // or if no other path matches\n        IsHome:true,\n    },\n     {\n        Icon:\"library_books\",\n        Label:\"Resources\",\n        Url:\"/resources\",\n    },\n    {\n        Icon:\"language\",\n        Label:\"Virtual\",\n        Url:\"/virtual\",\n    },\n    {\n        Icon:\"business_center\",\n        Label:\"Job Board\",\n        Url:\"/job-board\",\n    },\n    {\n        Icon:\"people\",\n        Label:\"Connect\",\n        Url:\"/connect\",\n    },\n    {\n        Icon:\"account_circle\",\n        Label:\"Profile\",\n        Url:\"/profile\",\n    }\n]","functionScript":"Outputs.Items = Inputs.Items.map(i => ({\n    Label:i.Label,\n    Url:i.Url,\n    Icon:i.Icon,\n    // Set the \"selected\" item as the one with matching path name, or it it's an empty pathname\n    // the IsHome item\n    Selected:Inputs.CurrentPathName !== undefined && (Inputs.CurrentPathName === '/' && i.IsHome) || (Inputs.CurrentPathName !== '/' && i.Url.startsWith(Inputs.CurrentPathName))\n}))"},"ports":[{"name":"intype-Items","displayName":"Type","editorName":"Items | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"}],"allowEditOnly":true},"default":"string","parent":"scriptInputs","parentItemId":"6slp","index":4},{"name":"in-Items","displayName":"Items","plug":"input","type":"array","group":"Inputs","index":5},{"name":"in-CurrentPathName","displayName":"CurrentPathName","plug":"input","type":"*","group":"Inputs","index":6},{"name":"out-Items","displayName":"Items","plug":"output","type":"*","group":"Outputs","index":7}],"children":[]},{"id":"74274364-f304-e630-8315-917c36309772","type":"Component Outputs","parameters":{},"ports":[],"children":[]},{"id":"e632c31a-bdc4-9360-2921-1fd33143a8c6","type":"JavaScriptFunction","parameters":{"functionScript":"const onUrlChange = () => {\n    // Send the current pathname as an output\n    Outputs.PathName = document.location.pathname\n}\n\n// Detect a change of the pathname\nif (window.history && window.history.pushState) {\n    window.addEventListener('popstate', onUrlChange)\n} else {\n    window.addEventListener('hashchange', onUrlChange)\n}\n\nonUrlChange()"},"ports":[{"name":"out-PathName","displayName":"PathName","plug":"output","type":"*","group":"Outputs","index":4}],"children":[]},{"id":"0e892f47-6823-c2cd-8cbf-a9e145d8b08b","type":"PageStackNavigateToPath","parameters":{},"ports":[],"children":[]},{"id":"ce2f5169-8f1d-b18c-048c-de60a70f9d0e","type":"Component Inputs","parameters":{},"ports":[],"children":[]}],"connections":[{"sourceId":"a0585bd7-7d8b-dc6f-197a-f4b10c9d7ab7","sourcePort":"Items","targetId":"5b09ed96-a7e7-65bf-f917-b242e225f9bb","targetPort":"in-Items"},{"sourceId":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","sourcePort":"didMount","targetId":"e632c31a-bdc4-9360-2921-1fd33143a8c6","targetPort":"run"},{"sourceId":"e632c31a-bdc4-9360-2921-1fd33143a8c6","sourcePort":"out-PathName","targetId":"5b09ed96-a7e7-65bf-f917-b242e225f9bb","targetPort":"in-CurrentPathName"},{"sourceId":"ce2f5169-8f1d-b18c-048c-de60a70f9d0e","sourcePort":"Magin Top","targetId":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","targetPort":"marginTop"},{"sourceId":"ce2f5169-8f1d-b18c-048c-de60a70f9d0e","sourcePort":"Margin Bottom","targetId":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","targetPort":"marginBottom"},{"sourceId":"ce2f5169-8f1d-b18c-048c-de60a70f9d0e","sourcePort":"Margin Left","targetId":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","targetPort":"marginLeft"},{"sourceId":"ce2f5169-8f1d-b18c-048c-de60a70f9d0e","sourcePort":"Margin Right","targetId":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","targetPort":"marginRight"},{"sourceId":"ce2f5169-8f1d-b18c-048c-de60a70f9d0e","sourcePort":"Align X","targetId":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","targetPort":"alignX"},{"sourceId":"ce2f5169-8f1d-b18c-048c-de60a70f9d0e","sourcePort":"Align Y","targetId":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","targetPort":"alignY"},{"sourceId":"ce2f5169-8f1d-b18c-048c-de60a70f9d0e","sourcePort":"Position","targetId":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","targetPort":"position"},{"sourceId":"ce2f5169-8f1d-b18c-048c-de60a70f9d0e","sourcePort":"Layout","targetId":"abb75ef2-92cc-92b1-c0e7-8fb7506db321","targetPort":"flexDirection"},{"sourceId":"5b09ed96-a7e7-65bf-f917-b242e225f9bb","sourcePort":"out-Items","targetId":"2169650b-9ccd-89a6-3cce-f8e8d8b945b3","targetPort":"items"},{"sourceId":"2169650b-9ccd-89a6-3cce-f8e8d8b945b3","sourcePort":"itemOutputSignal-Click","targetId":"0e892f47-6823-c2cd-8cbf-a9e145d8b08b","targetPort":"navigate"},{"sourceId":"2169650b-9ccd-89a6-3cce-f8e8d8b945b3","sourcePort":"itemOutput-Url","targetId":"0e892f47-6823-c2cd-8cbf-a9e145d8b08b","targetPort":"path"},{"sourceId":"2169650b-9ccd-89a6-3cce-f8e8d8b945b3","sourcePort":"itemOutputSignal-Click","targetId":"74274364-f304-e630-8315-917c36309772","targetPort":"Click"},{"sourceId":"2169650b-9ccd-89a6-3cce-f8e8d8b945b3","sourcePort":"itemOutput-Url","targetId":"74274364-f304-e630-8315-917c36309772","targetPort":"Url"}],"ports":[{"name":"Click","type":"signal","group":"Events","plug":"output","index":0},{"name":"Items","type":"array","default":"[\n    {\n        // Icons are references to material icons, \n        // see https://fonts.google.com/icons?selected=Material+Icons\n        Icon:\"home\",\n\n        // The label to be shown on the nav item\n        Label:\"Home\",\n\n        // The url to navigate to when clicked\n        Url:\"/student\",\n\n        // Setting this to true will indicate that this\n        // item should be selected if there is no path\n        // or if no other path matches\n        IsHome:true,\n    },\n     {\n        Icon:\"library_books\",\n        Label:\"Resources\",\n        Url:\"/resources\",\n    },\n    {\n        Icon:\"language\",\n        Label:\"Virtual\",\n        Url:\"/virtual\",\n    },\n    {\n        Icon:\"business_center\",\n        Label:\"Job Board\",\n        Url:\"/job-board\",\n    },\n    {\n        Icon:\"people\",\n        Label:\"Connect\",\n        Url:\"/connect\",\n    },\n    {\n        Icon:\"account_circle\",\n        Label:\"Profile\",\n        Url:\"/profile\",\n    }\n]","group":"General","plug":"input","index":0},{"name":"Magin Top","type":{"name":"number","units":["px","%"],"defaultUnit":"px","marginPaddingComp":"margin-top"},"group":"Margins","plug":"input","index":0},{"name":"Url","type":{"name":"*","allowConnectionsOnly":true},"group":"Events","plug":"output","index":1},{"name":"Margin Bottom","type":{"name":"number","units":["px","%"],"defaultUnit":"px","marginPaddingComp":"margin-bottom"},"group":"Margins","plug":"input","index":1},{"name":"Margin Left","type":{"name":"number","units":["px","%"],"defaultUnit":"px","marginPaddingComp":"margin-left"},"group":"Margins","plug":"input","index":2},{"name":"Margin Right","type":{"name":"number","units":["px","%"],"defaultUnit":"px","marginPaddingComp":"margin-right"},"group":"Margins","plug":"input","index":3},{"name":"Align X","type":{"name":"enum","enums":[{"label":"Left","value":"left"},{"label":"Center","value":"center"},{"label":"Right","value":"right"}],"alignComp":"horizontal"},"group":"Alignment","plug":"input","index":4},{"name":"Align Y","type":{"name":"enum","enums":[{"label":"Top","value":"top"},{"label":"Center","value":"center"},{"label":"Bottom","value":"bottom"}],"alignComp":"vertical"},"default":"top","group":"Alignment","plug":"input","index":5},{"name":"Position","type":{"name":"enum","enums":[{"label":"In Layout","value":"relative"},{"label":"Absolute","value":"absolute"},{"label":"Sticky","value":"sticky"},{"label":"Fixed","value":"fixed"}]},"default":"relative","group":"Layout","plug":"input","index":6},{"name":"Layout","type":{"name":"enum","enums":[{"label":"None","value":"none"},{"label":"Vertical","value":"column"},{"label":"Horizontal","value":"row"}]},"default":"column","group":"Layout","plug":"input","index":7}],"roots":["abb75ef2-92cc-92b1-c0e7-8fb7506db321"]},{"name":"/Navigation Bar/Navigation Item","nodes":[{"id":"d280f9e8-691d-bbe0-2bdc-d049b11aff85","type":"Group","parameters":{"sizeMode":"explicit","flexDirection":"column","alignItems":"center","styleCss":"cursor:pointer;","justifyContent":"center","backgroundColor":"White"},"stateParameters":{"hover":{"backgroundColor":"Grey - 300"}},"ports":[],"children":[{"id":"9c59510c-6736-6fab-f57c-64c73bbbc59a","type":"net.noodl.visual.icon","parameters":{"iconIconSource":{"class":"material-icons","code":"account_circle"},"iconColor":"Grey - 900","iconSize":{"value":24,"unit":"px"},"marginBottom":{"value":4,"unit":"px"}},"ports":[],"children":[]}]},{"id":"93b8991e-66a7-bb90-90ff-1e8793e25feb","type":"Condition","parameters":{},"ports":[],"children":[]},{"id":"5ca4165f-8edb-4a6f-4d99-837dd5c2c91c","type":"States","parameters":{"states":"selected,not selected","values":"color,bg color","type-color":"color","value-selected-color":"Primary","value-not selected-color":"Grey - 700","currentState":"not selected","type-bg color":"color","value-not selected-bg color":"transparent"},"ports":[],"children":[]},{"id":"fbe26ae8-00f5-f625-93b2-aa5564695d53","type":"Component Outputs","parameters":{},"ports":[],"children":[]},{"id":"ee1c80c4-6cd2-4c1f-6c2d-1a069a67b3cf","type":"JavaScriptFunction","parameters":{"functionScript":"Outputs.IconSource = {\n    \"class\": \"material-icons\",\n    \"code\": Inputs.IconCode\n}\nOutputs.HaveIcon = Inputs.IconCode !== undefined && Inputs.IconCode !== \"\""},"ports":[{"name":"in-IconCode","displayName":"IconCode","plug":"input","type":"*","group":"Inputs","index":4},{"name":"out-IconSource","displayName":"IconSource","plug":"output","type":"*","group":"Outputs","index":5},{"name":"out-HaveIcon","displayName":"HaveIcon","plug":"output","type":"*","group":"Outputs","index":6}],"children":[]},{"id":"30eebdc6-528d-af36-50cf-b967956fe353","type":"Model2","parameters":{"idSource":"foreach","properties":"Icon,Label,Url,Selected"},"ports":[],"children":[]},{"id":"581bc472-ee0f-8747-e057-def15fe54b82","type":"Text","parameters":{"sizeMode":"contentSize","color":"Grey - 900","textStyle":"Label Medium","textAlignX":"center"},"ports":[],"children":[]}],"connections":[{"sourceId":"5ca4165f-8edb-4a6f-4d99-837dd5c2c91c","sourcePort":"color","targetId":"581bc472-ee0f-8747-e057-def15fe54b82","targetPort":"color"},{"sourceId":"5ca4165f-8edb-4a6f-4d99-837dd5c2c91c","sourcePort":"color","targetId":"9c59510c-6736-6fab-f57c-64c73bbbc59a","targetPort":"iconColor"},{"sourceId":"93b8991e-66a7-bb90-90ff-1e8793e25feb","sourcePort":"onfalse","targetId":"5ca4165f-8edb-4a6f-4d99-837dd5c2c91c","targetPort":"to-not selected"},{"sourceId":"93b8991e-66a7-bb90-90ff-1e8793e25feb","sourcePort":"ontrue","targetId":"5ca4165f-8edb-4a6f-4d99-837dd5c2c91c","targetPort":"to-selected"},{"sourceId":"d280f9e8-691d-bbe0-2bdc-d049b11aff85","sourcePort":"onClick","targetId":"fbe26ae8-00f5-f625-93b2-aa5564695d53","targetPort":"Click"},{"sourceId":"ee1c80c4-6cd2-4c1f-6c2d-1a069a67b3cf","sourcePort":"out-HaveIcon","targetId":"9c59510c-6736-6fab-f57c-64c73bbbc59a","targetPort":"mounted"},{"sourceId":"ee1c80c4-6cd2-4c1f-6c2d-1a069a67b3cf","sourcePort":"out-IconSource","targetId":"9c59510c-6736-6fab-f57c-64c73bbbc59a","targetPort":"iconIconSource"},{"sourceId":"30eebdc6-528d-af36-50cf-b967956fe353","sourcePort":"prop-Label","targetId":"581bc472-ee0f-8747-e057-def15fe54b82","targetPort":"text"},{"sourceId":"30eebdc6-528d-af36-50cf-b967956fe353","sourcePort":"prop-Selected","targetId":"93b8991e-66a7-bb90-90ff-1e8793e25feb","targetPort":"condition"},{"sourceId":"30eebdc6-528d-af36-50cf-b967956fe353","sourcePort":"prop-Url","targetId":"fbe26ae8-00f5-f625-93b2-aa5564695d53","targetPort":"Url"},{"sourceId":"30eebdc6-528d-af36-50cf-b967956fe353","sourcePort":"prop-Icon","targetId":"ee1c80c4-6cd2-4c1f-6c2d-1a069a67b3cf","targetPort":"in-IconCode"}],"ports":[{"name":"Click","type":"signal","plug":"output","index":1},{"name":"Url","type":{"name":"*","allowConnectionsOnly":true},"plug":"output","index":2}],"roots":["d280f9e8-691d-bbe0-2bdc-d049b11aff85","581bc472-ee0f-8747-e057-def15fe54b82"]}],"componentIndex":{"b1-4e567bda502e1b23":{"components":["/Welcome","/Reusable/Demo Navigator","/Reusable/Icon and text","/Form"],"dependencies":[]},"b2-1f227fc779eca43d":{"components":["/Student Pages/Student","/Profile Dummy"],"dependencies":["b3-953f4d5e3cacaca6"]},"b3-953f4d5e3cacaca6":{"components":["/Cards/Content Card"],"dependencies":["b4-463413f4657f58b7"]},"b4-463413f4657f58b7":{"components":["/Cards/Content Card/Content card icon"],"dependencies":[]},"b5-798cd377a32c2951":{"components":["/Student Pages/Connect","/Cards/User Card"],"dependencies":[]},"b6-a8c270d46fcd5eb6":{"components":["/Content Details"],"dependencies":["b4-463413f4657f58b7"]},"b7-846cb303bc17b013":{"components":["/Student Pages/Resources"],"dependencies":["b3-953f4d5e3cacaca6"]},"b8-0dfe32032ad58f0b":{"components":["/Student Pages/Job Board"],"dependencies":["b3-953f4d5e3cacaca6"]},"b9-4c9470ba94d069cf":{"components":["/Student Pages/Virtual"],"dependencies":[]},"b10-20a80cb21a29ac6d":{"components":["/Student Pages/Virtual/Profile"],"dependencies":[]},"b11-9ab06c22d0dc44bf":{"components":["/Form/Checkbox","/Form/Date Input","/Form/Drop Down","/Form/Error","/Form/Multi Choice","/Form/Multi Choice/Item","/Form/Set Form Value","/Form/Single Choice","/Form/Single Choice/Item","/Form/Slider","/Form/Text Area","/Form/Text Input"],"dependencies":[]}},"routerIndex":{"routers":[{"name":"Main","pages":{"routes":["/Welcome","/Student Pages/Student","/Student Pages/Connect","/Content Details","/Student Pages/Resources","/Student Pages/Job Board","/Student Pages/Virtual","/Student Pages/Virtual/Profile"],"startPage":"/Welcome"},"backgroundColor":"transparent"}],"pages":[{"path":"details/{Content Id}","title":"Content Details","component":"/Content Details"},{"path":"connect","title":"Connect","component":"/Student Pages/Connect"},{"path":"job-board","title":"Job Board","component":"/Student Pages/Job Board"},{"path":"resources","title":"Resources","component":"/Student Pages/Resources"},{"path":"student","title":"Student","component":"/Student Pages/Student"},{"path":"virtual","title":"Virtual","component":"/Student Pages/Virtual"},{"path":"profile","title":"Profile","component":"/Student Pages/Virtual/Profile"},{"path":"welcome","title":"Welcome","component":"/Welcome"}]},"rootComponent":"/App","rootNode":"246f9453-a119-ac78-171e-3806cf596ecc","metadata":{"styles":{"text":{"Display":{"letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none","fontSize":{"value":"40","unit":"px"},"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","color":"#000000"},"Headline":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"32","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Large":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"24","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120%","unit":"px"},"textTransform":"none"},"Title Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Small":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Large":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Small":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"12","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Body Large":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Medium":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Small":{"letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none","fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000"}},"colors":{"Primary":"#4C71BF","Primary Dark":"#2E519A","Primary Subtle":"#E5EEFF","Primary Light":"#F7F5FF","Grey - 900":"#1F1F1F","Grey - 800":"#383838","Grey - 700":"#4C4C4C","Grey - 600":"#757575","Grey - 500":"#A5A5A5","Grey - 400":"#CECECE","Grey - 300":"#E9E9E9","Grey - 200":"#F4F4F4","Grey - 100":"#FBFBFB","Success":"#49AD7F","Notice":"#F2C441","Danger":"#F75A4F","White":"#FFFFFF","Black":"#000000","Accent":"#FFD517","Highlight":"#FFF3BE"}}},"variants":[{"typename":"Text","parameters":{"textStyle":"Body Medium"},"stateParameters":{},"stateTransitions":{}},{"typename":"net.noodl.controls.button","parameters":{"height":{"value":40,"unit":"px"},"sizeMode":"contentWidth","backgroundColor":"Primary","iconIconSource":{"class":"material-icons","code":"home"},"iconSpacing":{"value":8,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"textStyle":"Label Medium","paddingTop":{"value":0,"unit":"px"},"paddingLeft":{"value":24,"unit":"px"},"paddingRight":{"value":24,"unit":"px"},"paddingBottom":{"value":0,"unit":"px"},"color":"#FFFFFF","minWidth":{"value":80,"unit":"px"},"useIcon":false,"iconSize":{"value":20,"unit":"px"}},"stateParameters":{"hover":{"backgroundColor":"Primary Dark"},"pressed":{"backgroundColor":"Primary","color":"White"},"disabled":{"backgroundColor":"Grey - 300","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.textinput","parameters":{"useLabel":true,"sizeMode":"explicit","height":{"value":40,"unit":"px"},"textStyle":"Body Medium","borderStyle":"solid","borderRadius":{"value":4,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 700","labeltextStyle":"Label Small","paddingLeft":{"value":12,"unit":"px"},"paddingRight":{"value":8,"unit":"px"},"labelSpacing":{"value":4,"unit":"px"},"placeholder":"Type here","color":"Grey - 900","placeHolderOpacity":0.65,"enabled":true,"blockTouch":false,"useIcon":false,"iconIconSource":{"class":"material-icons","code":"home"},"iconSize":{"value":20,"unit":"px"},"iconSpacing":{"value":4,"unit":"px"},"iconColor":"Grey - 700","labelcolor":"Grey - 700"},"stateParameters":{"hover":{"labelcolor":"Grey - 700","borderColor":"Grey - 700","borderStyle":"solid","color":"Grey - 900"},"focused":{"borderColor":"Primary","labelcolor":"Primary","borderWidth":{"value":1,"unit":"px"},"boxShadowEnabled":false,"boxShadowColor":"Primary","borderStyle":"solid"},"disabled":{"labelcolor":"Grey - 500","backgroundColor":"Grey - 200","borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 500","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"disabled":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.options","parameters":{"sizeMode":"explicit","height":{"value":40,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"borderColor":"Grey - 700","boxShadowColor":"Dark Gray","useIcon":true,"iconIconSource":{"class":"material-icons","code":"expand_more"},"iconPlacement":"right","iconSize":{"value":20,"unit":"px"},"paddingRight":{"value":12,"unit":"px"},"textStyle":"Body Medium","paddingLeft":{"value":12,"unit":"px"},"marginTop":{"value":0,"unit":"px"},"width":{"value":100,"unit":"%"},"iconColor":"Grey - 700","placeholderOpacity":0.65,"placeholder":"Select option","useLabel":true,"labelSpacing":{"value":4,"unit":"px"},"labeltextStyle":"Label Small","labelcolor":"Grey - 700","items":"[\n    {\"Label\":\"Option 1\", \"Value\":\"1\"},\n    {\"Label\":\"Option 2\", \"Value\":\"2\"},\n    {\"Label\":\"Option 3\", \"Value\":\"3\"}\n]"},"stateParameters":{"hover":{"borderColor":"Grey - 700","borderRadius":{"value":4,"unit":"px"},"iconColor":"Grey - 900","iconSize":{"value":20,"unit":"px"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Grey - 700"},"focused":{"borderColor":"Primary","boxShadowColor":"Primary","borderRadius":{"value":4,"unit":"px"},"useIcon":true,"iconColor":"Primary","iconIconSource":{"class":"material-icons","code":"keyboard_arrow_up"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Primary"},"pressed":{"borderRadius":{"value":4,"unit":"px"}},"disabled":{"labelcolor":"Grey - 500","iconColor":"Grey - 500","borderColor":"Grey - 500","color":"Grey - 600","backgroundColor":"Grey - 200"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.range","parameters":{"thumbColor":"Primary","thumbBorderRadius":{"value":100,"unit":"%"},"trackHeight":{"value":4,"unit":"px"},"trackActiveColor":"Primary","trackColor":"Primary Subtle","width":{"value":100,"unit":"%"},"trackBorderRadius":{"value":100,"unit":"px"},"thumbHeight":{"value":16,"unit":"px"},"thumbWidth":{"value":16,"unit":"px"}},"stateParameters":{"hover":{"thumbColor":"Primary Dark","trackActiveColor":"Primary Dark"},"disabled":{"trackActiveColor":"Grey - 500","trackColor":"Grey - 300","thumbColor":"Grey - 500"}},"stateTransitions":{}},{"typename":"net.noodl.controls.checkbox","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useIcon":false,"borderWidth":{"value":1,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Medium","borderRadius":{"value":2,"unit":"px"},"borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"useIcon":true,"iconIconSource":{"class":"material-icons","code":"check"},"backgroundColor":"Primary","borderColor":"Primary","iconSize":{"value":16,"unit":"px"}},"disabled":{"opacity":0.5},"hover":{"borderColor":"Grey - 700"},"pressed":{}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.radiobutton","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Large","borderWidth":{"value":1,"unit":"px"},"value":"0","useIcon":false,"fillColor":"transparent","borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"marginBottom":{"value":8,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"fillColor":"Primary","borderColor":"Primary","borderWidth":{"value":1,"unit":"px"},"backgroundColor":"transparent","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"fillSpacing":{"value":2,"unit":"px"}},"hover":{"backgroundColor":"transparent","borderColor":"Grey - 700","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"}},"disabled":{"borderColor":"Grey - 500","labelcolor":"Grey - 500","fillColor":"transparent"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"name":"Section header","typename":"Text","parameters":{"textStyle":"Title Medium","text":"My supporters","color":"Grey - 800","textAlignX":"center","marginTop":{"value":24,"unit":"px"},"marginBottom":{"value":24,"unit":"px"}},"stateParameters":{},"stateTransitions":{}}]};
