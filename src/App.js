import "./App.scss";
import React from "react";

function App() {
  const elName = React.useRef(null);
  const elPhone = React.useRef(null);
  const elEmail = React.useRef(null);
  const elPassword = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8030/newUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: elName.current.value,
        user_phone: elPhone.current.value,
        user_email: elEmail.current.value,
        user_password: elPassword.current.value,
      }),
    });

    const data = await res.json();
    console.log(data);
    elName.current.value = null;
    elPhone.current.value = null;
    elEmail.current.value = null;
    elPassword.current.value = null;
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <form onSubmit={handleSubmit} className="rest-form">
            <h2>Sing in</h2>
            <input
              required
              type="text"
              autoComplete="off"
              placeholder="Name"
              className="rest-name"
              ref={elName}
            />
            <input
              required
              type="text"
              autoComplete="off"
              placeholder="Phone number"
              className="rest-name"
              ref={elPhone}
            />
            <input
              required
              type="email"
              autoComplete="off"
              placeholder="Email"
              className="rest-name"
              ref={elEmail}
            />
            <input
              required
              type="password"
              autoComplete="off"
              placeholder="Password"
              className="rest-name"
              ref={elPassword}
            />

            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
