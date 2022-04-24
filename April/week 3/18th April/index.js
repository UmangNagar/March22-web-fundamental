function myFunction() {
  // alert('hi')
  fetch("https://randomuser.me/api/?results=20")
    .then((data) => data.json())
    .then((response) => {
      // console.log(response.results);
      var tableRef = document.createElement("table");

      var trRef1 = document.createElement("tr");

      var thRef1 = document.createElement("th");
      var thRef2 = document.createElement("th");
      var thRef3 = document.createElement("th");
      var thRef4 = document.createElement("th");

      thRef1.innerText = "First Name";
      thRef2.innerText = "Last Name";
      thRef3.innerText = "Email";
      thRef4.innerText = "Gender";

      trRef1.appendChild(thRef1);
      trRef1.appendChild(thRef2);
      trRef1.appendChild(thRef3);
      trRef1.appendChild(thRef4);

      tableRef.appendChild(trRef1);

      document.body.appendChild(tableRef);

    

      response.results.map(function(ele){
          var trRef2 = document.createElement('tr')

          var tdRef1 = document.createElement('td')
          var tdRef2 = document.createElement('td')
          var tdRef3 = document.createElement('td')
          var tdRef4 = document.createElement('td')

          tdRef1.innerText = ele.name.first
          tdRef2.innerText = ele.name.last
          tdRef3.innerText = ele.email
          tdRef4.innerText = ele.gender

          trRef2.appendChild(tdRef1)
          trRef2.appendChild(tdRef2)
          trRef2.appendChild(tdRef3)
          trRef2.appendChild(tdRef4)

          tableRef.appendChild(trRef2)

          document.body.appendChild(tableRef)

          tableRef.style.border = "2";
          tableRef.style.borderStyle = "solid";
          tableRef.style.padding = "10px";
        //   tableRef.style.margin = "20px";
        //   tableRef.style.width = "90%";
        //   tableRef.style.alignSelf = "center";
        //   trRef2.style.alignSelf = 'center'
        //   trRef1.style.alignSelf = 'center'
          
          
          
          

      
    });


    });
}
