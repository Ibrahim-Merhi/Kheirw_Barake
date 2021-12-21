import React from 'react'

function AdvancedSearch ()  {
return(
<div className="advance-search pb-3" >
<div className="container">
    <div className="row justify-content-center">
        <div className="col align-content-center">
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" id="inputtext4" placeholder="يمكنك كتابة عما تريد ان تبحث" />
                    </div>
                    
                    {/* <div className="form-group col-md-3">
                        <select className="w-100 form-control mt-lg-1 mt-md-2">
                            <option>Category</option>
                            <option value="1">Top rated</option>
                            <option value="2">Lowest Price</option>
                            <option value="4">Highest Price</option>
                        </select>
                    </div> */}
                   
                    <div className="form-group col-md-2 align-self-center pt-1">
                        <button type="submit" className="btn btn-primary"> <i class="fas fa-search"></i> بحث</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
);
}
export default AdvancedSearch