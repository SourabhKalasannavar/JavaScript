function one()
        {
            var a = document.getElementById("input").value;
            if(a=="Faculty"){
                var array = ["Choose","BCA", "MCA", "BTech"];
            }else if(a=="Student"){
                var array = ["Choose","BCAStudent", "MCAStudent", "BTechStudent"];
            }else{
                var array = [];
            }

            

            var string = "";
            for( i=0;i<array.length;i++)
            {
                string = string + "<option>" + array[i] + "</option>";
            }
            string="<select name='lol'>" + string+ "</select> ";
           return document.getElementById("output").innerHTML = string;  
        }

        
        function faculty()
        {
            var a = document.getElementById("input").value;
            console.log(a);
            if(a==="Faculty"){
                var b = document.getElementById("output").value;
            if(b=="BCA"){
                var arrayOne = ["Choose","Modern Operating Environment", "C Programming", "Financial Accounting", "	Database Management System"];
            }else if(b=="MCA"){
                var arrayOne = ["Choose","Mathematical Foundation", "Operating Systems", "Fundamentals of Computer Organization", 
                            "Probability and Combinatorics", "Web Technology", "Unix and Windows Lab", "Elements of Basic Communication","Programming Fundamentals"];
            }else if(b=="BTech"){
                var arrayOne = ["Choose", "Operating Systems", "Fundamentals of Computer Organization", 
                            "Probability and Combinatorics", "Web Technology", "Unix and Windows Lab", "Elements of Basic Communication","Programming Fundamentals"];
            }else{
                var arrayOne = [];
            }

            var stringOne = "";
            for( j=0;j<arrayOne.length;j++)
            {
                stringOne = stringOne + "<option>" + arrayOne[j] + "</option>";
            }
            stringOne="<select name='lol'>" + stringOne+ "</select>";
            document.getElementById("outputOne").innerHTML = stringOne;
            
            
            }else{
                var b = document.getElementById("output").value;
            if(b=="BCAStudent"){
                var arrayTwo = ["Choose", "1st year", "2nd Year", "3rd Year"];
            }else if(b=="MCAStudent"){
                var arrayTwo = ["Choose", "1st year", "2nd Year", "3rd Year"];
            }else if(b=="BTechStudent"){
                var arrayTwo = ["Choose",  "1st year", "2nd Year", "3rd Year"];
            }else{
                var arrayTwo = [];
            }

            var stringTwo = "";
            for (k=0;k<arrayTwo.length;k++)
            {
                stringTwo = stringTwo + "<option>" + arrayTwo[k] + "</option>";
            }
            stringTwo = "<select name='lol'>" + stringTwo + "<select>";
            document.getElementById("outputOne").innerHTML = stringTwo;
            }  
        }

        let empArray = [];
        function submit(){
            let name = document.getElementById("username").value;
            let dob = document.getElementById("dob").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let cpassword = document.getElementById("cpassword").value;
            let phone = document.getElementById("phone").value;
            let facultyStudent = document.getElementById("input").value;
            let facultyStudentOne = document.getElementById("output").value;
            let facultyStudentTwo = document.getElementById("outputOne").value;
            let address = document.getElementById("address").value;

            let stud= 
            {
            fname:name,
            dateOfBirth:dob,
            emailOne:email,
            pass:password,
            cpass:cpassword,
            mobile:phone,
            fs:facultyStudent,
            fsOne:facultyStudentOne,
            fsTwo:facultyStudentTwo,
            addr:address
            }

            empArray.push(stud);
            console.log(empArray);

            let data = JSON.stringify(empArray);
            localStorage.setItem("stud_details", data);
            
        }