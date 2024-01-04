<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Keybolic</title>
    <link rel="stylesheet" href="style_reg.css" />
  </head>
  <body>
    <div class="nav_bar">
      <div class="nav_container">
        <h2 class="logo"><a href="index.html">Keybolic</a></h2>
      </div>
    </div>
    <div class="Register_form">
      <h2 class="heading_reg">Create Account</h2>
      <p class="p_log">Register to get started.</p>
      <form action="reg.php" method="post" class="Reg_form">
        <div class="reg_gr">
          <label class="txt_inp" for="fullname">Enter your Name:</label>
          <input type="text" id="fullname" name="fullname" class="log_plc" required/>
        </div>
        <div class="reg_gr">
          <label class="txt_inp" for="lname">Enter your user Name</label>
          <input type="text" id="u_name" name="u_name" class="log_plc" required/>
        </div>
        <div class="reg_gr">
          <label class="txt_inp" for="email">Enter your Email:</label>
          <input type="email" id="email" name="email" class="log_plc" required/>
        </div>
        <div class="reg_gr">
          <label class="txt_inp" for="pwd">Password:</label>
          <input type="password" id="pwd" name="pwd" class="log_plc" required/>
        </div>

        <div class="reg_gr">
          <input type="checkbox" id="agree" name="agree" value="agree" required/>
          <label for="agree">I agree to the <a href="#">Terms and Conditions</a></label>
          <input type="submit" value="Submit" class="btn_reg" name="btn_reg"/>
      </form>
    </div>
  </body>
</html>