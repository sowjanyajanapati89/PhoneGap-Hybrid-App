var _useremail;
var _authtoken;
var _uname;
var _is_loggedin;

if(window.localStorage['_is_loggedin'] != null && window.localStorage['_is_loggedin'] != undefined){
  _is_loggedin = window.localStorage['_is_loggedin'];
}else{
  _is_loggedin = false;
}

//if(window.localStorage['_authtoken'] != null && window.localStorage['_authtoken'] != undefined) {
  _authtoken = window.localStorage['_authtoken'];
//}
//_authtoken = 'eyJhbGciOiJIUzI1NiIsImV4cCI6MTQ0NDMyMzQzMCwiaWF0IjoxNDQ0MzE5ODMwfQ.eyJyYW5kIjowLjIxMjQ2MzQ2NTM1Mzk0MDEyLCJpZCI6Ijc1NTBjZTkzLTYwYTktNDQyNi1iM2RmLTM5MGQwNzZmZTY2NiJ9.O_Ulrq1gH3XQ8J4RloYQ-ih76558OgLUlvrsy9Meg3g';
var interests = [
    {
      name:"0bf99f84-89f8-49ce-9957-df8b60660bfd",
      id:"Media",
      selected : false
    },
    {
      name:"7fd92e8e-c71a-40a3-a806-bcef228863b9",
      id:"Marketing",
      selected : false
    },
    {
      name:"c904084b-934a-4915-9937-833020adfe6d",
      id:"Health & Safety",
      selected : false
   },

   {
      name:"8832e673-44fc-4771-a66d-40dfb9d038da",
      id:"IT",
      selected : false
   },
   {
      name:"b1c8f0ab-5205-40b1-842d-e9f0a3f97476",
      id:"Legal",
      selected : false
   },
   {
      name:"02ec4725-94fa-492c-8f90-7d781905c168",
      id:"Retail",
      selected : false
   },
   {
      name:"517978aa-186d-4149-8548-c26b3d3f41cc",
      id:"Education",
      selected : false
   },
   {
      name:"f877eb40-6d22-4c17-9c70-e902d5f1d263",
      id:"Museums",
      selected : false
   },
   {
      name:"1b6205f2-02f8-4fc3-808c-e8e6b9e03c0e",
      id:"Heritage",
      selected : false
   },
   {
      name:"f76f8162-e300-403b-9c96-bae336cb9330",
      id:"Literacy",
      selected : false
   },
   {
      name:"97d6e59e-3ddd-4d76-8cde-e992049c40fc",
      id:"Libraries",
      selected : false
   },
   {
      name:"a294c916-dfbb-4eed-aa76-13e380d62b50",
      id:"Environment",
      selected : false
   },
   {
      name:"4b5f270f-723f-4aec-bbc4-6f257c3ddafa",
      id:"Animals",
      selected : false
   },
   {
      name:"6dd234b9-ce8d-439e-9379-a4093a4e8f6c",
      id:"Wildlife",
      selected : false
   },
   {
      name:"6818a00c-4b32-4838-9af4-66b7457310b0",
      id:"Conservation",
      selected : false
   },
   {
      name:"c125887f-f06a-47f9-ae55-942bf6e0aeda",
      id:"Festivals",
      selected : false
   },
   {
      name:"a654354a-943f-4a5f-926e-33d27889f19d",
      id:"Performance",
      selected : false
   },
   {
      name:"1c5c36b7-882d-497d-8247-0515f2045cbf",
      id:"Drama",
      selected : false
   },
   {
      name:"2a13e327-cdc3-4a63-a737-52c29ee8f454",
      id:"Sport",
      selected : false
   },
   {
      name:"42c360a5-4e90-4bc4-afcd-c8f5ccc09a31",
      id:"Craft",
      selected : false
   },
   {
      name:"49c16b59-d3a5-4d49-ae9c-2e665f092643",
      id:"Music",
      selected : false
   },
   {
      name:"c2d0eab4-7363-4e91-8e15-02364e8422e4",
      id:"Art",
      selected : false
   },
   {
      name:"bf021406-7d4c-46d5-9bf9-c8fe09308797",
      id:"Film",
      selected : false
   },
   {
      name:"ef94a8bb-eb86-494e-bb0c-44653280dd89",
      id:"Public events",
      selected : false
   },
   {
      name:"c1a66cf8-a685-4300-8f69-6d47a0bd93e0",
      id:"Recreation",
      selected : false
   },
   {
      name:"14e14b9c-586f-4e31-8627-7dc02a99d816",
      id:"Poverty",
      selected : false
   },
   {
      name:"089a30e6-a5a5-41fb-a4b3-9d7edd2de196",
      id:"Disaster relief",
      selected : false
   },
   {
      selected : false,
      "created":"2014-10-26T17:24:25.887147+00:00",
      name:"2326507a-d5fb-427a-a317-4f4988d37ad6",
      id:"Unemployed",
      "parent_id":"66ab0718-8bb5-450c-b21d-9c90f9452422",
      "slug":"unemployed",
      "updated":"2014-10-26T17:24:25.887169+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.909237+00:00",
      name:"6cb0fa97-3ee5-473d-929f-82a6c2ca7b6e",
      id:"International Aid",
      "parent_id":"66ab0718-8bb5-450c-b21d-9c90f9452422",
      "slug":"international-aid",
      "updated":"2014-10-26T17:24:25.909258+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.937888+00:00",
      name:"2cdfc8a6-0d08-4b9e-a252-389b516b4357",
      id:"Emergency services",
      "parent_id":"66ab0718-8bb5-450c-b21d-9c90f9452422",
      "slug":"emergency-services",
      "updated":"2014-10-26T17:24:25.937908+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.983011+00:00",
      name:"0f0fd0f9-845f-415e-a94c-5762b9060b54",
      id:"Food banks",
      "parent_id":"66ab0718-8bb5-450c-b21d-9c90f9452422",
      "slug":"food-banks",
      "updated":"2014-10-26T17:24:25.983031+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.990381+00:00",
      name:"d5d2ee64-8925-43be-888d-1eaf4df36452",
      id:"Refugees",
      "parent_id":"66ab0718-8bb5-450c-b21d-9c90f9452422",
      "slug":"refugees",
      "updated":"2014-10-26T17:24:25.990400+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.064964+00:00",
      name:"65b5d8c5-abe4-47bb-9b74-e6c0cec97ae8",
      id:"Homeless",
      "parent_id":"66ab0718-8bb5-450c-b21d-9c90f9452422",
      "slug":"homeless",
      "updated":"2014-10-26T17:24:26.064985+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.125624+00:00",
      name:"fc99930f-61e0-4dde-a941-79d9da4d3192",
      id:"Crisis Support",
      "parent_id":"66ab0718-8bb5-450c-b21d-9c90f9452422",
      "slug":"crisis-support",
      "updated":"2014-10-26T17:24:26.125644+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.186300+00:00",
      name:"06bd90b2-65c3-4d67-8233-b1e44c35f184",
      id:"Housing",
      "parent_id":"66ab0718-8bb5-450c-b21d-9c90f9452422",
      "slug":"housing",
      "updated":"2014-10-26T17:24:26.186319+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.256711+00:00",
      name:"cedd69ea-dd49-453b-96ff-a6ec5d14c4df",
      id:"Hunger",
      "parent_id":"66ab0718-8bb5-450c-b21d-9c90f9452422",
      "slug":"hunger",
      "updated":"2014-10-26T17:24:26.256731+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.028949+00:00",
      name:"4dec176f-78db-42bc-8b81-f73ac6c482f3",
      id:"Women",
      "parent_id":"70f2af2b-333b-4c66-bfdd-1dd46a89e3f7",
      "slug":"women",
      "updated":"2014-10-26T17:24:26.028968+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.032461+00:00",
      name:"8841ad2a-f281-4fbf-a5e3-2c84529f9544",
      id:"Men",
      "parent_id":"70f2af2b-333b-4c66-bfdd-1dd46a89e3f7",
      "slug":"men",
      "updated":"2014-10-26T17:24:26.032481+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.040099+00:00",
      name:"e51615c1-31d7-4236-8126-6310a6812186",
      id:"LGBT",
      "parent_id":"70f2af2b-333b-4c66-bfdd-1dd46a89e3f7",
      "slug":"lgbt",
      "updated":"2014-10-26T17:24:26.040119+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.149869+00:00",
      name:"e7cd6081-45c1-401a-b321-e1d679612948",
      id:"Faith",
      "parent_id":"70f2af2b-333b-4c66-bfdd-1dd46a89e3f7",
      "slug":"faith",
      "updated":"2014-10-26T17:24:26.149889+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.153376+00:00",
      name:"0c1d7fc3-2589-431e-bdd3-3557adb98ef6",
      id:"Race & Ethnicity",
      "parent_id":"70f2af2b-333b-4c66-bfdd-1dd46a89e3f7",
      "slug":"race-ethnicity",
      "updated":"2014-10-26T17:24:26.153416+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.207104+00:00",
      name:"12d24d50-d807-42a2-a58b-301403429dca",
      id:"Immigrants",
      "parent_id":"70f2af2b-333b-4c66-bfdd-1dd46a89e3f7",
      "slug":"immigrants",
      "updated":"2014-10-26T17:24:26.207124+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.057986+00:00",
      name:"8d67d71d-62b3-41b4-93ed-dd7abf27f4cf",
      id:"Justice",
      "parent_id":"48f607ba-71ae-4786-8a05-f0ff409252ee",
      "slug":"justice",
      "updated":"2014-10-26T17:24:26.058006+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.061493+00:00",
      name:"a780d884-e307-40cd-8325-366ce3b72d84",
      id:"Politics",
      "parent_id":"48f607ba-71ae-4786-8a05-f0ff409252ee",
      "slug":"politics",
      "updated":"2014-10-26T17:24:26.061513+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.090138+00:00",
      name:"74095951-f0ef-441c-85f4-949304ff6b89",
      id:"Civil rights",
      "parent_id":"48f607ba-71ae-4786-8a05-f0ff409252ee",
      "slug":"civil-rights",
      "updated":"2014-10-26T17:24:26.090158+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.168763+00:00",
      name:"ea047609-577d-4cfb-a90f-1e7f3eb247ee",
      id:"Ex-offenders",
      "parent_id":"48f607ba-71ae-4786-8a05-f0ff409252ee",
      "slug":"ex-offenders",
      "updated":"2014-10-26T17:24:26.168783+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.217959+00:00",
      name:"5052c4dc-875f-4f9b-912d-f587b7072189",
      id:"Victim support",
      "parent_id":"48f607ba-71ae-4786-8a05-f0ff409252ee",
      "slug":"victim-support",
      "updated":"2014-10-26T17:24:26.217979+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.221469+00:00",
      name:"98f6b247-f07a-430d-a181-9ec00f443da5",
      id:"Human rights",
      "parent_id":"48f607ba-71ae-4786-8a05-f0ff409252ee",
      "slug":"human-rights",
      "updated":"2014-10-26T17:24:26.221489+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.228406+00:00",
      name:"3d8a60ac-732f-4522-a9a7-7e564f16c5da",
      id:"Domestic violence",
      "parent_id":"48f607ba-71ae-4786-8a05-f0ff409252ee",
      "slug":"domestic-violence",
      "updated":"2014-10-26T17:24:26.228426+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.239065+00:00",
      name:"ca8badda-d7eb-4c75-9e9a-ef220689e53f",
      id:"Prisoners",
      "parent_id":"48f607ba-71ae-4786-8a05-f0ff409252ee",
      "slug":"prisoners",
      "updated":"2014-10-26T17:24:26.239084+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.249561+00:00",
      name:"328ece49-0076-4dfe-a0ea-4991741ad175",
      id:"Crime",
      "parent_id":"48f607ba-71ae-4786-8a05-f0ff409252ee",
      "slug":"crime",
      "updated":"2014-10-26T17:24:26.249580+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.121747+00:00",
      name:"db257ffa-ab8d-4f6e-8970-222971e6621a",
      id:"Veterans & Armed Forces",
      "parent_id":"24620d05-41c1-4884-a0cb-f70054faba9b",
      "slug":"veterans-armed-forces",
      "updated":"2014-10-26T17:24:26.121767+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.135921+00:00",
      name:"323b7713-bea6-484d-ac6a-7f5bdc9872d2",
      id:"Addiction",
      "parent_id":"24620d05-41c1-4884-a0cb-f70054faba9b",
      "slug":"addiction",
      "updated":"2014-10-26T17:24:26.135941+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.142866+00:00",
      name:"6fc9bb15-1728-4d4d-bdab-51be247acba0",
      id:"Social care",
      "parent_id":"24620d05-41c1-4884-a0cb-f70054faba9b",
      "slug":"social-care",
      "updated":"2014-10-26T17:24:26.142886+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.146376+00:00",
      name:"484cccef-29f7-463f-97e0-385657bc58da",
      id:"Disability",
      "parent_id":"24620d05-41c1-4884-a0cb-f70054faba9b",
      "slug":"disability",
      "updated":"2014-10-26T17:24:26.146396+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.203657+00:00",
      name:"8b373b98-7987-481e-bf4e-16edef3501f4",
      id:"Hospices",
      "parent_id":"24620d05-41c1-4884-a0cb-f70054faba9b",
      "slug":"hospices",
      "updated":"2014-10-26T17:24:26.203677+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.235376+00:00",
      name:"397cac61-1077-4f78-a8e5-d8c3dd29cde4",
      id:"Mental Health",
      "parent_id":"24620d05-41c1-4884-a0cb-f70054faba9b",
      "slug":"mental-health",
      "updated":"2014-10-26T17:24:26.235395+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.263725+00:00",
      name:"52bd46a8-63d2-47d8-b4a1-785f8215da59",
      id:"Medicine",
      "parent_id":"24620d05-41c1-4884-a0cb-f70054faba9b",
      "slug":"medicine",
      "updated":"2014-10-26T17:24:26.263745+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.260228+00:00",
      name:"3fd515b4-6e1a-41a1-bad9-ea401937555b",
      id:"Older people",
      "parent_id":"56fabd4e-bac3-484f-9f55-448445f83481",
      "slug":"older-people",
      "updated":"2014-10-26T17:24:26.260247+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.271205+00:00",
      name:"8678f792-d24e-4810-99d5-c6e6ba4196a4",
      id:"Families",
      "parent_id":"56fabd4e-bac3-484f-9f55-448445f83481",
      "slug":"families",
      "updated":"2014-10-26T17:24:26.271224+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.274701+00:00",
      name:"02b052fd-4f3d-418b-9542-0b980533b03b",
      id:"Young people",
      "parent_id":"56fabd4e-bac3-484f-9f55-448445f83481",
      "slug":"young-people",
      "updated":"2014-10-26T17:24:26.274721+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.278190+00:00",
      name:"8f0a66e0-30e7-4bdd-a190-7a9a36afcedd",
      id:"Children",
      "parent_id":"56fabd4e-bac3-484f-9f55-448445f83481",
      "slug":"children",
      "updated":"2014-10-26T17:24:26.278210+00:00"
   }
 ];
 var skills = [
   {
     selected : false,
      "created":"2014-10-26T17:24:25.568993+00:00",
      name:"779a9fc9-0455-4231-93bc-1f052afee71b",
      id:"Design",
      "parent_id":"f1178690-bbb8-4c66-8baa-e84f759b4919",
      "slug":"design",
      "updated":"2014-10-26T17:24:25.569014+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.583398+00:00",
      name:"9aa52b84-1483-47e1-9056-5c4ac83663cb",
      id:"Craft",
      "parent_id":"f1178690-bbb8-4c66-8baa-e84f759b4919",
      "slug":"craft",
      "updated":"2014-10-26T17:24:25.583419+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.594128+00:00",
      name:"51881d15-92f4-499d-8437-44de809304d7",
      id:"Photography",
      "parent_id":"f1178690-bbb8-4c66-8baa-e84f759b4919",
      "slug":"photography",
      "updated":"2014-10-26T17:24:25.594148+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.708382+00:00",
      name:"20027f0b-5ea8-4f1c-9e3d-a265c38bf5ba",
      id:"Creative",
      "parent_id":"f1178690-bbb8-4c66-8baa-e84f759b4919",
      "slug":"creative",
      "updated":"2014-10-26T17:24:25.708405+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.667294+00:00",
      name:"97937d90-3ed0-4ad0-8c6b-239a2fbdf2a2",
      id:"Building work",
      "parent_id":"a0f9725e-1d7e-4fb8-b7b6-55bf6c5b2f4f",
      "slug":"building-work",
      "updated":"2014-10-26T17:24:25.667326+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.675417+00:00",
      name:"31d3e613-48ec-403f-aa8a-2f63594915ef",
      id:"Carpentry",
      "parent_id":"a0f9725e-1d7e-4fb8-b7b6-55bf6c5b2f4f",
      "slug":"carpentry",
      "updated":"2014-10-26T17:24:25.675439+00:00"
   },
   {
      "created":"2014-10-26T17:24:25.679071+00:00",
     selected : false,
      name:"ac0b3909-7f3f-4c99-9b39-83a671947c20",
      id:"Catering",
      "parent_id":"a0f9725e-1d7e-4fb8-b7b6-55bf6c5b2f4f",
      "slug":"catering",
      "updated":"2014-10-26T17:24:25.679095+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:25.733364+00:00",
      name:"db7b2f44-e95a-4e07-b301-ff40ecfbf4aa",
      id:"Cleaning & tidying",
      "parent_id":"a0f9725e-1d7e-4fb8-b7b6-55bf6c5b2f4f",
      "slug":"cleaning-tidying",
      "updated":"2014-10-26T17:24:25.733405+00:00"
   },
   {
     selected : false,
      "created":"2014-10-26T17:24:26.079211+00:00",
      name:"8152d03d-116c-41db-8731-5b886d8aab61",
      id:"Outdoor work",
      "parent_id":"a0f9725e-1d7e-4fb8-b7b6-55bf6c5b2f4f",
      "slug":"outdoor-work",
      "updated":"2014-10-26T17:24:26.079231+00:00"
   },
   {
      "children":[

      ],
      selected : false,
      "created":"2014-10-26T17:24:25.777962+00:00",
      name:"e23536b8-44a1-4067-a24e-9a85e261a2ea",
      id:"Leadership",
      "parent_id":"000849b9-96f6-4a5b-9f14-97e94bbd837f",
      "slug":"leadership",
      "updated":"2014-10-26T17:24:25.777983+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:25.781653+00:00",
      name:"3bf2a03e-a26e-4106-a0c4-79fc6c55aabc",
      id:"Teamwork",
      "parent_id":"000849b9-96f6-4a5b-9f14-97e94bbd837f",
      "slug":"teamwork",
      "updated":"2014-10-26T17:24:25.781677+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:25.785172+00:00",
      name:"1f6df897-d3d6-48e9-8756-27e6582ef7b6",
      id:"Managing people",
      "parent_id":"000849b9-96f6-4a5b-9f14-97e94bbd837f",
      "slug":"managing-people",
      "updated":"2014-10-26T17:24:25.785193+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:25.788798+00:00",
      name:"b04783da-b082-45f3-9441-8fc7dc324346",
      id:"Governance",
      "parent_id":"000849b9-96f6-4a5b-9f14-97e94bbd837f",
      "slug":"governance",
      "updated":"2014-10-26T17:24:25.788822+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:25.810069+00:00",
      name:"c0c8f7a8-1ff8-40cd-9b4e-4ee23711deb0",
      id:"Organising",
      "parent_id":"000849b9-96f6-4a5b-9f14-97e94bbd837f",
      "slug":"organising",
      "updated":"2014-10-26T17:24:25.810089+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:25.890756+00:00",
      name:"d61784c6-ff8d-4077-bb48-eef3abce3874",
      id:"Web design",
      "parent_id":"fd38716e-1e0c-4068-8fcb-b5fe042c9870",
      "slug":"web-design",
      "updated":"2014-10-26T17:24:25.890778+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:25.953236+00:00",
      name:"3f154d17-eb45-48eb-a5bb-ea925079fa6a",
      id:"Electronics",
      "parent_id":"fd38716e-1e0c-4068-8fcb-b5fe042c9870",
      "slug":"electronics",
      "updated":"2014-10-26T17:24:25.953264+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:26.075654+00:00",
      name:"7ac9bee1-0418-44ff-baf1-5632b3f761ce",
      id:"IT",
      "parent_id":"fd38716e-1e0c-4068-8fcb-b5fe042c9870",
      "slug":"it",
      "updated":"2014-10-26T17:24:26.075674+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:25.960822+00:00",
      name:"5b888cdc-3b3c-40a1-aefb-ef4e08a2b8a5",
      id:"Reading & Writing",
      "parent_id":"fb9c1131-4cba-48e2-806d-11e04ecc7c82",
      "slug":"reading-writing",
      "updated":"2014-10-26T17:24:25.960842+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:26.011540+00:00",
      name:"a1611030-6b9e-4962-95ae-e44c10e56447",
      id:"Reasoning",
      "parent_id":"fb9c1131-4cba-48e2-806d-11e04ecc7c82",
      "slug":"reasoning",
      "updated":"2014-10-26T17:24:26.011560+00:00"
   },
   {
     selected : false,
      "children":[

      ],
      "created":"2014-10-26T17:24:26.193215+00:00",
      name:"cb536273-28e4-4d35-9e51-9f4042ba9609",
      id:"Maths",
      "parent_id":"fb9c1131-4cba-48e2-806d-11e04ecc7c82",
      "slug":"maths",
      "updated":"2014-10-26T17:24:26.193235+00:00"
   },
   {
     selected : false,
    "created":"2014-10-26T17:24:26.163957+00:00",
      name:"5fb2899b-1f6a-45fb-ae5e-4933ec31c257",
      id:"Talking to others",
      "parent_id":"aad54041-1ae0-42ef-8f94-6ece396bbdad",
      "slug":"talking-to-others",
      "updated":"2014-10-26T17:24:26.163977+00:00"
   },
   {

      "children":[

      ],
      "created":"2014-10-26T17:24:26.182820+00:00",
      name:"44a44ee9-662c-4598-829e-7ff48f3f1e52",
      id:"Counselling",
      "parent_id":"aad54041-1ae0-42ef-8f94-6ece396bbdad",
      "slug":"counselling",
      "updated":"2014-10-26T17:24:26.182840+00:00"
   },
   {
      "children":[

      ],
      "created":"2014-10-26T17:24:26.196687+00:00",
      name:"1b494203-4fe4-4513-98fb-c1833c5e9ab9",
      id:"Listening",
      "parent_id":"aad54041-1ae0-42ef-8f94-6ece396bbdad",
      "slug":"listening",
      "updated":"2014-10-26T17:24:26.196707+00:00"
   },
   {
      "children":[

      ],
      "created":"2014-10-26T17:24:26.267732+00:00",
      name:"c3e18aa0-0905-4748-86f3-7fa43b5b3804",
      id:"Negotiating",
      "parent_id":"aad54041-1ae0-42ef-8f94-6ece396bbdad",
      "slug":"negotiating",
      "updated":"2014-10-26T17:24:26.267752+00:00"
   }
 ];

 var roles = [
   {
     selected : false,
      id:"Administration",
      name:"administration"
   },
   {
     selected : false,
      id:"Advice",
      name:"advice"
   },
   {
     selected : false,
      id:"Advocacy",
      name:"advocacy"
   },
   {
     selected : false,
      id:"Business development",
      name:"business-development"
   },
   {
     selected : false,
      id:"Campaigning",
      name:"campaigning"
   },
   {
     selected : false,
      id:"Care management",
      name:"care-management"
   },
   {
     selected : false,
      id:"Communications & PR",
      name:"communications-pr"
   },
   {
     selected : false,
      id:"Consultant",
      name:"consultant"
   },
   {
     selected : false,
      id:"Design & creative",
      name:"design-creative"
   },
   {
     selected : false,
      id:"Event management",
      name:"event-management"
   },
   {
     selected : false,
      id:"Finance & accountancy",
      name:"finance-accountancy"
   },
   {
     selected : false,
      id:"Fundraising",
      name:"fundraising"
   },
   {
     selected : false,
      id:"Grant management",
      name:"grant-management"
   },
   {
     selected : false,
      id:"Housing management",
      name:"housing-management"
   },
   {
     selected : false,
      id:"Human resources",
      name:"human-resources"
   },
   {
     selected : false,
      id:"IT & technology",
      name:"it-technology"
   },
   {
     selected : false,
      id:"Legal",
      name:"legal"
   },
   {
     selected : false,
      id:"Management",
      name:"management"
   },
   {
     selected : false,
      id:"Marketing",
      name:"marketing"
   },
   {
     selected : false,
      id:"Nursing",
      name:"nursing"
   },
   {
     selected : false,
      id:"Operations & service delivery",
      name:"operations-service-delivery"
   },
   {
     selected : false,
      id:"Policy & research",
      name:"policy-research"
   },
   {
     selected : false,
      id:"Procurement & commissioning",
      name:"procurement-commissioning"
   },
   {
     selected : false,
      id:"Project management",
      name:"project-management"
   },
   {
     selected : false,
      id:"Retail",
      name:"retail"
   },
   {
     selected : false,
      id:"Senior management",
      name:"senior-management"
   },
   {
     selected : false,
      id:"Social care",
      name:"social-care"
   },
   {
     selected : false,
      id:"Social Worker",
      name:"social-worker"
   },
   {
     selected : false,
      id:"Support work",
      name:"support-work"
   },
   {
     selected : false,
      id:"Teaching",
      name:"teaching"
   },
   {
     selected : false,
      id:"Training",
      name:"training"
   },
   {
     selected : false,
      id:"Translation / intepretation",
      name:"translation-intepretation"
   },
   {
     selected : false,
      id:"Trustees & chair",
      name:"trustees-chair"
   },
   {
     selected : false,
      id:"Volunteer recruitment & management",
      name:"volunteer-recruitment-management"
   },
   {
     selected : false,
      id:"Web development",
      name:"web-development"
   },
   {
     selected : false,
      id:"Youth worker",
      name:"youth-worker"
   }
 ];
