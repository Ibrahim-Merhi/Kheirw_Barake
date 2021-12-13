import React from 'react'

function Login() {
    return(
        <section class="login py-5 border-top-1">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-8 align-item-center">
                        <div class="border">
                            <h3 class="bg-gray p-4">Login Now</h3>
                            <form action="#">
                                <fieldset class="p-4">
                                    <input type="text" placeholder="Username" class="border p-3 w-100 my-2" />
                                    <input type="password" placeholder="Password" class="border p-3 w-100 my-2" />
                                    <div class="loggedin-forgot">
                                        <input type="checkbox" id="keep-me-logged-in" />
                                        <label for="keep-me-logged-in" class="pt-3 pb-2">Keep me logged in</label>
                                    </div>
                                    <button type="submit" class="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3">Log in</button>
                                    <a class="mt-3 d-block  text-primary" href="#">Forget Password?</a>
                                    <a class="mt-3 d-inline-block text-primary" href="register.html">Register Now</a>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;