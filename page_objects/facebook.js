module.exports = {
  url: 'https://www.facebook.com/?_rdc=1&_rdr',
  elements: {
    body: 'body',
    searchBar: 'input[name="p"]',
    IdFristNameForm : 'input[name="firstname"]',
    IdLastNameForm : 'input[name="lastname"]',
    IdEmailForm : 'input[name="reg_email__"]',
    IdConfirmEmailForm : 'input[name="reg_email_confirmation__"]',
    IdPassForm : 'input[name="reg_passwd__"]',
    IdMonthControl : 'select[name="birthday_month"]',
    IdDateControl : 'select[name="birthday_day"]',
    IdYearControl : 'select[name="birthday_year"]',
    IdGenderOption : '._8esa[value="2"]',
    IdSingUpButton : 'button[name="websubmit"]'
    },
  commands: [{
    WriteForm(_text,_form) {       
      let form;
      switch (_form) {
          case "first name":
            form = "@IdFristNameForm"; 
            break;
          case "last name":
            form = "@IdLastNameForm"; 
            break;
          case "email":
            form = "@IdEmailForm"; 
            break;
          case "re-enter email":
            form = "@IdConfirmEmailForm"; 
            break;
          case "password":
            form = "@IdPassForm"; 
            break;
      }  
      return this
          .setValue(`${form}`, _text)
          .pause(2000);  
    },
    SetValControl(_value,_control) {       
      let control;
      switch (_control) {
          case "month":
            control = "@IdMonthControl"; 
            break;
          case "day":
            control = "@IdDateControl"; 
            break;
          case "year":
            control = "@IdYearControl"; 
            break;
      } 

      if(_control = "month")
        {
          switch (_value) {
            case 'Jan':
              _value = 'Ene'; 
              break;
            case 'Feb':
              _value = 'Feb'; 
              break;
            case 'Mar':
              _value = 'Mar'; 
              break;
            case 'Apr':
              _value = 'Abr'; 
              break;
            case 'May':
              _value = 'May'; 
              break;
            case 'Jun':
              _value = 'Jun'; 
              break;
            case 'Jul':
              _value = 'Jul'; 
              break;
            case 'Aug':
              _value = 'Ago'; 
              break;
            case 'Sep':
              _value = 'Sep'; 
              break;
            case 'Oct':
              _value = 'Oct'; 
              break;
            case 'Nov':
              _value = 'Nov'; 
              break;
            case 'Dec':
              _value = 'Dec'; 
              break;
          }
        }

      return this
          .setValue(`${control}`, _value)
          .pause(2000);  
    },
    SelMaleGender(){
      return this
        .click("@IdGenderOption").pause(2000);
    },
    ClickSingUp(){
      return this
        .click("@IdSingUpButton").pause(2000);
    }
  }]
}