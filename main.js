let accountBase = [
  {
    nickname: "Aman",
    password: "password",
    confirmPassword: "password",
    age: 20,
    isLogin: false,
  },
];
function createUser() {
  function checkPasswords() {
    if (regUser.confirmPassword !== regUser.password) {
      alert("Passwords aren't matching!");
      createUser();
    } else {
    }
  }
  function checkUniqueUsername() {
    if (accountBase.find(i => i.nickname === regUser.nickname)) {
      alert("This name already exists!");
      createUser();
    }
  }

  let regUser = {
    nickname: prompt("Enter your nickname"),
    password: prompt("Enter your password"),
    confirmPassword: prompt("Confirm your password"),
    age: prompt("Enter your age"),
    isLogin: false,
  };
  checkUniqueUsername();
  checkPasswords();
  if (
    regUser.age ||
    regUser.nickname ||
    regUser.password ||
    regUser.confirmPassword
  ) {
    accountBase.push(regUser);
    alert("Account was created!");
  } else {
    alert("You should input your info!");
    createUser();
  }
}
createUser();
console.log(accountBase);
// Рабочие функции:
// createUser()
// authorise()
// checkPasswords()
// checkUniqueUsername()
// updateUserAccount()
// ? deleteUser()
// logoutUser()
// код проверяет правильность пароля если я редактирую или удаляю аккаунт
function authorise() {
  if (accountBase[1].isLogin === true) {
    alert("You are already signed in!");
  } else {
    alert("Begin authorisation...");
    nickname = prompt("Enter your login");
    password = prompt("Enter your password");
  }
  if (
    accountBase.find(i => i.nickname === this.nickname) &&
    accountBase.find(i => i.password === this.password)
  ) {
    const index = accountBase.findIndex(i => i.nickname === nickname);
    accountBase[index].isLogin = true;
    alert("Login succesful!");
  } else {
    alert("Incorrect login or password!");
  }
}
function updateUserAccount() {
  if (accountBase[1].isLogin === false) {
    alert("You aren't signed in!");
  } else {
    password = prompt("Enter your password");
    if (accountBase.find(i => i.password === this.password)) {
      alert("Begin user info editing... ");
      let changeUser = {
        nickname: prompt("Enter your new nickname"),
        age: prompt("Enter your new age"),
        isLogin: true,
      };
      accountBase.splice(1, 1, changeUser);
      alert("Your info has been changed!");
    } else {
      alert("Incorrect password!");
    }
  }
  console.log(accountBase);
}
function deleteUser() {
  if (accountBase[1].isLogin === false) {
    alert("You aren't signed in!");
  } else {
    if (confirm("Are you sure you want to delete your account?")) {
      password = prompt("Enter your password");
      if (accountBase.find(i => i.password === this.password)) {
        accountBase.pop();
        alert("Your account was deleted!");
        console.log(accountBase);
      } else {
        alert("Incorrect password!");
        deleteUser();
      }
    }
  }
}
function logoutUser() {
  if (accountBase[1].isLogin === false) {
    alert("You aren't signed in!");
  } else {
    accountBase[1].isLogin = false;
    alert("You have been logged out");
  }
}
