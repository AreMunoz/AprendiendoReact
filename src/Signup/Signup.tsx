import React from 'react';
import { useForm } from "react-hook-form";
import './Signup.css';

// https://7rdhmq5l-8080.usw3.devtunnels.ms/signup
// method: POST

// mdn fetch

const Signup = () => {
    const { register, handleSubmit } = useForm();

    const mobilePhone = register("mobilePhone");

    const onSubmit = async (data) => {
        console.log(data);
        
        
        try{
            const res = await fetch('https://7rdhmq5l-8080.usw3.devtunnels.ms/signup', {
              method: 'POST',
              headers:{
                'Content-Type': "application/json",
              },
              body: JSON.stringify(data)
            });  
        }catch (error) {
         console.log(error);
        }
        


        // //fetch()
        // //  .then(res => {
             
        // //  })
        // //  .catch(e => {
        //     console.log(e);
        //   })

        // // /* try {
        // //   const res = await fetch()
        // // } catch (error) {
        //    console.log(error);
        //  } */
    };

    return (
        <div className="form" >
            <div>
                <label class="espacio">First Name</label>
                <input type="text" {...register("firstName")} />
            </div>
            <div>
                <label class="espacio">Last Name</label>
                <input type="text" {...register("lastName")} />
            </div>
            <div>
                <label class="espacio">Email</label>
                <input type="text" {...register("email")} />
            </div>
            <div>
                <label class="espacio">Mobile Phone</label>
                <input
                    type="text"
                    /* ref={mobilePhone.ref}
                    name={mobilePhone.name}
                    value={mobilePhone.value}
                    onChange={mobilePhone.onChange} */
                    {...mobilePhone}
                />
            </div>
            <div>
                <label class="espacio">Password</label>
                <input type="text" {...register("password")} />
            </div>
            <button type="submit" onClick={handleSubmit(onSubmit, (e) => console.log)}>Submit</button>
        </div>
    )
}


export default Signup;


// Spread operator
const obj = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = {
    ...obj,
    d: 4
}

// obj2 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4