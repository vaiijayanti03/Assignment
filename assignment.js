function datasubmit() {
    var fname, mname, lname, email, phno, addr, dob, education, hobbies, data, fullname;
    var email = document.getElementById("txtemail");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    fname = document.getElementById("txtfname");
    mname = document.getElementById("txtmname");
    lname = document.getElementById("txtlname");
    email = document.getElementById("txtemail");
    phno = document.getElementById("txtphno");
    addr = document.getElementById("txtaddr");
    dob = document.getElementById("txtdob");
    education = document.getElementById("txtselect");
    music = document.getElementById("chckmusic");
    cricket = document.getElementById("chckcricket");
    other = document.getElementById("chckothers");
    male = document.getElementById("chckmale");
    female = document.getElementById("chckfemale");
    var x = document.getElementById("txtdob").value;
    fullname = fname.value +" "+ mname.value +" "+ lname.value;
    hobbies = "";
    if(fname.value == "" || lname.value == "" || email.value == "" || phno.value == "" || addr.value == "" || dob.value == "" || education.value == "")
    {
        if(fname.value == "")
        {
            fname.style.borderColor = "red";
        }
        if(lname.value == "")
        {
            lname.style.borderColor = "red";
        }
        if(email.value == "")
        {
            email.style.borderColor = "red";
        }
        if(phno.value == "")
        {
            phno.style.borderColor = "red";
        }
        if(addr.value == "")
        {
            addr.style.borderColor = "red";
        }
        if(dob.value == "")
        {
            dob.style.borderColor = "red";
        }
        if(education.value == "")
        {
            education.style.borderColor = "red";
        }
        alert("Please enter the required fields!");  
    }
    else{
        data = "<table><tr><th>Name</th><td>" +fullname+ "</td></tr>";
        if (email.value.match(mailformat)){
            data += "<tr><th>Email</th><td>" +email.value+ "</td></tr>";
        }
        else
        {
            email.style.borderColor = "red";
            alert("Please enter a valid email address");
           return;
        }
        
        if(isNaN(phno.value))
        {
            alert("Please Enter Digits only");
            phno.style.borderColor = "red";
        
        }
        if((phno.value).length != 10)
        {
            phno.style.borderColor = "red";
            alert("Please enter 10 digits of your phone number");
            return;
        }
        else{
            data += "<tr><th>Phone No.</th><td>" +phno.value+ "</td></tr>";
        }
        
        if(male.checked)
        {
            data += "<tr><th>Gender</th><td>Male</td></tr>";
        }
        else if(female.checked)
        {
            data += "<tr><th>Gender</th><td>Female</td></tr>";
        }
        data += "<tr><th>Address</th><td>" +addr.value+ "</td></tr>";
        data += "<tr><th>DOB</th><td>" +x+ "</td></tr>"
        data += "<tr><th>Education</th><td>" +education.value+ "</td></tr>";
        if(music.checked)
        {
            hobbies += "Music,";
        }
        if(cricket.checked)
        {
            hobbies += "Cricket,"; 
        }
        if(other.checked)
        {
            hobbies += "Others";
        }
        data += "<tr><th>Hobbies</th><td>" +hobbies+ "</td></tr></table>";
        document.getElementById("datatable").innerHTML = data;
    }
}

 