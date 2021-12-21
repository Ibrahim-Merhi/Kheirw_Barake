import './Contactus.css'
import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Contactus () {
    return(
        <html lang="ar" dir="rtl">
            <section class="page-title">
            	{/* <!-- Container Start --> */}
            	<div class="container">
            		<div class="row">
            			<div class="col-md-8 offset-md-2 text-center">
            				{/* <!-- Title text --> */}
            				<h3>تواصل معنا</h3>
            			</div>
            		</div>
            	</div>
            	{/* <!-- Container End --> */}
            </section>
            {/* <!-- page title --> */}

            {/* <!-- contact us start--> */}
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-us-content p-4">
                                <h5>تواصل معنا</h5>
                                <h1 class="pt-3">كيف يمكننا مساعدتك ؟</h1>
                                <p class="pt-3 pb-5">في حال وجود أي استفسار أو مشاكل يمكنكم التواصل معنا عبر البريد الإلكتروني</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                                <form action="#">
                                    <fieldset class="p-4">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-lg-6 py-2">
                                                    <input type="text" placeholder="الاسم *" class="form-control" required />
                                                </div>
                                                <div class="col-lg-6 pt-2">
                                                    <input type="email" placeholder="البريد الإلكتروني *" class="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <select name="" id="" class="form-control w-100">
                                            <option value="1">Select Category</option>
                                            <option value="1">Laptop</option>
                                            <option value="1">iPhone</option>
                                            <option value="1">Monitor</option>
                                            <option value="1">I need</option>
                                        </select> */}
                                        <textarea name="message" id=""  placeholder="أكتب هنا *" class="border w-100 p-3 mt-3 mt-lg-4"></textarea>
                                        <div class="btn-grounp">
                                            <button type="submit" class="btn btn-primary mt-2 float-right">إرسال</button>
                                        </div>
                                    </fieldset>
                                </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- contact us end --> */}
        </html>
    )
}

export default Contactus