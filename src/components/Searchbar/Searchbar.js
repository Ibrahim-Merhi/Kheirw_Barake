import React from "react";
import './Searchbar.css';

const Searchbar = () => {
    return(
<section className="page-search">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				{/* <!-- Advance Search --> */}
				<div className="advance-search">
					<form>
						<div className="row">
							<div className="form-group col-md-4">
								<input type="text" className="form-control my-2 my-lg-0" id="inputtext4" placeholder="What are you looking for" />
							</div>
							<div className="form-group col-md-3">
								<input type="text" className="form-control my-2 my-lg-0" id="inputCategory4" placeholder="Category" />
							</div>
							<div className="form-group col-md-3">
								<input type="text" className="form-control my-2 my-lg-0" id="inputLocation4" placeholder="Location" />
							</div>
							<div className="form-group col-md-2" style={{paddingTop:'0.5%'}}>
								
								<button type="submit" className="btn btn-primary">Search Now</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
    )
}

export default Searchbar