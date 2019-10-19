module.exports = {
  url: 'https://en-gb.facebook.com/r.php',
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