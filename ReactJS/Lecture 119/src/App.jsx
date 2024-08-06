import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(2)  // submitting delay simulation
    
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(data)
    })
    let res = await r.text()
    
    console.log(data, res)

    // if (data.Name !== "Arun") {
    //   setError("myform", { message: "User credentials are invalid" })
    // }
    // else if (data.Name === "Roy") {
    //   setError("blocked", { message: "This user is blocked" })
    // }
  }

  return (
    <>
      {isSubmitting && <p>Submitting...</p>}
      <div className='container'>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:
            <input
              id="name"
              {...register("Name", {
                required: { value: true, message: "Name is required" },
                maxLength: { value: 20, message: "Maximum length is 20 characters" },
                minLength: { value: 3, message: "Minimum length is 3 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Numbers and special characters are not allowed" }
              })
              }
            />
            {errors.Name && <p role="alert">{errors.Name.message}</p>}
          </label>

          <label htmlFor="gender">Gender:
            <select id="gender" defaultValue="" {...register("gender", { required: "Gender is required" })}>
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p role="alert">{errors.gender.message}</p>}
          </label>

          <label htmlFor="age">Age:
            <input id="age" type="number" placeholder='Your age'
              {...register("age", { min: { value: 18, message: "Minimum age is 18" }, max: { value: 99, message: "Maximum age is 99" } })}
            />
            {errors.age && <p role="alert">{errors.age.message}</p>}
          </label>

          <label htmlFor="email">Email:
            <input id="email" type="email"
              {...register("mail", {
                required: "Email address is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" }
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail.message}</p>}
          </label>

          <label htmlFor="password">Password:
            <input id="password" type="password" placeholder='Password'
              {...register("Password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
            />
            {errors.Password && <p role="alert">{errors.Password.message}</p>}
          </label>

          <input className='submit_btn' disabled={isSubmitting} type="submit" value="Submit" />
          {errors.blocked && <p>{errors.myform.message}</p>}
          {errors.myform && <p>{errors.blocked.message}</p>}
        </form>
      </div>
    </>
  )
}

export default App
